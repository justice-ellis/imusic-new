require('dotenv').config()
const url = require('url');
import express, {response}  from 'express';
const request = require('request');
var app = express()
const querystring = require('querystring');
const User = require('../models/userModel');
import { NextFunction, Request, Response } from 'express';
//oauth through spotify api


const generateRandomString = (length: number) => {
  let text = '';
  const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  for (let i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
};

const client_id =  process.env.CLIENT_ID;
const client_secret = process.env.CLIENT_SECRET;
const access_token = "BQDCZazonxYojaJxSSPdXzoAE8JmUoMyH0iEx0Hk72MP4HqdZb2wKLbrr7vRKDNOVPAd4jiUYWrdSsGVyZbIPg5POHLetACbG-UxNAdXUYNhaBthCog"
 
export const spotifyToken = async(req: Request, res: Response) => {

    const generateRandomString = (length: any) => {
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
        
        const token = null

        await request.post(authOptions, function(error: any, response: Response, body: any) {
            if (!error && response.statusCode === 200) {
            var token = body.access_token;
            }
            console.log(token)
            //res.json({token, body})
            res.json({token, body})
    });

}
