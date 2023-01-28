import express, { Application, Request, Response } from "express";
import { config } from "dotenv";
import routes from "./routes";
import connectDB from "./config/db";

config();

//   Database

connectDB();

//  Server setup

const PORT = process.env.PORT;
const app: Application = express();
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//  Routes

app.use(routes);
