export declare abstract class CustomError extends Error {
    abstract statusCode: number;
    constructor(msg?: string);
    abstract serializeErrors(): {}[];
}
