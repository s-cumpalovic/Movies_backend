import { Router } from "express";
import user from "./user";
import movie from "./movie";
import genre from "./genre";

const routes = Router();

/*
 *   This file will encapsulate all the routes from /routes folder
 *   So that they can be used in the app.ts file in one instance
 */

routes.use("/genre", genre);
routes.use("/user", user);
routes.use("/movies", movie);

export default routes;
