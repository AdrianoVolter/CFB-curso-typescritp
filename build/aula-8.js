"use strict";
let dados = {
    nome: 'João',
    idade: 27,
    status: "Ativo",
    info: (p) => {
        console.log(p);
    }
};
console.log(typeof (dados));
console.log(dados.nome);
console.log(dados.idade);
dados.info("Teste");
