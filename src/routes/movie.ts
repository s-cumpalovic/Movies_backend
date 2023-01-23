import { Router } from "express";
import * as MoviesControllers from "../controllers/MoviesControllers";

const router = Router();

router.get("/", MoviesControllers.getAll);
router.get("/:id", MoviesControllers.getOne);
router.post("/", MoviesControllers.createOne);
router.put("/:id", MoviesControllers.updateOne);
router.delete("/:id", MoviesControllers.deleteOne);

export default router;
