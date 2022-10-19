const express = require('express');
const { spotifyToken, callback, getUser, refreshToken, getTrack } = require('../controllers/spotifyController')
const router = express.Router();


router
    .get('/token', spotifyToken)
   

export default router;