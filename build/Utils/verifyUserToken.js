"use strict";
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
exports.HasjwtElseCreateUser = exports.verifyUserToken = exports.SECRET_KEY = void 0;
require('dotenv').config();
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
exports.SECRET_KEY = "nanatetragramatonages";
const verifyUserToken = (token) => __awaiter(void 0, void 0, void 0, function* () {
    const user = yield jsonwebtoken_1.default.verify(token, exports.SECRET_KEY, (err, decoded) => {
        if (err)
            return Promise.reject(err);
        if (err)
            return Promise.resolve(decoded);
    });
    return user;
});
exports.verifyUserToken = verifyUserToken;
const HasjwtElseCreateUser = (req, res) => {
    if (req.cookie.jwt) {
        (0, exports.verifyUserToken)(req.cookie.jwt).then(value => {
            res.status(200).json({
                'user': value,
                'message': `Authorized 🏆 Logged In!`
            });
        }).catch(error => {
            req.cookie.jwt = null;
        });
    }
};
exports.HasjwtElseCreateUser = HasjwtElseCreateUser;
//# sourceMappingURL=verifyUserToken.js.map