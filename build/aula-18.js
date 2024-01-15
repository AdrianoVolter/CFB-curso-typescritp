"use strict";
class Computador {
    nome = "";
    ram = 0;
    cpu = 0;
    ligado;
    constructor(n, r, c) {
        this.nome = n;
        this.ram = r;
        this.cpu = c;
        this.ligado = false;
    }
    info() {
        console.log(`Nome: ${this.nome}`);
        console.log(`RAM: ${this.ram}`);
        console.log(`CPU: ${this.cpu}`);
        console.log(`Ligado: ${this.ligado ? "Sim" : "Não"}`);
        console.log("-----------");
    }
    ligar = () => {
        this.ligado = true;
    };
    desligar = () => {
        this.ligado = false;
    };
}
const pc = new Computador("Dell", 16, 4);
const pc2 = new Computador("HP", 8, 2);
const pc3 = new Computador("Asus", 32, 8);
pc2.ligar();
pc.info();
pc2.info();
pc3.info();
