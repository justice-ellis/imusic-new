import db from '../config/db';
import { NextFunction, Request, Response } from 'express';
import { Model, DataTypes} from 'sequelize';
import Participants, { mapParticipant } from '../models/participantModel';
import { QueryTypes } from 'sequelize';
import { text } from 'body-parser';
import conversation from '../models/conversationModel';
import sequelize from 'sequelize';

type P = {
     id: number;
     participantId: string;
     roomId: string;
}

export const AddParticipant = async (req: Request, res: Response | any) => {
    try {
        mapParticipant(db);
        const participant: P = {
            id: req.body.id,
            participantId: req.body.participantId,
            roomId: req.body.roomId
        };

        //console.log(participant);

        const exist = await Participants.destroy({where: {participantId: participant.participantId}})

        console.log(exist)
        const added = Participants.create(participant);
        console.log(added);

        return res.status(200).json({'message': `🤩🎧🎀🎉🏆 Participant added successfully !`}); 


    } catch (error) {
        
        return res.status(500).send("⚠ Error Occurred!");

    }
}


export const getAllparticipantsInAroom = async(req: Request, res: Response | any) => {
    try {
        mapParticipant(db);
        const roomId = req.params.id;

        const participants = await Participants.findAll({where: {roomId: roomId}});

        console.log(participants)

    } catch (error) {
        
    }
}