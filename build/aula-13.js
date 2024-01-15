"use strict";
function somar(n1 = 0, n2 = 2) {
    return n1 + n2;
}
console.log(somar(2, 4));
function novoUser(user, pass, nome) {
    const dados = {
        user,
        pass,
        nome
    };
    console.log(dados);
    if (nome) {
        console.log(`Nome: ${dados.nome}`);
        console.log(`Usuário: ${dados.user}`);
        console.log(`Senha: ${dados.pass}`);
    }
    else {
        console.log('Usuário sem nome');
    }
}
novoUser('admin', '123');
