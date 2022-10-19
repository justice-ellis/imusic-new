import db from '../config/db';
import { NextFunction, Request, Response } from 'express';
import { Model, DataTypes} from 'sequelize';
import privateMessages, { mapPrivatemessage } from '../models/privatemessagesModel';
import { QueryTypes } from 'sequelize';
import { text } from 'body-parser';
import conversation from '../models/conversationModel';
import sequelize from 'sequelize';

type C = {
    id: number;
    senderId: number;
    receiverId: number;
}

export const getChat = async (req: Request | any, res: Response | any) => {
    try {
        mapPrivatemessage(db);
        const message: C = {
            id: req.body.id,
            senderId: req.body.senderId,
            receiverId: req.body.receiverId,
        };  

        const a = Math.min(message.senderId, message.receiverId) 
        const b = Math.max(message.senderId, message.receiverId) 
        
        const conversation_id = a + '@' + b

        const chatFound = await privateMessages.findAll({where: {communicationId: conversation_id}}); //user present

        //`${a + '@' + b}`

        console.log(chatFound);
        res.json({chatFound});
    } catch (error) {
      
    }
    
}
