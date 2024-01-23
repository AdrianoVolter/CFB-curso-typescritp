"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Coisas = exports.Objeto = void 0;
class Pessoa {
    nome;
    altura;
    constructor(nome, altura) {
        this.nome = nome;
        this.altura = altura;
    }
}
exports.default = Pessoa;
class Objeto {
    nome;
    constructor(nome) {
        this.nome = nome;
    }
}
exports.Objeto = Objeto;
const Coisas = [
    'Cadeira',
    'Mesa',
    'Faca',
    'Pessoa'
];
exports.Coisas = Coisas;
