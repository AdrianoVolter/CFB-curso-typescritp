// class Conta {
//     protected numeroConta: number;
//     protected titular: string;
  
//       constructor( titular: string) {
//           this.numeroConta = this.gerarNUmeroConta();
//           this.titular = titular;
//       }
//       private gerarNUmeroConta():number{
//           return Math.floor(Math.random() * 10000)+1;
//       }
//       info():void{
//         console.log(`Titular: ${this.titular}`)
//         console.log(`Número da conta: ${this.numeroConta}`)
//         console.log(`---------------------------------`)
//       }
//   }
  
//   class ContaPF extends Conta{
//     cpf: number;
//     constructor(cpf:number, titular: string) {
//         super(titular); //chamando o construtor da classe pai
//         this.cpf = cpf;
//         console.log(`Conta PF criada :${titular}`)
//         console.log(`---------------------------------`)
//     }
//   }
  
//   class ContaPJ extends Conta{
//     cnpj: number;
//     constructor(cnpj:number,titular: string) {
//         super(titular); //chamando o construtor da classe pai
//         this.cnpj = cnpj;
//         console.log(`Conta PJ criada :${titular}`) 
//         console.log(`---------------------------------`)
//     }
//   }
  
//   const conta1 = new ContaPF(12133, "João");
//   const conta2 = new ContaPJ(121334445, "Maria");

//     conta1.info();
//     conta2.info();
  
// // console.log(conta1.titular);
// console.log(conta1.numeroConta);