"use strict";
const obj = {
    cor1: 'vermelho',
    cor2: 'verde',
    cor3: 'azul',
    cor4: 'branco',
    cor5: 'preto'
};
const { cor1, cor2, cor3, cor4, cor5 } = obj;
let [nu1 = 0, nu2 = 0, nu3 = 0, nu4 = 0, ...nu5] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(nu1);
console.log(nu2);
console.log(nu3);
console.log(nu4);
console.log(nu5);
const obj2 = () => {
    return [1, 2, 3, 4, 5, 6, 7, 8, 9];
};
let [n1, n2, n3, n4, n5, n6, n7, n8, n9] = obj2();
console.log(n1);
console.log(n2);
console.log(n3);
console.log(n4);
console.log(n5);
let texto = 'Aula de JavaScript';
let [...t] = texto.split(' ');
let [p1, p2, p3] = texto.split(' ');
console.log(t);
console.log(p1);
console.log(p2);
console.log(p3);
