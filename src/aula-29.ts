///generic types

function f_teste<T, U>(v:T , r:U):U{ //T e U são tipos genéricos
    return r

}

console.log(f_teste<number, string>(10, "d"));   //T e U são tipos genéricos
console.log(f_teste<string, number>("teste", 12));  //T e U são tipos genéricos

class C_teste<T>{
    public valor:T;
    constructor(valor:T){
        this.valor=valor
    }
}

const c_teste1 = new C_teste<number>(10);
const c_teste2 = new C_teste<string>("teste");

console.log(c_teste1.valor);
console.log(c_teste2.valor);