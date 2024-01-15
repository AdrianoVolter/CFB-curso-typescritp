const teste = ():void => { // O retorno é obrigatório
    console.log('teste'); // O retorno é obrigatório
}

teste();               // O retorno é obrigatório

const teste2 = (nome:string='...'):string => { // O retorno é obrigatório
    return nome;
}

console.log(teste2()); // O retorno é obrigatório


const soma3=(n:number[]) : number => { 
    let s:number = 0; 
    n.forEach((e)=>{ 
        s+=e;
    })
    return s;
}

let numerosArray:number[] = [1,2,3,4,5,6,7,8,9,10]; 

console.log(soma3(numerosArray)); // 55