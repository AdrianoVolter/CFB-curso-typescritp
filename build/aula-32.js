"use strict";
var Veiculos;
(function (Veiculos) {
    class Carro {
        nome;
        motor;
        constructor(nome) {
            this.nome = nome;
            this.motor = new Motores.Motor(1.0);
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
    }
    Motores.Turbo = Turbo;
    class Motor {
        potencia;
        constructor(potencia) {
            this.potencia = potencia;
        }
    }
    Motores.Motor = Motor;
})(Motores || (Motores = {}));
const carro = new Veiculos.Carro("Celta");
const motor = new Motores.Motor(1.0);
console.log(carro);
console.log(motor.potencia);
