import { Pessoa } from './Pessoa'


export class Aluno extends Pessoa { // cria a classe Aluno e fala que ela herda os atributos de Pessoa

    //Atributos
    matricula: string;
  
    constructor(nome: string, idade: number, matricula: string) {
      super(nome, idade); //super indica que os atributos vem da classe mãe
      this.matricula = matricula;
    }
  
    //método
    exibirDados() {
      super.exibirDados();
      console.log(`Matrícula: ${this.matricula}`);
    }
  }