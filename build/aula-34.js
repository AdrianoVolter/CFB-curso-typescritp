"use strict";
var Veiculos;
(function (Veiculos) {
    let Cores;
    (function (Cores) {
        Cores[Cores["Branco"] = 0] = "Branco";
        Cores[Cores["Preto"] = 1] = "Preto";
        Cores[Cores["Vermelho"] = 2] = "Vermelho";
        Cores[Cores["Verde"] = 3] = "Verde";
        Cores[Cores["Azul"] = 4] = "Azul";
        Cores[Cores["Amarelo"] = 5] = "Amarelo";
    })(Cores || (Cores = {}));
    class Carro {
        nome;
        motor;
        cor;
        constructor(nome, motor, cor) {
            this.nome = nome;
            this.motor = new Motores.Motor(1.0, 500);
            this.cor = Cores[cor];
        }
        ligar() {
            this.motor.liga = true;
        }
        desligar() {
            this.motor.liga = false;
        }
        get minhaCor() {
            return this.cor;
        }
        get meuNome() {
            return this.nome;
        }
        get estouLigado() {
            return this.motor.liga ? "Sim" : "Não";
        }
        get minhaPotencia() {
            return this.motor.Potencia;
        }
    }
    class CarroEsportivo extends Carro {
        constructor(nome, motor, cor) {
            super(nome, new Motores.Motor(1.0, 500), 2);
        }
    }
    Veiculos.CarroEsportivo = CarroEsportivo;
    class CarroPopular extends Carro {
        constructor(nome, motor, cor) {
            super(nome, new Motores.Motor(1.0, 500), 1);
        }
    }
    Veiculos.CarroPopular = CarroPopular;
})(Veiculos || (Veiculos = {}));
var Motores;
(function (Motores) {
    class Turbo {
        pot;
        constructor(pot) {
            this.pot = pot;
        }
        get Potencia() {
            return this.pot;
        }
    }
    Motores.Turbo = Turbo;
    class Motor {
        ligado;
        cilindros;
        pot;
        constructor(cilindros, potencia, turbo) {
            this.ligado = false;
            this.cilindros = cilindros;
            this.pot = potencia;
        }
        set liga(value) {
            this.ligado = value;
        }
        get liga() {
            return this.ligado;
        }
        get Potencia() {
            return this.pot;
        }
    }
    Motores.Motor = Motor;
})(Motores || (Motores = {}));
const carro1 = new Veiculos.CarroEsportivo("Celta", new Motores.Motor(1.0, 500), 2);
carro1.ligar();
carro1.desligar();
console.log(carro1);
console.log("--------------------------------------------------");
const carro2 = new Veiculos.CarroPopular("Celta", new Motores.Motor(1.0, 500), 1);
carro2.ligar();
carro2.desligar();
console.log(carro2);
