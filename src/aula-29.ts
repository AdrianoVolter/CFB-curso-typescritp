///generic types

function f_teste<T, U>(v:T , r:U):U{ //T e U são tipos genéricos
    return r

}

console.log(f_teste<number, string>(10, "d"));   //T e U são tipos genéricos
console.log(f_teste<string, number>("teste", 12));  //T e U são tipos genéricos