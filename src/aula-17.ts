//POO

class Computador{ //classe é um molde para criar objetos
    nome: string=""; //atributo
    ram:number=0;
    cpu:number=0;
    ligado:boolean;

    constructor(n:string, r:number, c:number){ //construtor é um método especial que é executado quando a classe é instanciada
        this.nome = n;
        this.ram = r;
        this.cpu = c;
        this.ligado = false;
    }
}

const pc = new Computador("Dell", 16, 4); //instância
const pc2 = new Computador("HP", 8, 2); //instância
const pc3 = new Computador("Asus", 32, 8); //instância

pc2.ligado = true; //alterando o valor do atributo ligado

console.log(pc); //imprimindo o objeto
console.log(pc2);
console.log(pc3);