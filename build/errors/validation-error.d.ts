import { CustomError } from "./custom-error";
import { ValidationError } from "express-validator";
export declare class ExpressValidatorError extends CustomError {
    errors: ValidationError[];
    statusCode: number;
    constructor(errors: ValidationError[]);
    serializeErrors(): {}[];
}
