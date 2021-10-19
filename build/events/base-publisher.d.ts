import { Stan } from "node-nats-streaming";
import { Subjects } from "./subjects";
interface Event {
    Subjects: Subjects;
    data: any;
}
export declare abstract class Publisher<T extends Event> {
    protected _client: Stan;
    protected abstract subject: T["Subjects"];
    constructor(client: Stan);
    publish(data: T["data"]): Promise<void>;
}
export {};
