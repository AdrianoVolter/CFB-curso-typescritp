// Parametros rest 

function somar(...numeros: number[]): number {   // Parametros rest
    let soma: number = 0;
    numeros.forEach((e) => {
        soma += e;
    })
    return soma;
}

console.log(somar(14, 22, 332, 42, 5, 62, 7, 83, 98, 103)); // 55

