//POO, Modificadores de Acesso

class Computador{ //classe é um molde para criar objetos
    nome: string=""; //atributo
    ram:number=0;
    cpu:number=0;
    private ligado:boolean; //private: só pode ser acessado dentro da classe

    constructor(n:string, r:number, c:number){ //construtor é um método especial que é executado quando a classe é instanciada
        this.nome = n;
        this.ram = r;
        this.cpu = c;
        this.ligado = false;
    }

    info():void{ //método
        console.log(`Nome: ${this.nome}`); //template string
        console.log(`RAM: ${this.ram}`); //template string
        console.log(`CPU: ${this.cpu}`); //template string
        console.log(`Ligado: ${this.ligado? "Sim":"Não"}`); //template string
        console.log("-----------");

    }

    ligar = ():void => { //método
        this.ligado = true;
    }

    desligar = ():void => { //método
        this.ligado = false;
    }

    upRam = (n:number):void => { //método
        if (n>=0 && n<= 1000)
            this.ram = n
        else
            console.log(`\nQuantidade ${n} de RAM inválida para o computador ${this.nome}`);
            console.log("-----------\n");
    }

}

const pc = new Computador("Dell", 16, 4); //instância
const pc2 = new Computador("HP", 8, 2); //instância
const pc3 = new Computador("Asus", 32, 8); //instância

pc2.ligar(); 

pc2.upRam(-232); //chamando o método upRam

pc.info(); 
pc2.info(); 
pc3.info(); 

