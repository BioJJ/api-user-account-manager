import * as mongoose from 'mongoose';

export const ContaSchema = new mongoose.Schema({
    nome: String,
    email: String,
    senha: String,
    senhas: String,
    cpf: String,
    cep: String,
    logradouro: String,
    numero: String,
    bairro: String,
    telefone: String,
    dataNascimento: String
})