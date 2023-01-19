import { Router } from "express";
import * as UsersControllers from "../controllers/UsersControllers";
import {
  loginValidation,
  registerValidation,
} from "../middlewares/userValidation";

const router = Router();

router.post("/login", loginValidation, UsersControllers.loginOne);
router.post("/register", registerValidation, UsersControllers.registerOne);

export default router;
