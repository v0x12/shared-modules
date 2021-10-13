import { CustomError } from "./custom-error";
import { ValidationError } from "express-validator";

export class ExpressValidatorError extends CustomError {
  statusCode: number = 400;

  constructor(public errors: ValidationError[]) {
    super("Express validator error handling.");

    Object.setPrototypeOf(this, ExpressValidatorError.prototype);
  }

  serializeErrors(): {}[] {
    return this.errors.map((error) => {
      return { field: error.param, message: error.msg };
    });
  }
}
