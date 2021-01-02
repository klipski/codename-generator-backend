import { Controller, Get, Param, ParseIntPipe, Query, ValidationPipe } from '@nestjs/common';
import { GetRandomNameFilterDto } from './dto/get-random-name-filter.dto';
import { NamesService } from './names.service';
import { ObjectType } from './object-type.entity';

@Controller('names')
export class NamesController {
  constructor(private namesService: NamesService) { }

  @Get()
  async getObjectTypes(): Promise<ObjectType[]> {
    return this.namesService.getAllObjectTypes();
  }

  @Get('/:objectTypeId/random/')
  async getRandomName(
    @Param('objectTypeId', ParseIntPipe) objectTypeId: number,
    @Query(ValidationPipe) filterDto: GetRandomNameFilterDto,
  ): Promise<{ name: string }> {
    return this.namesService.getRandomName(objectTypeId, filterDto);
  }
}
