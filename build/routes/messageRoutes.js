"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const messagesController_1 = require("../controllers/messagesController");
const router = express_1.default.Router();
router.post('/chat', messagesController_1.sendMessage);
router.post('/addparticimant', messagesController_1.sendMessage);
router.get('/getchat', messagesController_1.getMessage);
router.get('/:id', messagesController_1.getConversationById);
exports.default = router;
//# sourceMappingURL=messageRoutes.js.map