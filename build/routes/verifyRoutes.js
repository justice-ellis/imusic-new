"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const verifyUserController_1 = require("../controllers/verifyUserController");
const router = express_1.default.Router();
router.get('/verify', verifyUserController_1.verifyUser);
exports.default = router;
//# sourceMappingURL=verifyRoutes.js.map