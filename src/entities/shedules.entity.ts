import {
  Entity,
  CreateDateColumn,
  PrimaryGeneratedColumn,
  ManyToOne,
  JoinColumn,
} from "typeorm";
import { Properties } from "./properties.entity";
import { User } from "./user.entity";
@Entity("Shedules")
class Schedules {
  @PrimaryGeneratedColumn("uuid")
  id: string;
  @CreateDateColumn({ nullable: false, type: "date" })
  date: string;
  @CreateDateColumn({ nullable: false, type: "time" })
  hour: string;

  @ManyToOne(() => User, { eager: true, nullable: false })
  user: User;

  @ManyToOne(() => Properties, { eager: true, nullable: false })
  properties: Properties;

  constructor() {
    if (!this.id) {
      this.id = this.id;
    }
  }
}
export { Schedules };
