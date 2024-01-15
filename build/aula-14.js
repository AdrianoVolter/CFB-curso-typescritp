"use strict";
const teste = () => {
    console.log('teste');
};
teste();
const teste2 = (nome = '...') => {
    return nome;
};
console.log(teste2());
const soma3 = (n) => {
    let s = 0;
    n.forEach((e) => {
        s += e;
    });
    return s;
};
let numerosArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(soma3(numerosArray));
