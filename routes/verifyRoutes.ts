import express from 'express';
import { verifyUser } from '../controllers/verifyUserController';
import verifyjwt from '../middleware/verifyjwt'
const router = express.Router();

router.get('/verify', verifyUser);

export default router