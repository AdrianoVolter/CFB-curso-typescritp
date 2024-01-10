var Curso = /** @class */ (function () {
    function Curso(canal, curso) {
        this.canal = null;
        this.curso = null;
        this.canal = canal;
        this.curso = curso;
    }
    return Curso;
}());
var c1 = new Curso("CFB", "typescript");
console.log(c1.canal);
console.log(c1.curso);
