import "dotenv/config";
import express, { Request, Response, NextFunction } from "express";
import { AppDataSource } from "./config/config";
import cors from "cors";
import bodyParser from "body-parser";

AppDataSource.initialize()
  .then(async () => {
    console.log("db connection success")
  })
  .catch((error) => console.log(error));

const PORT = process.env.SERVER_PORT;
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.send("PILATES SERVER");
});

app.listen(PORT, () => {
  console.log(`
    #############################################
        🛡️ Server listening on port: ${PORT} 🛡️
    #############################################    
    `);
});
