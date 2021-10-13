import { CustomError } from "./custom-error";

export class NotFoundError extends CustomError {
  statusCode: number = 404;

  constructor(public msg: string) {
    super("Not found error!");
    Object.setPrototypeOf(this, NotFoundError.prototype);
  }

  serializeErrors(): {}[] {
    return [{ message: this.msg || "Not Found error!" }];
  }
}
