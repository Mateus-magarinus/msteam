import { Test, TestingModule } from '@nestjs/testing';
import { ReceitaService } from './receita.service';

describe('ReceitaService', () => {
  let service: ReceitaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ReceitaService],
    }).compile();

    service = module.get<ReceitaService>(ReceitaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
