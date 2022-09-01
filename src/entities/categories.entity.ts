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
  // @OneToMany(() => Properties, (properties) => properties.category)
  // properties: Properties;
  @ManyToOne(() => Properties)
  properties: Properties;
  constructor() {
    if (!this.id) {
      this.id = this.id;
    }
  }
}
export { Category };
