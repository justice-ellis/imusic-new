import db from '../config/db';
import { NextFunction, Request, Response } from 'express';
import { Model, DataTypes} from 'sequelize';
import Notification, { mapNotification } from '../models/notificationModel';
import { QueryTypes } from 'sequelize';
import { text } from 'body-parser';
import conversation from '../models/conversationModel';
import sequelize from 'sequelize';
import Users, { mapUser } from '../models/userModel';
import { getAllUsers } from './userController';

type N = {
    id: number;
    notificationId: string;
    senderId: number;
    receiverId: number;
    type: string;
    
}

export const sendNotification = async(req: Request, res: Response | any) => {
   try {
    mapNotification(db);
    mapUser(db);
    const notification: N = {
        id: req.body.id,
        notificationId: req.body.notificationId,
        senderId: req.body.senderId,
        receiverId: req.body.receiverId,
        type: req.body.type
        
    };

    console.log(notification);

    Notification.create(notification);

    return res.status(200).json({ 'message': `✔ ${notification.type} Notification Sent Successfully 🎁`})

   } catch (error) {
    
   }


    
}
export const getNotification = async(req: Request, res: Response | any) => {
    mapNotification(db);


}
export const deleteNotification = async(req: Request, res: Response | any) => {
    mapNotification(db);


}

