class Conta {
  numeroConta: number;
  titular: string;

    constructor(numeroConta:number, titular: string) {
        this.numeroConta = numeroConta;
        this.titular = titular;
    }
}

class ContaPF extends Conta{

}

class ContaPJ extends Conta{

}

const conta1 = new ContaPF(123, "João");

const conta2 = new ContaPJ(456, "Maria");

console.log(conta1);
console.log(conta2);