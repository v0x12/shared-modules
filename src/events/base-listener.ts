import { Message, Stan, SubscriptionOptions } from "node-nats-streaming";
import { Subjects } from "./subjects";

interface Event {
  subjects: Subjects;
  data: any;
}

export abstract class Listener<T extends Event> {
  protected abstract subject: T["subjects"];
  protected abstract queueGroupName: string;
  protected _client: Stan;
  public ackWait: number = 5 * 1000;
  protected abstract onMessage(data: T["data"], msg: Message): Promise<void>;

  constructor(client: Stan) {
    this._client = client;
  }

  private subscriptionOptions(): SubscriptionOptions {
    return this._client
      .subscriptionOptions()
      .setDeliverAllAvailable()
      .setManualAckMode(true)
      .setAckWait(this.ackWait)
      .setDurableName(this.queueGroupName);
  }

  public async listen() {
    const subscription = this._client.subscribe(
      this.subject,
      this.queueGroupName,
      this.subscriptionOptions()
    );

    subscription.on("message", (msg: Message) => {
      console.log(`Message received on ${this.subject}.`);
      const parsedData = this.parseMessage(msg);

      this.onMessage(parsedData, msg);
    });
  }

  private parseMessage(msg: Message) {
    const data = msg.getData();

    return typeof data === "string"
      ? JSON.parse(data)
      : Buffer.from(data).toString("utf-8");
  }
}
