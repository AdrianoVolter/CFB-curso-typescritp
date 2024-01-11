// arrays
let notasAlunos: number[] = [10, 8, 8.5, 7];
// let notasAlunos: Array<number> = [10, 8, 8.5, 7]; // outra forma de declarar
// let numeros: (string | number)[] = [1, 2, 3, '4', 5]; // array com tipos diferentes
notasAlunos.push(9.5);
notasAlunos.unshift(7); // adiciona no inicio do array
console.log(notasAlunos);
notasAlunos.pop(); // remove o ultimo elemento do array
notasAlunos.shift(); // remove o primeiro elemento do array
console.log(notasAlunos);

let numeros :ReadonlyArray<number> = [1, 2, 3, 4, 5, 6];

//numeros.push(7); // não é permitido alterar o array