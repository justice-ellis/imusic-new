import express from 'express';
import { AddParticipant, getAllparticipantsInAroom } from '../controllers/participantController';
import verifyjwt from '../middleware/verifyjwt';
const router = express.Router();

router.post('/add', AddParticipant);
router.get('/:id', getAllparticipantsInAroom);

export default router