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
exports.getRoomById = exports.NewRoom = exports.getAllRooms = void 0;
const db_1 = __importDefault(require("../config/db"));
const roomModel_1 = __importStar(require("../models/roomModel"));
const userController_1 = require("./userController");
const getAllRooms = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        (0, roomModel_1.mapRoom)(db_1.default);
        const sessions = yield roomModel_1.default.findAll();
        console.log(sessions);
        return res.status(200).json({ sessions });
    }
    catch (error) {
    }
});
exports.getAllRooms = getAllRooms;
const NewRoom = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        if (req.cookies.jwt) {
            (0, userController_1.verifyUserToken)(req.cookies.jwt).then(value => {
                (0, roomModel_1.mapRoom)(db_1.default);
                const sessionEntries = {
                    id: req.body.number,
                    roomId: req.body.userId,
                    name: req.body.name,
                    description: req.body.description,
                    roomType: req.body.roomType,
                    ownerId: req.body.ownerId,
                    photo: req.body.photo,
                    status: req.body.status,
                    allow_invite: req.body.allow_invite,
                    playlistId: req.body.playlistId
                };
                console.log(sessionEntries);
                roomModel_1.default.create(sessionEntries);
                return res.status(200).json({ 'message': `🤩🎀🎉🏆 Session ${sessionEntries.name} created successfully !` });
            }).catch(error => {
                return res.status(500).send("⚠ Error Occurred! " + error);
            });
        }
        else {
            return res.status(500).send("⚠ Error Occurred!");
        }
    }
    catch (error) {
        return res.status(500).send("⚠ Error Occurred!");
    }
});
exports.NewRoom = NewRoom;
const getRoomById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        (0, roomModel_1.mapRoom)(db_1.default);
        const roomId = req.params.id;
        if (!roomId)
            return res.status(500).send("⚠ Room Do Not Exist!");
        const session = yield roomModel_1.default.findOne({ where: { roomId: roomId } });
        console.log(session);
        return res.status(200).json({ session });
    }
    catch (error) {
    }
});
exports.getRoomById = getRoomById;
//# sourceMappingURL=roomController.js.map