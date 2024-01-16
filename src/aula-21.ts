class Conta {
    numeroConta: number;
    titular: string;
  
      constructor( titular: string) {
          this.numeroConta = this.gerarNUmeroConta();
          this.titular = titular;
      }
      gerarNUmeroConta():number{
          return Math.floor(Math.random() * 10000)+1;
      }
  }
  
  class ContaPF extends Conta{
    cpf: number;
    constructor(cpf:number, titular: string) {
        super(titular); //chamando o construtor da classe pai
        this.cpf = cpf;
    }
  }
  
  class ContaPJ extends Conta{
    cnpj: number;
    constructor(cnpj:number,titular: string) {
        super(titular); //chamando o construtor da classe pai
        this.cnpj = cnpj;
    }
  }
  
  const conta1 = new ContaPF(12133, "João");
  const conta2 = new ContaPJ(121334445, "Maria");
  
  console.log(conta1.titular);
  console.log(conta1.numeroConta);