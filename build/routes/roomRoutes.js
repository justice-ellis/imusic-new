"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const roomController_1 = require("../controllers/roomController");
const participantController_1 = require("../controllers/participantController");
const router = express_1.default.Router();
router.post('/createroom', roomController_1.NewRoom);
router.post('/addparticipant', participantController_1.AddParticipant);
router.get('/getallrooms', roomController_1.getAllRooms);
router.get('/:id', roomController_1.getRoomById);
exports.default = router;
//# sourceMappingURL=roomRoutes.js.map