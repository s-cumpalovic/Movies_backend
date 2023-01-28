import { Router } from "express";
import * as UsersControllers from "../controllers/UsersControllers";

const router = Router();

router.post("/login", UsersControllers.loginOne);
router.post("/register", UsersControllers.registerOne);

export default router;
