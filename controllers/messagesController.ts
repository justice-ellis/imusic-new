import db from '../config/db';
import { NextFunction, Request, Response } from 'express';
import { Model, DataTypes} from 'sequelize';
import privateMessages, { mapPrivatemessage } from '../models/privatemessagesModel';
import { QueryTypes } from 'sequelize';
import { text } from 'body-parser';
import conversation from '../models/conversationModel';
import sequelize from 'sequelize';
import Users, { mapUser } from '../models/userModel';
import Notifications, { mapNotification } from '../models/notificationModel';

type M = {
    id: number;
    communicationId: string;
    senderId: number;
    receiverId: number;
    text: string;
    seen: boolean;
}

type N = {
    id: number;
    notificationId: string;
    senderId: number;
    receiverId: number;
    type: string;
    
}

export const sendMessage = async (req: Request | any, res: Response | any) => {
    try {
        mapPrivatemessage(db);
        const message: M = {
            id: req.body.id,
            communicationId: req.body.communicationId,
            senderId: req.body.senderId,
            receiverId: req.body.receiverId,
            text: req.body.text,
            seen: req.body.seen,
        };

        mapUser(db);
        
        //verify sender & receiver

        const verifySendererid = await Users.findOne({where: {userId: message.senderId}});

        if (verifySendererid === null) return res.status(404).json({'message': '⚠ Invalid SenderId!'});

        const verifyReceiverid = await Users.findOne({where: {userId: message.receiverId}});

        if (verifyReceiverid === null) return res.status(404).json({'message': '⚠ Invalid RecieverId!'});

        if (!message.text) {

          throw new Error("⚠ Enter Message!")

        } 
        
        const conversation_id = message.senderId + '@' + message.receiverId

        mapPrivatemessage(db);
        mapNotification(db);

        const newMessage: M = {
        id: req.body.id,
        communicationId: conversation_id,
        senderId: req.body.senderId,
        receiverId: req.body.receiverId,
        text: req.body.text,
        seen: req.body.seen,
        };

        console.log(newMessage)

        privateMessages.create(newMessage);

        const notification: N = {
            id: req.body.id,
            notificationId: req.body.notificationId,
            senderId: newMessage.senderId,
            receiverId: newMessage.receiverId,
            type: "message"
            
        };
    
        console.log(notification);
    
        Notifications.create(notification);
    
        return res.status(200).json({ 'message': `✔ Message Sent Successfully 🏆 ${notification.type} Notification Sent Successfully 🎁` })
        
    } catch (error) {

        return res.status(404).json({ 'message': '⚠ Message Not Sent!'})

    }
};

export const getMessage = async (req: Request | any, res: Response | any) => {
    mapPrivatemessage(db);
        const message: M = {
            id: req.body.id,
            communicationId: req.body.communicationId,
            senderId: req.body.senderId,
            receiverId: req.body.receiverId,
            text: req.body.text,
            seen: req.body.seen,
        };


    const chat = await privateMessages.findAll({
        attributes: ['text']
    }); 
      
    console.log(chat);
    res.json({chat})
}

export const getConversationById = async (req: Request, res: Response | any) => {

    try {
        
        mapPrivatemessage(db);
        
        const conversation_id = req.params.id;

        const conversation = await privateMessages.findAll({where: {communicationId: conversation_id}});

        console.log(conversation);

        return res.status(200).json({conversation});


    } catch (error) {
        
        return res.status(404).json({ 'message': '⚠ Conversation Do Not Exist!'});

    }
}
