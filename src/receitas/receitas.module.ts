import { Module } from '@nestjs/common';
import { ReceitasController } from './receitas.controller';
import { ReceitaService } from './shared/receita.service';

@Module({
    controllers:[ReceitasController],
    providers:[ReceitaService]
})
export class ReceitasModule {}
