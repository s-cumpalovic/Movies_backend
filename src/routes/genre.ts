import { Router } from "express";
import * as GenreController from "../controllers/GenresControllers";

const router = Router();
router.get("/", GenreController.getAll);

export default router;
