import { BaseEntity, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { NamedObject } from "./named-object.entity";

@Entity()
export class ObjectType extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @OneToMany(
    type => NamedObject,
    object => object.objectType,
    { eager: false },
  )
  objects: NamedObject[];

}