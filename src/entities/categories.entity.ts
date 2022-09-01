import {
  Entity,
  Column,
  OneToMany,
  PrimaryGeneratedColumn,
  ManyToOne,
} from "typeorm";
import { Properties } from "./properties.entity";
@Entity("category")
class Category {
  @PrimaryGeneratedColumn("uuid")
  id: string;
  @Column({ unique: true, nullable: false })
  name: string;

  @ManyToOne(() => Properties)
  properties: Properties;
  constructor() {
    if (!this.id) {
      this.id = this.id;
    }
  }
}
export { Category };
