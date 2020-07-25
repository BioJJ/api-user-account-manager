import { Injectable } from '@nestjs/common';
import { Conta } from './conta';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';


@Injectable()
export class ContaService {

    constructor(@InjectModel('Conta') private readonly contaModel: Model<Conta>) { }

    async getAll() {
        return await this.contaModel.find().exec();

    }

    async getById(id: string) {

        return await this.contaModel.findById(id).exec();

    }
    async create(conta: Conta) {
        const createConta = new this.contaModel(conta);
        return await createConta.save();

    }
    async update(id: string, conta: Conta) {
        await this.contaModel.updateOne({ _id: id }, conta).exec();
        return this.getById(id);

    }
    async delete(id: string) {
        return await this.contaModel.deleteOne({ _id: id }).exec();
    }



}




