"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = require("dotenv");
const routes_1 = __importDefault(require("./routes"));
const db_1 = __importDefault(require("./config/db"));
const cors_1 = __importDefault(require("cors"));
const static_1 = require("./utils/static");
(0, dotenv_1.config)();
//   Database
(0, db_1.default)();
//  Server setup
const PORT = process.env.PORT;
const app = (0, express_1.default)();
app.use((0, cors_1.default)(static_1.corsOptions));
app.use(express_1.default.json(), express_1.default.urlencoded({ extended: true }), routes_1.default);
app.listen(PORT, () => {
    console.log(`Server listening on port: ${PORT}`);
});
