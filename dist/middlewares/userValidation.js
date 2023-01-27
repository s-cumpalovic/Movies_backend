"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.registerValidation = exports.loginValidation = void 0;
const express_validator_1 = require("express-validator");
const static_1 = require("../utils/static");
exports.loginValidation = [
    (0, express_validator_1.body)("email").isEmail().withMessage(static_1.INVALID_EMAIL),
    (0, express_validator_1.body)("password")
        .isLength({ min: 8 })
        .withMessage(static_1.SHORT_PASSWORD),
    (req, res, next) => {
        const errors = (0, express_validator_1.validationResult)(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        }
        next();
    },
];
exports.registerValidation = [
    (0, express_validator_1.body)("name")
        .isLength({ min: 3 })
        .withMessage(static_1.SHORT_NAME),
    (0, express_validator_1.body)("email").isEmail().withMessage(static_1.INVALID_EMAIL),
    (0, express_validator_1.body)("password")
        .isLength({ min: 8 })
        .withMessage(static_1.SHORT_PASSWORD),
    (req, res, next) => {
        const errors = (0, express_validator_1.validationResult)(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        }
        next();
    },
];
