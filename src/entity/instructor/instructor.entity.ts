import { Entity, Column } from "typeorm";
import { BaseTable } from "../base/baseTable";

@Entity({ name: "instructor" })
export class Instructor extends BaseTable {
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

  @Column({ type: "text" })
  address: string;

  @Column({ type: "date" })
  birth: Date;

  @Column({ type: "text" })
  career: string;

  @Column({ type: "text" })
  certificate: string;

  @Column({ type: "text" })
  education: string;
}
