"use strict";
function f_teste(v, r) {
    return r;
}
console.log(f_teste(10, "d"));
console.log(f_teste("teste", 12));
class C_teste {
    valor;
    constructor(valor) {
        this.valor = valor;
    }
}
const c_teste1 = new C_teste(10);
const c_teste2 = new C_teste("teste");
console.log(c_teste1.valor);
console.log(c_teste2.valor);
