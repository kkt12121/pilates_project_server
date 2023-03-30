import "dotenv/config";
import express, { Request, Response, NextFunction } from "express";
import * as http from "http";
import { AppDataSource } from "./config/config";
import cors from "cors";
import bodyParser from "body-parser";
import morgan from "morgan";

AppDataSource.initialize()
  .then(async (db) => {
    console.log("db connection success");
  })
  .catch((error) => console.log(error));

const app: express.Application = express();
const server = http.createServer(app);

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan("dev"));

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.send("PILATES SERVER");
});

module.exports = server;
