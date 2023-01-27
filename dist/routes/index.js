"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_1 = __importDefault(require("./user"));
const movie_1 = __importDefault(require("./movie"));
const genre_1 = __importDefault(require("./genre"));
const routes = (0, express_1.Router)();
/*
 *   This file will encapsulate all the routes from /routes folder
 *   So that they can be used in the app.ts file in one instance
 */
routes.use("/genre", genre_1.default);
routes.use("/user", user_1.default);
routes.use("/movies", movie_1.default);
exports.default = routes;
