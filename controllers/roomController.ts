import db from '../config/db';
import { NextFunction, Request, Response } from 'express';
import { Model, DataTypes} from 'sequelize';
import Rooms, { mapRoom } from '../models/roomModel';
import { QueryTypes } from 'sequelize';
import { text } from 'body-parser';
import conversation from '../models/conversationModel';
import sequelize from 'sequelize';
import { verifyUserToken } from './userController';

type S = {
    id: number;
    roomId: string;
    name: string;
    description: string;
    roomType: string;
    ownerId: number;
    photo: string;
    status: string;
    allow_invite: boolean;
    playlistId: string;
}

export const getAllRooms = async (req: Request, res: Response | any) => {

    try {
        mapRoom(db);
        const sessions = await Rooms.findAll();

        console.log(sessions);

        return res.status(200).json({sessions}); 

    } catch (error) {
        
    }
    
}


export const NewRoom = async (req: Request, res: Response | any) => {
 
    try {
        if(req.cookies.jwt){
        verifyUserToken(req.cookies.jwt).then(value=>{
            mapRoom(db);
            const sessionEntries: S = {
                id: req.body.number,
                roomId: req.body.userId,
                name: req.body.name,
                description: req.body.description,
                roomType: req.body.roomType,
                ownerId: req.body.ownerId,
                photo: req.body.photo,
                status: req.body.status,
                allow_invite: req.body.allow_invite,
                playlistId: req.body.playlistId
            };
    
            console.log(sessionEntries);
    
            Rooms.create(sessionEntries);
    
            return res.status(200).json({'message': `🤩🎀🎉🏆 Session ${sessionEntries.name} created successfully !`}); 
    
        }).catch(error=>{
            return res.status(500).send("⚠ Error Occurred! " +error);
        })
        
        }else{
            return res.status(500).send("⚠ Error Occurred!");
        }
      
    } catch (error) {
        
        return res.status(500).send("⚠ Error Occurred!");

    }
}

export const getRoomById = async (req: Request, res: Response | any) => {

    try {
        
        mapRoom(db);
        
        const roomId = req.params.id;

        if(!roomId) return res.status(500).send("⚠ Room Do Not Exist!");

        const session = await Rooms.findOne({where: {roomId: roomId}});

        console.log(session);

        return res.status(200).json({session});


    } catch (error) {
        
    }
}

