import { Request, Response, NextFunction } from "express";
import { validationResult } from "express-validator";
import { ExpressValidatorError } from "../errors/validation-error";

export const validateRequest = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const errors = validationResult(req).array();

  if (errors.length > 0) {
    throw new ExpressValidatorError(errors);
  }

  next();
};
