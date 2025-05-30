import chalk from 'chalk';
import * as readlineSync from 'readline-sync'; // biblioteca para colorir os prints do console
import * as exercicios from './Exercicios';


const enunciados: string[] = [
    "Soma de dois números",
    "Verificar par ou ímpar",
    "Calcular média de 3 notas",
    "Converter graus Celsius para Fahrenheit",
    "Exibir números pares de 1 a 20",
    "Ler 5 números e armazenar em array",
    "Encontrar maior número em um array",
    "Contar vogais em uma string",
    "Calculadora Simples",
    "Ordenar array em ordem crescente",
    "Classe Pessoa",
    "Classe Aluno",
    "Classe Carro",
    "Tabuada",
    "Calculadora de IMC",
    "Validar senha",
    "Jogo de adivinahção",
    "Contar palavras em uma string"
  ];


function clearConsole() {
  console.clear();
}

function printHeader() {
  console.log(chalk.blueBright('╔═══════════════════════════════════════════╗'));
  console.log(chalk.blueBright('║') + chalk.white.bold('        MENU DE EXERCÍCIOS (0 a 18)        ') + chalk.blueBright('║'));
  console.log(chalk.blueBright('╚═══════════════════════════════════════════╝'));
}

function printOptions() {
  enunciados.forEach((descricao, index) => { //para cada enunciado da lista
    const num = index + 1; // número do exercício
    const numFormatado = num < 10 ? `0${num}` : `${num}`; // se o número tiver só 1 dígito, ele adiciona um 0 a esquerda
    console.log(chalk.green(`[${numFormatado}]`) + ` ${descricao}`); //mostra o enunciado no console na cor verde
  });

  console.log(chalk.red('[00]') + ' Sair'); // mostra a opção de sair
}

function executarExercicio(numero: number) {
    const descricao = enunciados[numero - 1];
    console.log(chalk.yellowBright(`\nExecutando: ${descricao}\n`));
    
    switch (numero){
        case 1:
            exercicios.ex1();
            break;
        case 2:
            exercicios.ex2();
            break;
        case 3:
            exercicios.ex3();
            break;
        case 4: 
            exercicios.ex4();
            break;
        case 5:
            exercicios.ex5();
            break;
        case 6:
            exercicios.ex6();
            break;
        case 7:
            exercicios.ex7();
            break;
        case 8:
            exercicios.ex8();
            break;
        case 9:
            exercicios.ex9();
            break
        case 10:
            exercicios.ex10();
            break;
        case 11:
            exercicios.ex11();
            break;
        case 12:
            exercicios.ex12();
            break
        case 13:
            exercicios.ex13();
            break;
        case 14:
            exercicios.ex14();
            break;
        case 15:
            exercicios.ex15();
            break
        case 16:
            exercicios.ex16();
            break;
        case 17:
            exercicios.ex17();
            break
        case 18:
            exercicios.ex18();
            break;

    }
}

function main() {
  let opcao: string;

  do {
    clearConsole();
    printHeader();
    printOptions();

    opcao = readlineSync.question(chalk.cyanBright('\nDigite a opcao desejada (0 a 18): ')); // solicita que o usuário insira uma opção no console

    const numero = Number(opcao); 

    if (!isNaN(numero) && numero >= 1 && numero <= 18) { // if para validação da opção inserida
      clearConsole(); //limpa o console
      executarExercicio(numero); //executa a função referente ao exercío escolhido
      readlineSync.question(chalk.magentaBright('\nPressione [ENTER] para voltar ao menu...')); 
    } else if (numero !== 0) {
      console.log(chalk.red('\nOpcao invalida! Tente novamente.'));
      readlineSync.question(chalk.gray('Pressione [ENTER] para continuar...'));
    }
  } while (opcao !== '0');

  clearConsole();
  console.log(chalk.greenBright('\nPrograma encerrado.\n'));
}

main();
