"use strict";
function somarRest(...numeros) {
    let soma = 0;
    numeros.forEach((e) => {
        soma += e;
    });
    return soma;
}
console.log(somarRest(14, 22, 332, 42, 5, 62, 7, 83, 98, 103));
