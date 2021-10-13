import { CustomError } from "./custom-error";
export declare class NotFoundError extends CustomError {
    msg: string;
    statusCode: number;
    constructor(msg: string);
    serializeErrors(): {}[];
}
