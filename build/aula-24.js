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
        if (valor < 0) {
            console.log(`Valor inválido`);
            return;
        }
        this.saldoConta += valor;
    }
    saque(valor) {
        if (valor < 0) {
            console.log(`Valor inválido`);
            return;
        }
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
    saque(valor) {
        if (valor > 1000) {
            console.log(`Valor máximo de saque para esse tipo de conta é de R$1000,00`);
        }
        else {
            super.saque(valor);
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
    saque(valor) {
        if (valor > 10000) {
            console.log(`Valor máximo de saque para esse tipo de conta é de R$10000,00`);
        }
        else {
            super.saque(valor);
        }
    }
}
const conta1 = new ContaPF(111344443, "João");
const conta2 = new ContaPJ(121334445, "Maria");
conta1.deposito(1000);
console.log(conta1.saldo());
conta1.saque(300);
console.log(conta1.saldo());
conta1.saque(200);
console.log(`Saldo da conta:${conta1.saldo()}`);
