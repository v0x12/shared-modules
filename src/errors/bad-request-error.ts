import { CustomError } from "./custom-error";

export class BadRequestError extends CustomError {
  statusCode: number = 400;

  constructor(public msg?: string) {
    super("Bad request error");

    Object.setPrototypeOf(this, BadRequestError.prototype);
  }

  serializeErrors(): {}[] {
    return [
      {
        message: this.msg || "Bad request error, message wasn't specified.",
      },
    ];
  }
}
