import { Test, TestingModule } from '@nestjs/testing';
import { ReceitaService } from './receita.service';

describe('ReceitaService', () => {
  let provider: ReceitaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ReceitaService],
    }).compile();

    provider = module.get<ReceitaService>(ReceitaService);
  });

  it('should be defined', () => {
    expect(provider).toBeDefined();
  });
});
