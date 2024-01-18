"use strict";
class Conta {
    numeroConta;
    titular;
    saldoConta;
    constructor(titular) {
        this.numeroConta = this.gerarNUmeroConta();
        this.titular = titular;
        this.saldoConta = 0;
    }
    gerarNUmeroConta() {
        return Math.floor(Math.random() * 10000) + 1;
    }
    info() {
        console.log(`Titular: ${this.titular}`);
        console.log(`Número da conta: ${this.numeroConta}`);
    }
    saldo() {
        return this.saldoConta;
    }
    deposito(valor) {
        this.saldoConta += valor;
    }
    saque(valor) {
        if (valor >= this.saldoConta) {
            console.log(`Saldo insuficiente`);
        }
        else {
            this.saldoConta -= valor;
        }
    }
}
class ContaPF extends Conta {
    cpf;
    constructor(cpf, titular) {
        super(titular);
        this.cpf = cpf;
        this.info();
    }
    info() {
        console.log(`Tipo de conta: PF`);
        super.info();
        console.log(`CPF: ${this.cpf}`);
        console.log(`---------------------------------`);
    }
    deposito(valor) {
        if (valor > 1000) {
            console.log(`Valor máximo de depósito para esse tipo de conta é de R$1000,00`);
        }
        else {
            super.deposito(valor);
        }
    }
}
class ContaPJ extends Conta {
    cnpj;
    constructor(cnpj, titular) {
        super(titular);
        this.cnpj = cnpj;
        this.info();
    }
    info() {
        console.log(`Tipo de conta: PJ`);
        super.info();
        console.log(`CNPJ: ${this.cnpj}`);
        console.log(`---------------------------------`);
    }
    deposito(valor) {
        if (valor > 10000) {
            console.log(`Valor máximo de depósito para esse tipo de conta é de R$10000,00`);
        }
        else {
            super.deposito(valor);
        }
    }
}
const conta1 = new ContaPF(111344443, "João");
const conta2 = new ContaPJ(121334445, "Maria");
const conta3 = new ContaPF(45556666, "Paulo");
const conta4 = new ContaPJ(1245666777, "Pedro");
conta1.deposito(1000);
console.log(conta1.saldo());
conta2.deposito(10000);
conta2.deposito(10000);
console.log(conta2.saldo());
