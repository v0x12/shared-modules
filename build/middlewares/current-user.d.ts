import { Request, Response, NextFunction } from "express";
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
export declare const currentUser: (req: Request, res: Response, next: NextFunction) => Promise<void>;
export {};
