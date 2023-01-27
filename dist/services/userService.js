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
exports.login = exports.register = void 0;
const user_1 = require("../models/user");
const bcrypt_1 = __importDefault(require("bcrypt"));
const static_1 = require("../utils/static");
const helperFunctions_1 = require("../utils/helperFunctions");
//  Registration funcionallity
function register(user) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const newUser = yield user_1.UserModel.create(user);
            if (newUser) {
                const token = (0, helperFunctions_1.signAuthToken)(newUser);
                return { newUser, token };
            }
        }
        catch (err) {
            throw err;
        }
    });
}
exports.register = register;
//  Login funcionallity
function login(user) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const foundUser = yield user_1.UserModel.findOne({
                email: user.email,
            });
            if (!foundUser) {
                throw new Error(static_1.EMAIL_DOESNT_EXIST);
            }
            const isMatch = bcrypt_1.default.compareSync(user.password, foundUser.password);
            if (isMatch) {
                const token = (0, helperFunctions_1.signAuthToken)(foundUser);
                return { user, token };
            }
            else {
                throw new Error(static_1.WRONG_PASSWORD);
            }
        }
        catch (err) {
            throw err;
        }
    });
}
exports.login = login;
