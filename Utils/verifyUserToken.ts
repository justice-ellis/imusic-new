require('dotenv').config();
import bcrypt from 'bcrypt';
import db from '../config/db';
import jwt, {Secret} from 'jsonwebtoken';
import Users,  {mapUser} from '../models/userModel';
import { NextFunction, Request, Response } from 'express';
import { getErrorMessage } from '../middleware/errorHandler';

export const SECRET_KEY: Secret = "nanatetragramatonages";

export const verifyUserToken =  async(token:string)=> {
   const user =  await jwt.verify(
        token,
        SECRET_KEY,
        (err, decoded) => {
            if (err) return  Promise.reject(err);
            if (err) return  Promise.resolve(decoded);
        }
    );
    return user;
}

export const HasjwtElseCreateUser = (req:Request | any, res: Response | any) => {

    if(req.cookie.jwt){
        verifyUserToken(req.cookie.jwt).then(value =>{
            res.status(200).json({
                'user': value,
                'message': `Authorized 🏆 Logged In!`})
        }).catch(error=>{
            req.cookie.jwt = null;
        }); 
    }

} 
