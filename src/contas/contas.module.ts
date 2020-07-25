import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { ContasController } from './contas.controller';
import { ContaService } from './shared/conta.service';
import { ContaSchema } from './schemas/conta.schema';

@Module({
    imports: [
        MongooseModule.forFeature([{name: 'Conta', schema: ContaSchema}])
    ],
    controllers:[ContasController],
    providers:[ContaService]

})
export class ContasModule {}
