const express = require('express');
import { sendInvite } from "../controllers/inviteController";
const router = express.Router();


router
    .post('/send', sendInvite);
   

export default router;