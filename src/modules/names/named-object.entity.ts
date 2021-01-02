import { BaseEntity, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { ObjectType } from "./object-type.entity";

@Entity()
export class NamedObject extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @ManyToOne(
    type => ObjectType,
    objectType => objectType.objects,
    { eager: false },
  )
  objectType: ObjectType;

  @Column()
  objectTypeId: number;

}