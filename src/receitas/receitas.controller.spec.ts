import { Test, TestingModule } from '@nestjs/testing';
import { ReceitasController } from './receitas.controller';

describe('Receitas Controller', () => {
  let controller: ReceitasController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ReceitasController],
    }).compile();

    controller = module.get<ReceitasController>(ReceitasController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
