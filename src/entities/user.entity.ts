import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";
import { Exclude } from "class-transformer";
import { Schedules } from "./shedules.entity";
@Entity("Users")
class User {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column()
  name: string;

  @Column({ unique: true, nullable: false })
  email: string;

  @Column({ nullable: false })
  isAdm: boolean;

  @Column({ default: true, nullable: false })
  isActive: boolean;

  @Column({ nullable: false })
  @Exclude()
  password: string;

  @CreateDateColumn({ nullable: false })
  createdAt: Date;

  @UpdateDateColumn({ nullable: true })
  updatedAt: Date;

  @OneToMany(() => Schedules, (schedules) => schedules.user)
  schedules: Schedules[];

  constructor() {
    if (!this.id) {
      this.id = this.id;
    }
  }
}
export { User };
