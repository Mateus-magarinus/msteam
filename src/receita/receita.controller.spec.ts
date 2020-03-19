import { Test, TestingModule } from '@nestjs/testing';
import { ReceitaController } from './receita.controller';

describe('Receita Controller', () => {
  let controller: ReceitaController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ReceitaController],
    }).compile();

    controller = module.get<ReceitaController>(ReceitaController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
