import { Module } from '@nestjs/common';
import { ReceitaController } from './receita.controller';
import { ReceitaService } from './receita.service';

@Module({
  controllers: [ReceitaController],
  providers: [ReceitaService]
})
export class ReceitaModule {}
