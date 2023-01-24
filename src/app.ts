import express, { Application } from "express";
import { config } from "dotenv";
import routes from "./routes";
import connectDB from "./config/db";
import cors from "cors";
import { corsOptions } from "./utils/static";

config();

//   Database

connectDB();

//  Server setup

const PORT = process.env.PORT;
const app: Application = express();
app.use(cors(corsOptions));

app.use(express.json(), express.urlencoded({ extended: true }), routes);

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});


