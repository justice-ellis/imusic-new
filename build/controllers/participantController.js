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
exports.getAllparticipantsInAroom = exports.AddParticipant = void 0;
const db_1 = __importDefault(require("../config/db"));
const participantModel_1 = __importStar(require("../models/participantModel"));
const AddParticipant = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        (0, participantModel_1.mapParticipant)(db_1.default);
        const participant = {
            id: req.body.id,
            participantId: req.body.participantId,
            roomId: req.body.roomId
        };
        //console.log(participant);
        const exist = yield participantModel_1.default.destroy({ where: { participantId: participant.participantId } });
        console.log(exist);
        const added = participantModel_1.default.create(participant);
        console.log(added);
        return res.status(200).json({ 'message': `🤩🎧🎀🎉🏆 Participant added successfully !` });
    }
    catch (error) {
        return res.status(500).send("⚠ Error Occurred!");
    }
});
exports.AddParticipant = AddParticipant;
const getAllparticipantsInAroom = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        (0, participantModel_1.mapParticipant)(db_1.default);
        const roomId = req.params.id;
        const participants = yield participantModel_1.default.findAll({ where: { roomId: roomId } });
        console.log(participants);
    }
    catch (error) {
    }
});
exports.getAllparticipantsInAroom = getAllparticipantsInAroom;
//# sourceMappingURL=participantController.js.map