import { EntityRepository, Repository } from "typeorm";
import { GetRandomNameFilterDto } from "./dto/get-random-name-filter.dto";
import { NamedObject } from "./named-object.entity";

@EntityRepository(NamedObject)
export class NamedObjectRepository extends Repository<NamedObject> {
  async getRandomNamedObject(objectTypeId: number, filterDto: GetRandomNameFilterDto): Promise<NamedObject> {
    const { startswith } = filterDto;
    const query = this.createQueryBuilder('namedObject');
    query.where('namedObject.objectTypeId = :objectTypeId', { objectTypeId });
    if (startswith) {
      query.andWhere('namedObject.name LIKE :startswith', { startswith: `${startswith}%` });
    }
    query.addOrderBy('random()');
    return query.getOne();
  }
};