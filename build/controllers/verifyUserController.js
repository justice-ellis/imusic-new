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
Object.defineProperty(exports, "__esModule", { value: true });
exports.verifyUser = void 0;
require('dotenv').config();
const cookieParser = require('cookie-parser');
const verifyUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const authHeader = req.cookies.body;
    console.log(authHeader);
    res.sendStatus(200).json({ 'message': `🏆 Your Status is ${authHeader}!` });
    // if (!authHeader) {
    //     return res.sendStatus(200).json({'message': '😊 Unregistered User!'});
    // } else {
    //     console.log(authHeader); //Bearer token
    //     return res.sendStatus(403).json({'message': '🏆 Registered User!'}); //invalid token
    // const token = authHeader.split(' ')[1];
    // jwt.verify(
    //     token,
    //     SECRET_KEY,
    //     (err, decoded) => {
    //         //if (err) return res.sendStatus(403).json({'message': '⚠ Error Occured!'}); //invalid token
    //         //if (decoded) return res.sendStatus(403).json({'message': '🏆 Registered User!'}); //invalid token
    //     }
    // )    
});
exports.verifyUser = verifyUser;
//};
//# sourceMappingURL=verifyUserController.js.map