import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ReceitasModule } from './receitas/receitas.module';
//import { mongooseModule } from './nestjs/mongoose';

@Module({
  imports: [
    //mongooseModule.forRoot(''),
    ReceitasModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
