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
exports.UserModel = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const static_1 = require("../utils/static");
//  Schema
const UserSchema = new mongoose_1.default.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
});
UserSchema.index({ email: 1 }, { unique: true });
//  Before saving the new user, checking the password hash, and if email is unique
UserSchema.pre("save", function (next) {
    return __awaiter(this, void 0, void 0, function* () {
        const user = this;
        //  Password
        const saltRounds = 8;
        if (user.isModified("password")) {
            user.password = yield bcrypt_1.default.hash(user.password, saltRounds);
        }
        //  Email
        if (user.isModified("email")) {
            const emailExist = yield exports.UserModel.findOne({ email: user.email });
            if (emailExist) {
                return next(new Error(static_1.EMAIL_EXISTS));
            }
        }
    });
});
//  Model export
exports.UserModel = mongoose_1.default.model("User", UserSchema);
