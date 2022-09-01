import { Entity, Column, PrimaryGeneratedColumn, OneToOne } from "typeorm";
import { Properties } from "./properties.entity";
@Entity("address")
class Address {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column({ nullable: false })
  district: string;

  @Column({ nullable: false, length: 8 })
  zipCode: string;

  @Column({ nullable: true })
  number: string;

  @Column({ nullable: false })
  city: string;

  @Column({ nullable: false, length: 2 })
  state: string;

  @OneToOne(() => Properties)
  properties: Properties[];

  constructor() {
    if (!this.id) {
      this.id = this.id;
    }
  }
}
export { Address };
