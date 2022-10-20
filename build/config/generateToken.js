"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
require('dotenv').config();
//const ACCESS_TOKEN_SECRET: string;
const generateToken = (id) => {
    return jsonwebtoken_1.default.sign({ id }, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "5d" });
};
exports.default = generateToken;
//# sourceMappingURL=generateToken.js.map