import { Request, Response, NextFunction } from "express";
import { CustomError } from "../errors/custom-error";

// Global error handler
export const errorHandler = async (
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // All the errors in the API which you define is catching by this if statement
  if (err instanceof CustomError) {
    return res.status(err.statusCode).send({ errors: err.serializeErrors() });
  }

  // There are catching errors which are unexpected or the application is not ready to handle yet.
  console.log(err);

  res.status(500).send(err);
};
