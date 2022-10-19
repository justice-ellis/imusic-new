import express from 'express';
import { getChat } from '../controllers/chatController';
import { sendMessage, getMessage, getConversationById,  } from '../controllers/messagesController';
import verifyjwt from '../middleware/verifyjwt';
const router = express.Router();

router.post('/chat', sendMessage);
router.post('/addparticimant', sendMessage);
router.get('/getchat', getMessage);
router.get('/:id', getConversationById);

export default router