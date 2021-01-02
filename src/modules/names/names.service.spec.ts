import { Test, TestingModule } from '@nestjs/testing';
import { GetRandomNameFilterDto } from './dto/get-random-name-filter.dto';
import { NamedObjectRepository } from './named-object.repository';
import { NamesService } from './names.service';
import { ObjectTypeRepository } from './object-type.repository';


const mockObjectTypeRepository = () => ({
  find: jest.fn(),
});

const mockNamedObjectRepostiory = () => ({
  getRandomNamedObject: jest.fn(),
});

describe('NamesService', () => {
  let service: NamesService;
  let objectTypeRepository;
  let namedObjectRepository;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        NamesService,
        { provide: ObjectTypeRepository, useFactory: mockObjectTypeRepository },
        { provide: NamedObjectRepository, useFactory: mockNamedObjectRepostiory },
      ],
    }).compile();

    service = module.get<NamesService>(NamesService);
    objectTypeRepository = module.get<ObjectTypeRepository>(ObjectTypeRepository);
    namedObjectRepository = module.get<NamedObjectRepository>(NamedObjectRepository);
  });

  describe('getAllObjectTypes', () => {
    it('get all object types from repostiory', async () => {
      objectTypeRepository.find.mockResolvedValue('val');

      expect(objectTypeRepository.find).not.toHaveBeenCalled();
      const result = await service.getAllObjectTypes();
      expect(objectTypeRepository.find).toHaveBeenCalled();
      expect(result).toEqual('val');
    });
  });

  describe('getRandomName', () => {
    it('get random named object from repostiory', async () => {
      const mockNamedObject = { id: 1, name: 'zebra' }
      const filterDto = { startswith: 'z' };
      namedObjectRepository.getRandomNamedObject.mockResolvedValue(mockNamedObject);

      expect(namedObjectRepository.getRandomNamedObject).not.toHaveBeenCalled();
      const result = await service.getRandomName(1, filterDto);
      expect(namedObjectRepository.getRandomNamedObject).toHaveBeenCalled();
      expect(result).toEqual({ name: mockNamedObject.name });
    });
  });
});
