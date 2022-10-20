"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.spotifyToken = void 0;
require('dotenv').config();
const url = require('url');
const express_1 = __importDefault(require("express"));
const request = require('request');
var app = (0, express_1.default)();
const querystring = require('querystring');
const User = require('../models/userModel');
//oauth through spotify api
const generateRandomString = (length) => {
    let text = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
};
const client_id = process.env.CLIENT_ID;
const client_secret = process.env.CLIENT_SECRET;
const access_token = "BQDCZazonxYojaJxSSPdXzoAE8JmUoMyH0iEx0Hk72MP4HqdZb2wKLbrr7vRKDNOVPAd4jiUYWrdSsGVyZbIPg5POHLetACbG-UxNAdXUYNhaBthCog";
const spotifyToken = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const generateRandomString = (length) => {
        let text = '';
        const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for (let i = 0; i < length; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return text;
    };
    const stateKey = 'spotify_auth_state';
    //res.redirect(`https://accounts.spotify.com/authorize?${queryParams}`);
    const state = generateRandomString(16);
    res.cookie(stateKey, state);
    const authOptions = {
        url: 'https://accounts.spotify.com/api/token',
        data: querystring.stringify({
            grant_type: 'authorization_code',
            code: 'code',
            redirect_uri: process.env.REDIRECT_URI
        }),
        headers: {
            'Authorization': 'Basic ' + (new Buffer(client_id + ':' + client_secret).toString('base64'))
        },
        form: {
            grant_type: 'client_credentials'
        },
        json: true
    };
    const token = null;
    yield request.post(authOptions, function (error, response, body) {
        if (!error && response.statusCode === 200) {
            var token = body.access_token;
        }
        console.log(token);
        //res.json({token, body})
        res.json({ token, body });
    });
});
exports.spotifyToken = spotifyToken;
//# sourceMappingURL=spotifyController.js.map