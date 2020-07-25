import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ContasModule } from './contas/contas.module';

import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://account:jr@account.hfojy.mongodb.net/test'),
    ContasModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
