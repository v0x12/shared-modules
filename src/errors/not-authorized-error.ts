import { CustomError } from "./custom-error";

export class NotAuthorizedError extends CustomError {
  statusCode: number = 401;

  constructor(public msg?: string) {
    super("Not Authorized Error.");

    Object.setPrototypeOf(this, NotAuthorizedError.prototype);
  }

  serializeErrors(): {}[] {
    return [{ message: this.msg || "Not authorized!" }];
  }
}
