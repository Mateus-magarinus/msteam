import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ReceitaModule } from './receita/receita.module';
@Module({
  controllers: [AppController],
  providers: [AppService],
  imports: [ReceitaModule],
})
export class AppModule {}
