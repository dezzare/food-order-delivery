import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn
} from "typeorm";
// import { v4 as uuid } from 'uuid';


@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id!: string;

  @Column()
  name!: string;

  @Column()
  details!: string;

  @Column()
  price!: number;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updareAt!: Date;

  // constructor() {
  //   if (!this.id) {
  //     this.id = uuid();
  //   }
  // }

}

