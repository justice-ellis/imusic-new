"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const inviteController_1 = require("../controllers/inviteController");
const router = express.Router();
router
    .post('/send', inviteController_1.sendInvite);
exports.default = router;
//# sourceMappingURL=inviteRoute.js.map