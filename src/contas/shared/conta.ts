import { Document } from 'mongoose';
import * as mongoose from "mongoose";


export class Conta extends Document{
    nome: string;
    email: string;
    senha: string;
    senhas: string;
    cpf: string;
    cep: string;
    logradouro: string;
    numero: string;
    bairro: string;
    telefone: string;
    dataNascimento: string;

}

export const ContaSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    senha: { type: String, required: true },
    cpf: { type: String, required: true },
    cep: { type: String, required: true },
    logradouro: { type: String, required: true },
    numero: { type: String, required: true },
    bairro: { type: String, required: true },
    telefone: { type: String, required: true },
    dataNascimento: { type: String, required: true },
});
