"use strict";
class Computador {
    nome = "";
    ram = 0;
    cpu = 0;
    ligado = false;
}
const pc = new Computador();
const pc2 = new Computador();
const pc3 = new Computador();
pc.nome = "Dell";
pc2.nome = "HP";
pc3.nome = "Asus";
console.log(pc.nome);
console.log(pc2.nome);
console.log(pc3.nome);
