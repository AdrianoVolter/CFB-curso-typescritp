"use strict";
var Veiculos;
(function (Veiculos) {
    class Carro {
        nome;
        motor;
        constructor(nome) {
            this.nome = nome;
            this.motor = new Motores.Motor(1.0, 500);
        }
    }
    Veiculos.Carro = Carro;
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
const carro = new Veiculos.Carro("Celta");
const motor = new Motores.Motor(1.0, 500);
console.log(carro);
console.log(motor.Potencia);
