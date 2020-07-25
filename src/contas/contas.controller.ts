import { Controller, Get, Param, Body, Post, Put, Delete } from '@nestjs/common';
import { ContaService } from './shared/conta.service';
import { Conta } from './shared/conta';

@Controller('contas')
export class ContasController {

      constructor(private contaService: ContaService
        ) {  }

        @Get()
        async getAll(): Promise<Conta[]>{
            return this.contaService.getAll();
        }

        @Get(':id')
        async getById(@Param('id') id: string): Promise<Conta>{
            return this.contaService.getById(id);
        }

        @Post()
        async create(@Body() conta: Conta): Promise<Conta>{
            return this.contaService.create(conta);
        }

        @Put(':id')
        async update(@Param('id') id: string, @Body() conta: Conta): Promise<Conta>{
            return this.contaService.update(id, conta);
        }

        @Delete(':id')
        async delete(@Param('id') id: string){
            this.contaService.delete(id);
            
        }
}
