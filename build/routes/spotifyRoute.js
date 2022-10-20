"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const { spotifyToken, callback, getUser, refreshToken, getTrack } = require('../controllers/spotifyController');
const router = express.Router();
router
    .get('/token', spotifyToken);
exports.default = router;
//# sourceMappingURL=spotifyRoute.js.map