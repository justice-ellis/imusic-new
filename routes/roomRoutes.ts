import express from 'express';
import { getChat } from '../controllers/chatController';
import { NewRoom, getAllRooms, getRoomById } from '../controllers/roomController';
import { AddParticipant } from '../controllers/participantController';
import verifyjwt from '../middleware/verifyjwt';
import {verifyUserToken} from '../Utils/verifyUserToken';
const router = express.Router();

router.post('/createroom', NewRoom);
router.post('/addparticipant', AddParticipant);
router.get('/getallrooms', getAllRooms);
router.get('/:id', getRoomById);

export default router