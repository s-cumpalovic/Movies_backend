import express, { Application, Request, Response } from "express";
import { config } from "dotenv";

//   Database

require("./config/db");
config();
const PORT = process.env.PORT || 3000;

//  Server setup

const app: Application = express();
app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

// Test route

app.get("/", (req: Request, res: Response) => {
  res.send("Express.js API");
});
