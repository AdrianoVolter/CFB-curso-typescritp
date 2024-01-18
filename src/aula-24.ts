// class Conta {
//   protected numeroConta: number;
//   protected titular: string;
//   private saldoConta: number;

//   constructor(titular: string) {
//     this.numeroConta = this.gerarNUmeroConta();
//     this.titular = titular;
//     this.saldoConta = 0;
//   }
//   private gerarNUmeroConta(): number {
//     return Math.floor(Math.random() * 10000) + 1;
//   }
//   protected info(): void {
//     console.log(`Titular: ${this.titular}`);
//     console.log(`Número da conta: ${this.numeroConta}`);
//   }
//   public saldo(): number {
//     return this.saldoConta;
//   }
//   protected deposito(valor: number): void {
//     if (valor < 0) {
//       console.log(`Valor inválido`);
//       return;
//     }
//     this.saldoConta += valor;
//   }
//   protected saque(valor: number): void {
//     if (valor < 0) {
//       console.log(`Valor inválido`);
//       return;
//     }
//     if (valor >= this.saldoConta) {
//       console.log(`Saldo insuficiente`);
//     } else {
//       this.saldoConta -= valor;
//     }
//   }
// }

// class ContaPF extends Conta {
//   cpf: number;
//   constructor(cpf: number, titular: string) {
//     super(titular); //chamando o construtor da classe pai
//     this.cpf = cpf;
//     this.info();
//   }
//   info(): void {
//     console.log(`Tipo de conta: PF`);
//     super.info();
//     console.log(`CPF: ${this.cpf}`);
//     console.log(`---------------------------------`);
//   }
//   public deposito(valor: number): void {
//     if (valor > 1000) {
//       console.log(
//         `Valor máximo de depósito para esse tipo de conta é de R$1000,00`
//       );
//     } else {
//       super.deposito(valor);
//     }
//   }
//   public saque(valor: number): void {
//     if (valor > 1000) {
//       console.log(
//         `Valor máximo de saque para esse tipo de conta é de R$1000,00`
//       );
//     } else {
//       super.saque(valor);
//     }
//   }
// }

// class ContaPJ extends Conta {
//   cnpj: number;
//   constructor(cnpj: number, titular: string) {
//     super(titular); //chamando o construtor da classe pai
//     this.cnpj = cnpj;
//     this.info();
//   }
//   info(): void {
//     console.log(`Tipo de conta: PJ`);
//     super.info();
//     console.log(`CNPJ: ${this.cnpj}`);
//     console.log(`---------------------------------`);
//   }
//   public deposito(valor: number): void {
//     if (valor > 10000) {
//       console.log(
//         `Valor máximo de depósito para esse tipo de conta é de R$10000,00`
//       );
//     } else {
//       super.deposito(valor);
//     }
//   }
//   public saque(valor: number): void {
//     if (valor > 10000) {
//       console.log(
//         `Valor máximo de saque para esse tipo de conta é de R$10000,00`
//       );
//     } else {
//       super.saque(valor);
//     }
//   }
// }

// const conta1 = new ContaPF(111344443, "João");
// const conta2 = new ContaPJ(121334445, "Maria");
// //   const conta3 = new ContaPF(45556666, "Paulo");
// //   const conta4 = new ContaPJ(1245666777, "Pedro");

// conta1.deposito(1000);
// console.log(conta1.saldo());
// conta1.saque(300);
// console.log(conta1.saldo());
// conta1.saque(200);
// console.log(`Saldo da conta:${conta1.saldo()}`);
//conta2.deposito(10000);
//conta2.deposito(10000);
//console.log(conta2.saldo());
//conta2.info();

// console.log(conta1.titular);
// console.log(conta1.numeroConta);
