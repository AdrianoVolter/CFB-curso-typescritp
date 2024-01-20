// interface e objetos literais

interface CursoInterface{
    titulo:string;
    desc:string;
    aulas:number;
    maxAlunos?:number;
}

let cursoObj1:CursoInterface;
let cursoObj2:CursoInterface;

cursoObj1={titulo:"Typescript",desc:"Curso de typescrip",aulas:100,maxAlunos:20}
cursoObj2={titulo:"React js",desc:"Curso de React js",aulas:300}

console.log(cursoObj1)
console.log(cursoObj2)