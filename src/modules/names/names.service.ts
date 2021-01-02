import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { GetRandomNameFilterDto } from './dto/get-random-name-filter.dto';
import { NamedObjectRepository } from './named-object.repository';
import { ObjectType } from './object-type.entity';
import { ObjectTypeRepository } from './object-type.repository';

@Injectable()
export class NamesService {
  constructor(
    @InjectRepository(ObjectTypeRepository)
    private objectTypeRepository: ObjectTypeRepository,
    @InjectRepository(NamedObjectRepository)
    private namedObjectRepository: NamedObjectRepository,
  ) { }

  async getAllObjectTypes(): Promise<ObjectType[]> {
    return this.objectTypeRepository.find();
  }

  async getRandomName(objectTypeId: number, filterDto: GetRandomNameFilterDto): Promise<{ name: string }> {
    const namedObject = await this.namedObjectRepository.getRandomNamedObject(objectTypeId, filterDto);
    if (!namedObject) {
      throw new NotFoundException(`Not found`);
    }
    return { name: namedObject.name };
  }
}
