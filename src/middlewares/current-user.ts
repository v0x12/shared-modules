import express, { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

interface Payload {
  id: string;
  email: string;
}

declare global {
  namespace Express {
    interface Request {
      currentUser: Payload | null;
    }
  }
}

export const currentUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (req.session?.jwt) {
    const user = verify(req.session!.jwt, process.env.JWT_KEY!) as Payload;
    req.currentUser = user;
  }
  next();
};
