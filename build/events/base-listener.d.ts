import { Message, Stan } from "node-nats-streaming";
import { Subjects } from "./subjects";
interface Event {
    Subjects: Subjects;
    data: any;
}
export declare abstract class Listener<T extends Event> {
    protected abstract subject: T["Subjects"];
    protected abstract queueGroupName: string;
    protected _client: Stan;
    ackWait: number;
    abstract onMessage(data: T["data"], msg: Message): Promise<void>;
    constructor(client: Stan);
    private subscriptionOptions;
    listen(): Promise<void>;
    private parseMessage;
}
export {};
