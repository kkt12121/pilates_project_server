import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "../entity/user.entity";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: process.env.MYSQL_HOST,
  port: Number(process.env.MYSQL_PORT),
  username: process.env.MYSQL_USERNAME,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  entities: [User],
  synchronize: false,
  logging: false,
});
