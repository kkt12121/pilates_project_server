import "reflect-metadata";
import { DataSource } from "typeorm";
import { User } from "../entity/user/user.entity";
import { Instructor } from "../entity/instructor/instructor.entity";

export const AppDataSource = new DataSource({
  type: "mysql",
  host: process.env.MYSQL_HOST,
  port: Number(process.env.MYSQL_PORT),
  username: process.env.MYSQL_USERNAME,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  entities: [User, Instructor],
  synchronize: false,
  logging: false,
});
