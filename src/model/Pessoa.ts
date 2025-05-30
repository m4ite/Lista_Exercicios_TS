export class Pessoa { // cria classe pessoa

    // atributos
    nome: string;
    idade: number;
  
    //para instanciar a classe pessoa
    constructor(nome: string, idade: number) {
      this.nome = nome;
      this.idade = idade;
    }
  

    //método para mostrar os dados cadastrados
    exibirDados() {
      console.log(`Nome: ${this.nome}`);
      console.log(`Idade: ${this.idade}`);
    }
  }