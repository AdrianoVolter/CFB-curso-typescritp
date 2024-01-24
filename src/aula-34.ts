//name space é um escopo global que ajuda a organizar o código

namespace Veiculos {
  enum Cores {
    "Branco",
    "Preto",
    "Vermelho",
    "Verde",
    "Azul",
    "Amarelo",
  }
  abstract class Carro {
    private nome: string;
    private motor: Motores.Motor;
    private cor: string;
    constructor(nome: string, motor: Motores.Motor, cor: Cores) {
      this.nome = nome;
      this.motor = new Motores.Motor(1.0, 500);
      this.cor = Cores[cor];
    }
    public ligar() {
      this.motor.liga = true;
    }
    public desligar() {
      this.motor.liga = false;
    }
    get minhaCor(): string {
      return this.cor;
    }
    get meuNome(): string {
      return this.nome;
    }
    get estouLigado() {
      return this.motor.liga ? "Sim" : "Não";
    }
    get minhaPotencia(): number {
      return this.motor.Potencia;
    }
  }

  export class CarroEsportivo extends Carro {
    constructor(nome: string, motor: Motores.Motor, cor: Cores) {
      super(nome, new Motores.Motor(1.0, 500), 2);
    }
  }

  export class CarroPopular extends Carro {
    constructor(nome: string, motor: Motores.Motor, cor: Cores) {
      super(nome, new Motores.Motor(1.0, 500), 1);
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
    constructor(cilindros: number, potencia: number, turbo?: Turbo) {
      this.ligado = false;
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

const carro1 = new Veiculos.CarroEsportivo(
  "Celta",
  new Motores.Motor(1.0, 500),
  2
);
//console.log(carro1);
carro1.ligar();
//console.log(carro1);
// console.log(carro1.minhaCor);
// console.log(carro1.meuNome);
// console.log(carro1.estouLigado);
// console.log(carro1.minhaPotencia);
carro1.desligar();
console.log(carro1);
console.log("--------------------------------------------------");

const carro2 = new Veiculos.CarroPopular(
  "Celta",
  new Motores.Motor(1.0, 500),
  1
);

//console.log(carro2);
carro2.ligar();
//console.log(carro2);
// console.log(carro2.minhaCor);
// console.log(carro2.meuNome);
// console.log(carro2.estouLigado);
// console.log(carro2.minhaPotencia);
carro2.desligar();
console.log(carro2);
