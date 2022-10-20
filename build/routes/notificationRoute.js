"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require('express');
const notificationController_1 = require("../controllers/notificationController");
const router = express.Router();
router
    .post('/send', notificationController_1.sendNotification);
exports.default = router;
//# sourceMappingURL=notificationRoute.js.map