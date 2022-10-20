"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const participantController_1 = require("../controllers/participantController");
const router = express_1.default.Router();
router.post('/add', participantController_1.AddParticipant);
router.get('/:id', participantController_1.getAllparticipantsInAroom);
exports.default = router;
//# sourceMappingURL=participantRoutes.js.map