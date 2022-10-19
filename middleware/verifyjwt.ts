import express from 'express'
import { NextFunction, Request, Response } from 'express';
import jwt  from 'jsonwebtoken';
import { SECRET_KEY } from '../controllers/userController';
require('dotenv').config();

const verifyJWT = async (req: Request | any, res: Response | any, next: NextFunction) => {
    const authHeader = req.headers.authorization;
    
    if (!authHeader) return res.sendStatus(401);
    console.log(authHeader); //Bearer token
    const token = authHeader.split(' ')[1];
    jwt.verify(
        token,
        SECRET_KEY,
        (err: any, decoded: any) => {
            if (err) return res.sendStatus(403).json({'message': '⚠ Invalid Token!'}); //invalid token
            //req.user = decoded.username;
            next();
        }
    );
};

export default verifyJWT