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
}
const pc = new Computador("Dell", 16, 4);
const pc2 = new Computador("HP", 8, 2);
const pc3 = new Computador("Asus", 32, 8);
pc2.ligado = true;
console.log(pc);
console.log(pc2);
console.log(pc3);
