"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
exports.getConversationById = exports.getMessage = exports.sendMessage = void 0;
const db_1 = __importDefault(require("../config/db"));
const privatemessagesModel_1 = __importStar(require("../models/privatemessagesModel"));
const userModel_1 = __importStar(require("../models/userModel"));
const notificationModel_1 = __importStar(require("../models/notificationModel"));
const sendMessage = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        (0, privatemessagesModel_1.mapPrivatemessage)(db_1.default);
        const message = {
            id: req.body.id,
            communicationId: req.body.communicationId,
            senderId: req.body.senderId,
            receiverId: req.body.receiverId,
            text: req.body.text,
            seen: req.body.seen,
        };
        (0, userModel_1.mapUser)(db_1.default);
        //verify sender & receiver
        const verifySendererid = yield userModel_1.default.findOne({ where: { userId: message.senderId } });
        if (verifySendererid === null)
            return res.status(404).json({ 'message': '⚠ Invalid SenderId!' });
        const verifyReceiverid = yield userModel_1.default.findOne({ where: { userId: message.receiverId } });
        if (verifyReceiverid === null)
            return res.status(404).json({ 'message': '⚠ Invalid RecieverId!' });
        if (!message.text) {
            throw new Error("⚠ Enter Message!");
        }
        const conversation_id = message.senderId + '@' + message.receiverId;
        (0, privatemessagesModel_1.mapPrivatemessage)(db_1.default);
        (0, notificationModel_1.mapNotification)(db_1.default);
        const newMessage = {
            id: req.body.id,
            communicationId: conversation_id,
            senderId: req.body.senderId,
            receiverId: req.body.receiverId,
            text: req.body.text,
            seen: req.body.seen,
        };
        console.log(newMessage);
        privatemessagesModel_1.default.create(newMessage);
        const notification = {
            id: req.body.id,
            notificationId: req.body.notificationId,
            senderId: newMessage.senderId,
            receiverId: newMessage.receiverId,
            type: "message"
        };
        console.log(notification);
        notificationModel_1.default.create(notification);
        return res.status(200).json({ 'message': `✔ Message Sent Successfully 🏆 ${notification.type} Notification Sent Successfully 🎁` });
    }
    catch (error) {
        return res.status(404).json({ 'message': '⚠ Message Not Sent!' });
    }
});
exports.sendMessage = sendMessage;
const getMessage = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    (0, privatemessagesModel_1.mapPrivatemessage)(db_1.default);
    const message = {
        id: req.body.id,
        communicationId: req.body.communicationId,
        senderId: req.body.senderId,
        receiverId: req.body.receiverId,
        text: req.body.text,
        seen: req.body.seen,
    };
    const chat = yield privatemessagesModel_1.default.findAll({
        attributes: ['text']
    });
    console.log(chat);
    res.json({ chat });
});
exports.getMessage = getMessage;
const getConversationById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        (0, privatemessagesModel_1.mapPrivatemessage)(db_1.default);
        const conversation_id = req.params.id;
        const conversation = yield privatemessagesModel_1.default.findAll({ where: { communicationId: conversation_id } });
        console.log(conversation);
        return res.status(200).json({ conversation });
    }
    catch (error) {
        return res.status(404).json({ 'message': '⚠ Conversation Do Not Exist!' });
    }
});
exports.getConversationById = getConversationById;
//# sourceMappingURL=messagesController.js.map