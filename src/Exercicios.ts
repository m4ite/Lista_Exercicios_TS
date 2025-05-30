import * as readlineSync from "readline-sync";

import { Pessoa } from "./model/Pessoa";
import { Aluno } from "./model/Aluno";
import { Carro } from "./model/Carro";


// -------------------- Exercicio 1 --------------------
export function ex1() {
  const num1 = parseInt(
    readlineSync.question("Digite o primeiro numero inteiro: ")
  );
  const num2 = parseInt(
    readlineSync.question("Digite o segundo numero inteiro: ")
  );

  const soma = num1 + num2;

  console.log(`${num1} + ${num2} = ${soma}.`);
}


// -------------------- Exercicio 2 --------------------
export function ex2() {
  const num = parseInt(readlineSync.question("Digite um numero: "));

  if (isNaN(num)) {
    // validação para ver se é um número inteiro
    console.log("Entrada invalida. Por favor, digite um numero inteiro.");
    return;
  }
  console.log(`O numero ${num} é ${num % 2 === 0 ? "par" : "impar"}.`); // se o número for divisível por 2 ele retorna par, senão impar
}


// -------------------- Exercicio 3 --------------------
export function ex3() {
  // leitura das notas inseridas pelo usuário e transforma elas em números decimais
  const nota1 = parseFloat(readlineSync.question("Digite a primeira nota: "));
  const nota2 = parseFloat(readlineSync.question("Digite a segunda nota: "));
  const nota3 = parseFloat(readlineSync.question("Digite a terceira nota: "));

  if ([nota1, nota2, nota3].some(isNaN)) {
    // verificação do formato das notas inseridas
    console.log("Erro: todas as entradas devem ser numeros validos.");
    return;
  }

  const media = (nota1 + nota2 + nota3) / 3;

  console.log(`Media das notas: ${media.toFixed(2)}`);
}


// -------------------- Exercicio 4 --------------------
export function ex4() {
  const celsius = parseFloat(
    readlineSync.question("Digite a temperatura em graus Celsius: ")
  );

  if (isNaN(celsius)) {
    console.log("Valor invalido. Por favor, digite um numero.");
    return;
  }

  const fahrenheit = (celsius * 9) / 5 + 32;

  console.log(
    `${celsius.toFixed(2)}°C = ${fahrenheit.toFixed(2)}°F.`
  ); // toFixed = arredondar o número
}


// -------------------- Exercicio 5 --------------------
export function ex5() {
  for (let i = 1; i <= 20; i++) { // contador de 1 a 20
    if (i % 2 === 0) { // se o número divididos por 2 tiver resto 0
      console.log(i);
    }
  }
}


// -------------------- Exercicio 6 --------------------
export function ex6() {
  const numeros: number[] = [];

  for (let i = 0; i < 5; i++) {
    const entrada = readlineSync.question(`Digite o numero ${i + 1}: `); // le o valor digitado
    const num = parseFloat(entrada); // converte o valor para decimal

    if (isNaN(num)) {
      console.log("Valor invalido, tente novamente.");
      i--; // repete a vez
      continue;
    }

    numeros.push(num); // adiciona no array
  }

  console.log("\nNumeros digitados:");
  numeros.forEach((num, idx) => {
    // percorre a lista
    console.log(`Posicao ${idx}: ${num}`); // mostra a posição e o valor
  });
}


// -------------------- Exercicio 7 --------------------
export function ex7() {
  const numeros: number[] = [];

  const tamanho = parseInt(
    readlineSync.question("Quantos numeros deseja informar? ")
  ); // pede pro usuário escolher o tamaho da lista

  if (isNaN(tamanho) || tamanho <= 0) {
    // verifica se é um número e se é maior que 0
    console.log("Entrada invalida para tamanho do array.");
    return;
  }

  for (let i = 0; i < tamanho; i++) {
    const entrada = readlineSync.question(`Digite o numero ${i + 1}: `); // solicita os números para preencher o array
    const num = parseInt(entrada);

    if (isNaN(num)) {
      console.log("Entrada invalida, tente novamente.");
      i--;
      continue;
    }

    numeros.push(num); // adiciona o número na lista
  }

  const maior = Math.max(...numeros); // Math.max retorna o maior valor da lista

  console.log(`Maior numero do array: ${maior}`);
}


// -------------------- Exercicio 8 --------------------
export function ex8() {
  const texto = readlineSync
    .question("Digite uma frase ou palavra: ")
    .toLowerCase(); // le o valor digitado pelo usuário e deixa tudo em letra minúscula

  const vogais = ["a", "e", "i", "o", "u"];
  let contador = 0;

  for (const char of texto) {
    // pra cada caracter do texto
    if (vogais.includes(char)) {
      // ve se o caracter está na lista de vogais, se estiver adicionar +1 ao contador
      contador++;
    }
  }

  console.log(`A string tem ${contador} vogal(is).`);
}


// -------------------- Exercicio 9 --------------------
export function ex9() {
  const num1 = parseFloat(readlineSync.question("Digite o primeiro numero: "));
  const num2 = parseFloat(readlineSync.question("Digite o segundo numero: "));
  const operacao = readlineSync.question("Digite a operacao (+, -, *, /): ");

  if (isNaN(num1) || isNaN(num2)) {
    // verifica se os valores digitados são números
    console.log("Entrada invalida. Por favor, digite numeros validos.");
    return;
  }

  let resultado: number | null = null; // declara o valor da variável de resultado como null

  switch (operacao) {
    case "+":
      resultado = num1 + num2;
      break;
    case "-":
      resultado = num1 - num2;
      break;
    case "*":
      resultado = num1 * num2;
      break;
    case "/":
      if (num2 === 0) {
        console.log("Erro: divisao por zero nao e permitida.");
        return;
      }
      resultado = num1 / num2;
      break;
    default: // se a operação não for nenhuma das que são permitidas ele entra na opção de default
      console.log("Operacao invalida. Use apenas +, -, * ou /.");
      return;
  }

  console.log(`${num1} ${operacao} ${num2} = ${resultado}`);
}


// -------------------- Exercicio 10 --------------------
export function ex10() {
  const tamanho = parseInt(
    readlineSync.question("Quantos numeros deseja informar? ")
  ); // pede pro usuário informar o tamanho da lista

  if (isNaN(tamanho) || tamanho <= 0) {
    // verifica se o tamanho é maior que 0 e é um número
    console.log("Valor invalido para tamanho do array.");
    return;
  }

  const numeros: number[] = [];

  for (let i = 0; i < tamanho; i++) {
    const entrada = readlineSync.question(`Digite o numero ${i + 1}: `); //solicita o input de um número
    const num = parseFloat(entrada); // converte o valor inserido para decimal

    if (isNaN(num)) {
      console.log("Entrada invalida, tente novamente.");
      i--;
      continue;
    }

    numeros.push(num); // adiciona o númerona lista
  }

  numeros.sort((a, b) => a - b); // ordena a lista números

  console.log("Array ordenado em ordem crescente:");
  console.log(numeros.join(", ")); // pega cada item da lista e mostra o valor do item e coloca uma vírgula entre o atual e o próximo
}


// -------------------- Exercicio 11 --------------------
export function ex11() {
  const nome = readlineSync.question("Digite o nome: ");
  const idade = parseInt(readlineSync.question("Digite a idade: "));

  if (!nome || isNaN(idade) || idade < 0) {
    //valida dados inseridos
    console.log("Entrada invalida.");
    return;
  }

  const pessoa = new Pessoa(nome, idade); //cria um objeto pessoa através do construtor

  console.log("\nDados da pessoa:");
  pessoa.exibirDados(); //chama o método que mostra os dados da pessoa
}


// -------------------- Exercicio 12 --------------------
export function ex12() {
  //lê os valores inseridos pelo usuário
  const nome = readlineSync.question("Digite o nome do aluno: ");
  const idade = parseInt(readlineSync.question("Digite a idade do aluno: "));
  const matricula = readlineSync.question("Digite a matricula do aluno: ");

  if (!nome || isNaN(idade) || idade < 0 || !matricula) {
    // verifica os dados
    console.log("Entrada invalida.");
    return;
  }

  const aluno = new Aluno(nome, idade, matricula); // cria o objeto aluno através do construtor

  console.log("\nDados do aluno:");
  aluno.exibirDados(); // mostra os dados
}


// -------------------- Exercicio 13 --------------------
export function ex13() {
  const modelo = readlineSync.question("Digite o modelo do carro: "); //recebe do usuário o modelo do carro
  const carro = new Carro(modelo); // cria o objeto Carro

  let opcao: string;
  do {
    console.log("\nEscolha uma acao:");
    console.log("1. Acelerar");
    console.log("2. Frear");
    console.log("0. Sair");
    opcao = readlineSync.question("Opcao: ");

    switch (opcao) {
      case "1":
        carro.acelerar();
        break;
      case "2":
        carro.frear();
        break;
      case "0":
        console.log("Saindo do programa...");
        break;
      default:
        console.log("Opcao invalida.");
    }
  } while (opcao !== "0");
}


// -------------------- Exercicio 14 --------------------
export function ex14() {
  const numero = parseInt(readlineSync.question("Digite um número inteiro: ")); // recebe o número do usuário

  if (isNaN(numero)) {
    // verifica se o valor digitado é um número
    console.log("Entrada invalida. Por favor, digite um numero inteiro.");
    return;
  }

  console.log(`\nTabuada do ${numero}:`);
  for (let i = 1; i <= 10; i++) {
    // vai somando de 1 em 1 no contador até chegar em 10
    console.log(`${numero} x ${i} = ${numero * i}`); // faz a multiplicação do número * contador
  }
}


// -------------------- Exercicio 15 --------------------
function classificarIMC(imc: number): string { // função usada no ex15 q retorna a classificação baseada no IMC
  if (imc < 18.5) return "Abaixo do peso";
  if (imc < 24.9) return "Peso normal";
  if (imc < 29.9) return "Sobrepeso";
  if (imc < 34.9) return "Obesidade grau I";
  if (imc < 39.9) return "Obesidade grau II";
  return "Obesidade grau III (mórbida)";}

export function ex15() {

  // recebe valores do usuário e converte para decimal
  const peso = parseFloat(readlineSync.question("Digite o peso (kg): "));
  const altura = parseFloat(readlineSync.question("Digite a altura (m): "));

  if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) { // valida os dados inseridos
    console.log("Dados inválidos. Certifique-se de inserir valores numéricos positivos.");
    return;
  }

  const imc = peso / (altura * altura); // calcula o IMC
  const classificacao = classificarIMC(imc); //usa o valor encontrado como input da função que retorna a classificação

  console.log(`\nSeu IMC é: ${imc.toFixed(2)} - ${classificacao}`);
}


// -------------------- Exercicio 16 --------------------
// função para o ex 16
function validarSenha(senha: string): string[] { // recebe uma string e retorna uma lista de string
  const erros: string[] = [];

  if (senha.length < 8) { // tamanho da senha
    erros.push("A senha deve ter pelo menos 8 caracteres."); // se não tiver adiciona na lista de erros
  }
  if (!/[A-Z]/.test(senha)) { //vetifica se tem letra maiúscula
    erros.push("A senha deve conter pelo menos uma letra maiúscula.");// se não tiver adiciona na lista de erros
  }
  if (!/[a-z]/.test(senha)) { // verifica letra minúscula
    erros.push("A senha deve conter pelo menos uma letra minúscula.");// se não tiver adiciona na lista de erros
  }
  if (!/[0-9]/.test(senha)) { //verifica se tem número
    erros.push("A senha deve conter pelo menos um número.");// se não tiver adiciona na lista de erros
  }

  return erros; // output da função é a lista de erros
}

export function ex16() {
  const senha = readlineSync.question("Digite a senha para validar: ", {
    hideEchoBack: true, // Oculta a digitação no console
  });

  const erros = validarSenha(senha); // chama a função de validar a senha 

  if (erros.length === 0) { // se a lista de erros estiver vazia
    console.log("✅ Senha válida!");
  } else {
    console.log("❌ Senha invalida. Motivos:");
    erros.forEach((erro) => console.log("- " + erro)); // pra cada item da lista de erro, ele mostra o item
  }
}


// -------------------- Exercicio 17 --------------------
export function ex17() {
  const numeroSecreto = Math.floor(Math.random() * 100) + 1; // Math.random escolhe 1 número aleatório
  let tentativas = 0;
  let chute: number;

  console.log("Tente adivinhar o número entre 1 e 100.");

  do { // inicia um looping
    chute = parseInt(readlineSync.question("Digite seu palpite: ")); // recebe um valor do usuário
    tentativas++;

    if (isNaN(chute) || chute < 1 || chute > 100) {
      console.log("Por favor, digite um numero válido entre 1 e 100.");
      continue;
    }

    if (chute < numeroSecreto) {
      console.log("🔻 Muito baixo... tente um numero maior!");
    } else if (chute > numeroSecreto) {
      console.log("🔺 Muito alto... tente um numero menor!");
    } else {
      console.log(`🎉 Parabéns! Você acertou o numero ${numeroSecreto} em ${tentativas} tentativa(s).`);
    }
  } while (chute !== numeroSecreto); // para o looping quando a pessoa acertar o número secretp
}


// -------------------- Exercicio 18 --------------------
export function ex18() {
  const frase = readlineSync.question("Digite uma frase: ").trim(); // le o valor inserido pelo usuário o trim() remove espaços adicionais

  // pega a frase digitada e transforma cada palavra em uma lista
  const palavras = frase.split(" "); // a função split divide a string baseada em algum critério, aqui está usando o espaço
  console.log(`A frase contém ${palavras.length} palavra(s).`);
}
