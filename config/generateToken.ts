import jwt from 'jsonwebtoken';
require('dotenv').config();

//const ACCESS_TOKEN_SECRET: string;

const generateToken = (id: string): string => {
    return jwt.sign({id}, process.env.ACCESS_TOKEN_SECRET as string, { expiresIn: "5d" });
}

export default generateToken;