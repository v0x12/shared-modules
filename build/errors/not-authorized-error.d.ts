import { CustomError } from "./custom-error";
export declare class NotAuthorizedError extends CustomError {
    msg?: string | undefined;
    statusCode: number;
    constructor(msg?: string | undefined);
    serializeErrors(): {}[];
}
