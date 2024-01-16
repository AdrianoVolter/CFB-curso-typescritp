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
}
class ContaPF extends Conta {
    cpf;
    constructor(cpf, titular) {
        super(titular);
        this.cpf = cpf;
    }
}
class ContaPJ extends Conta {
    cnpj;
    constructor(cnpj, titular) {
        super(titular);
        this.cnpj = cnpj;
    }
}
const conta1 = new ContaPF(12133, "João");
const conta2 = new ContaPJ(121334445, "Maria");
console.log(conta1.titular);
console.log(conta1.numeroConta);
