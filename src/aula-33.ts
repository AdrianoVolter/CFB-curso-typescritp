//name space é um escopo global que ajuda a organizar o código

namespace Veiculos {
  export class Carro {
    nome: string;
    motor: Motores.Motor;
    constructor(nome: string) {
      this.nome = nome;
      this.motor = new Motores.Motor(1.0, 500);
    }
  }
}

namespace Motores {
  export class Turbo {
    private pot: number;
    constructor(pot: number) {
      this.pot = pot;
    }
    get Potencia(): number {
      return this.pot;
    }
  }

  export class Motor {
    private ligado: boolean;
    private cilindros: number;
    private pot: number;
    constructor(cilindros: number, potencia: number,turbo?: Turbo) {
      this.ligado = false ;
      this.cilindros = cilindros;
      this.pot = potencia;
    }
    set liga(value: boolean) {
      this.ligado = value;
    }
    get liga(): boolean {
      return this.ligado;
    }
    get Potencia(): number {
      return this.pot;
    }
  }
}

const carro = new Veiculos.Carro("Celta");
const motor = new Motores.Motor(1.0, 500);

console.log(carro);
console.log(motor.Potencia);