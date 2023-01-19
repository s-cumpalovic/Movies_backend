import { Request, Response, NextFunction } from "express";
import { body, validationResult } from "express-validator";
import { SHORT_PASSWORD, INVALID_EMAIL, SHORT_NAME } from '../utils/static';

export const loginValidation = [
  body("email").isEmail().withMessage(INVALID_EMAIL),
  body("password")
    .isLength({ min: 8 })
    .withMessage(SHORT_PASSWORD),

  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
    next();
  },
];

export const registerValidation = [
  body("name")
    .isLength({ min: 3 })
    .withMessage(SHORT_NAME),
  body("email").isEmail().withMessage(INVALID_EMAIL),
  body("password")
    .isLength({ min: 8 })
    .withMessage(SHORT_PASSWORD),

  (req: Request, res: Response, next: NextFunction) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
    next();
  },
];
