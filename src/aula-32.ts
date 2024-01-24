// //name space é um escopo global que ajuda a organizar o código

// namespace Veiculos {
//   export class Carro {
//     //para acessar a classe Carro fora do namespace, é necessário exportar
//     nome: string;
//     motor: Motores.Motor;
//     constructor(nome: string) {
//       this.nome = nome;
//       this.motor = new Motores.Motor(1.0);
//     }
//   }
// }

// namespace Motores {
//   export class Turbo {
//     pot: number;
//     constructor(pot: number) {
//       this.pot = pot;
//     }
//   }

//   export class Motor {
//     //para acessar a classe Motor fora do namespace, é necessário exportar
//     potencia: number;
//     constructor(potencia: number) {
//       this.potencia = potencia;
//     }
//   }
// }

// const carro = new Veiculos.Carro("Celta");
// const motor = new Motores.Motor(1.0);

// console.log(carro);
// console.log(motor.potencia);
