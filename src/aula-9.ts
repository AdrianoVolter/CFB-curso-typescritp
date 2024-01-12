// enum

enum dias {
    domingo=1,
    segunda=2,
    terca=3,
    quarta=4,
    quinta=5,
    sexta=6,
    sabado=7
}

//console.log(dias.domingo);

const d = new Date();
//console.log(dias[d.getDay()]);

enum cores{
    vermelho = '#FF0000',
    verde = '#00FF00',
    azul = '#0000FF',
    branco= '#FFFFFF',
    preto = '#000000'
}

console.log(cores.vermelho);
//console.log(cores[0]); // não funciona com enum
console.log(cores['vermelho']);


enum tipoUsuario{
    admin=10,
    user = 300,
    guest = 700
}

console.log(tipoUsuario.admin);

const tp:tipoUsuario = tipoUsuario.guest;

console.log(tp);