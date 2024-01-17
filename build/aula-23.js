"use strict";
class Conta {
    numeroConta;
    titular;
    constructor(titular) {
        this.numeroConta = this.gerarNUmeroConta();
        this.titular = titular;
    }
    gerarNUmeroConta() {
        return Math.floor(Math.random() * 10000) + 1;
    }
    info() {
        console.log(`Titular: ${this.titular}`);
        console.log(`Número da conta: ${this.numeroConta}`);
        console.log(`---------------------------------`);
    }
}
class ContaPF extends Conta {
    cpf;
    constructor(cpf, titular) {
        super(titular);
        this.cpf = cpf;
        this.info();
        console.log(`Conta PF criada :${titular}`);
        console.log(`---------------------------------`);
    }
}
class ContaPJ extends Conta {
    cnpj;
    constructor(cnpj, titular) {
        super(titular);
        this.cnpj = cnpj;
        this.info();
        console.log(`Conta PJ criada :${titular}`);
        console.log(`---------------------------------`);
    }
}
const conta1 = new ContaPF(12133, "João");
const conta2 = new ContaPJ(121334445, "Maria");
