let nvalor: number;

let svalor: string;

let uvalor: unknown;

uvalor = 10;

nvalor =<number> uvalor // casting de unknown para number

console.log(typeof(nvalor));
console.log(nvalor);