// funções em typescript

// function somar(num1: number, num2: number): number {
//     return num1 + num2;
//  }    

//  console.log(somar(2, 2));


// função com retorno void

function mostrarMensagem(): void { // void não retorna nada
    console.log('Olá mundo!');
}

mostrarMensagem();


function logar(user:string, pass:string): void {
    console.log(`Usuário: ${user}`);
    console.log(`Senha: ${pass}`)
}

logar('admin', '123');