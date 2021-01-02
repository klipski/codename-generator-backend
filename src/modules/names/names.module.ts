import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NamedObject } from './named-object.entity';
import { NamedObjectRepository } from './named-object.repository';
import { NamesController } from './names.controller';
import { NamesService } from './names.service';
import { ObjectType } from './object-type.entity';
import { ObjectTypeRepository } from './object-type.repository';

@Module({
  imports: [TypeOrmModule.forFeature([ObjectTypeRepository, NamedObjectRepository])],
  controllers: [NamesController],
  providers: [NamesService]
})
export class NamesModule { }
