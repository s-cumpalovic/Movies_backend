"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.signAuthToken = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const SECRET_KEY = process.env.SECRET_KEY || "dba582594411671429b";
const signAuthToken = (user) => {
    return jsonwebtoken_1.default.sign({ _id: user._id, email: user.email, name: user.name }, SECRET_KEY, {
        expiresIn: "5 minutes",
    });
};
exports.signAuthToken = signAuthToken;
