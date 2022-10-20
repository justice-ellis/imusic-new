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
exports.getChat = void 0;
const db_1 = __importDefault(require("../config/db"));
const privatemessagesModel_1 = __importStar(require("../models/privatemessagesModel"));
const getChat = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        (0, privatemessagesModel_1.mapPrivatemessage)(db_1.default);
        const message = {
            id: req.body.id,
            senderId: req.body.senderId,
            receiverId: req.body.receiverId,
        };
        const a = Math.min(message.senderId, message.receiverId);
        const b = Math.max(message.senderId, message.receiverId);
        const conversation_id = a + '@' + b;
        const chatFound = yield privatemessagesModel_1.default.findAll({ where: { communicationId: conversation_id } }); //user present
        //`${a + '@' + b}`
        console.log(chatFound);
        res.json({ chatFound });
    }
    catch (error) {
    }
});
exports.getChat = getChat;
//# sourceMappingURL=chatController.js.map