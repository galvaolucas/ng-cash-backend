import { NextFunction, Response, Request } from "express";
import jwt from 'jsonwebtoken';


export async function ensureAuthenticated (req: Request, res: Response, next: NextFunction): Promise<void> {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        throw new Error('Token is missing!');
    }
   
    const [, token] = authHeader.split(' ');

    try {
        const secret = process.env.APP_SECRET;
        jwt.verify(token, secret);

        return next();
    } catch (err) {
        res.status(400).json({ message: 'Token invalid!'})
    }
}