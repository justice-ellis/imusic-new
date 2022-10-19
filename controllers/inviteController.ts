import db from '../config/db';
import { NextFunction, Request, Response } from 'express';
import { Model, DataTypes} from 'sequelize';
import Notification, { mapNotification } from '../models/notificationModel';
import { QueryTypes } from 'sequelize';
import { text } from 'body-parser';
import conversation from '../models/conversationModel';
import sequelize from 'sequelize';
import Invites, { mapInvite } from '../models/inviteModel';
import { getAllUsers } from './userController';

type I = {
    id: number;
    inviteId: string;
    senderId: number;
    receiverId: number;
    roomId: string;
    
}


type N = {
    id: number;
    notificationId: string;
    senderId: number;
    receiverId: number;
    type: string;
    
}

export const sendInvite = async(req: Request, res: Response | any) => {
   try {
    mapInvite(db);
    //mapNotification(db);
    const invite: I = {
        id: req.body.id,
        inviteId: req.body.invite,
        senderId: req.body.senderId,
        receiverId: req.body.receiverId,
        roomId: req.body.roomId
        
    };

    console.log(invite);

    Invites.create(invite);

    const notification: N = {
        id: req.body.id,
        notificationId: req.body.notificationId,
        senderId: invite.senderId,
        receiverId: invite.receiverId,
        type: "invite"
        
    };

    return res.status(200).json({ 'message': `✔ Invite Sent Successfully 🏆 ${notification.type} Notification Sent Successfully 🎁`});

} catch (error) {
    
}
}
