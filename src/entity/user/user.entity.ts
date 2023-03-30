import { Entity, Column } from "typeorm";
import { BaseTable } from "../base/baseTable";

@Entity({ name: "user" })
export class User extends BaseTable {
  @Column()
  refreshToken!: string;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @Column()
  salt: string;

  @Column()
  phone: string;

  @Column()
  signupInfo: string;

  @Column({ type: "text" })
  address: string;

  @Column({ type: "date" })
  birth: Date;
}
