import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  OneToMany,
  JoinTable,
  PrimaryGeneratedColumn,
  ManyToMany,
  ManyToOne,
  OneToOne,
  JoinColumn,
} from "typeorm";
import { Address } from "./addresses.entity";
import { Category } from "./categories.entity";
import { Schedules } from "./shedules.entity";

@Entity("Properties")
class Properties {
  @PrimaryGeneratedColumn("uuid")
  id: string;
  @Column({ default: false })
  sold: boolean;
  @Column({ type: "numeric", precision: 12, scale: 2, nullable: false })
  value: number;
  @Column({ type: "integer", nullable: false })
  size: number;
  @CreateDateColumn()
  createdAt: Date;
  @UpdateDateColumn()
  updatedAt: Date;

  @OneToOne(() => Address, { eager: true })
  @JoinColumn()
  address: Address;

  @OneToMany(() => Schedules, (schedules) => schedules.properties)
  schedules: Schedules[];

  @ManyToOne(() => Category, { eager: true })
  category: Category;

  constructor() {
    if (!this.id) {
      this.id = this.id;
    }
  }
}
export { Properties };
