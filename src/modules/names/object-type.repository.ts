import { EntityRepository, Repository } from "typeorm";
import { ObjectType } from "./object-type.entity";

@EntityRepository(ObjectType)
export class ObjectTypeRepository extends Repository<ObjectType> { };