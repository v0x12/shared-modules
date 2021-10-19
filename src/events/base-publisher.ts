import { Stan } from "node-nats-streaming";
import { Subjects } from "./subjects";

interface Event {
  subjects: Subjects;
  data: any;
}

export abstract class Publisher<T extends Event> {
  protected _client: Stan;
  protected abstract subject: T["subjects"];

  constructor(client: Stan) {
    this._client = client;
  }

  public async publish(data: T["data"]): Promise<void> {
    return new Promise((resolve, reject) => {
      this._client.publish(this.subject, JSON.stringify(data), (err) => {
        if (err) {
          return reject(err);
        }
        console.log(`Event was published to this subject ${this.subject}`);
        return resolve();
      });
    });
  }
}
