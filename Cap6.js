//1//
Entrada e saída de dados*

alert() → mostra uma mensagem em pop-up.

prompt() → pede para o usuário digitar algo.

console.log() → imprime no console (ótimo pra testar código).


*Manipulação de strings*

toUpperCase() → transforma em maiúsculas.

toLowerCase() → transforma em minúsculas.

substring() → retorna parte da string.

replace() → troca um trecho por outro.

trim() → remove espaços extras.


*Manipulação de números*

parseInt() → transforma string em número inteiro.

parseFloat() → transforma string em número decimal.

Math.round() → arredonda.

Math.random() → gera número aleatório.

Math.max() / Math.min() → maior ou menor número.


*Datas*

Date() → pega a data atual.

getFullYear() → pega o ano.

getMonth() → pega o mês.


//2//
function exercicio2() {
  let pessoa = { nome: "Fulano", idade: 18 };

  console.log("Object.keys:", Object.keys(pessoa));
  console.log("Array.isArray([1,2,3]):", Array.isArray([1,2,3]));
  console.log("JSON.stringify(pessoa):", JSON.stringify(pessoa));

  alert("Exploração feita! Veja os resultados no console (F12).");
}


*Explicando:*

Object.keys → retorna as chaves (propriedades) do objeto.

Array.isArray(valor) → verifica se o valor informado é um array (lista).


JSON.stringify(objeto) → transforma um objeto em um texto no formato JSON.

//3//
function exercicio3() {
  let n1 = parseFloat(prompt("Digite o primeiro número:"));
  let n2 = parseFloat(prompt("Digite o segundo número:"));
  let n3 = parseFloat(prompt("Digite o terceiro número:"));

  let media = (n1 + n2 + n3) / 3;

  alert("A média é: " + Math.round(media));
  console.log("Média exata: " + media);
}

*Explicando:*

prompt() → pede que o usuário digite um número.

parseFloat() → converte o que o usuário digitou para número decimal.

Math.round() → arredonda a média para o inteiro mais próximo.

alert() → exibe o resultado na tela.

console.log() → mostra no console a média exata 

//4//
function saudacao() {
  alert("Olá! Seja bem-vindo ao mundo do JavaScript 🚀");
}

saudacao(); 

//5//

function mediaTresNumeros (a, b, c) {

let media = (a + b + c) / 3;

console.log "A média é:", media);

}

mediaTresNumeros(6, 8, 10); // saída: A média é: 8

//6//

function quadrado (num) {

return num * num;

console.log (quadrado(5)); // saída: 25

//7//

let variavelGlobal = "Eu sou global";

function exemploEscopo () {

let variavelLocal = "Eu sou local";

console.log(variavelGlobal); // acessível console.log(variavelLocal); // acessível

｝

exemploEscopo ();

console.log(variavelGlobal); // acessível fora da função

console.log(variavelLocal); // ERRO: não é acessível fora da função

//8//

function blocoEscopo () {

if (true) {

let variavelBloco = "Estou dentro do

bloco";

console.log(variavelBloco); // acessível
}

console.log(variavelBloco); // ERRO: não acessível fora do bloco
}
blocoEscopo();

//9//Reescrevendo em Arrow Functions:

A função de mensagem pode ser escrita como: const mostrarMensagem = () => console.log("Olá!");
A função da média: const media = (a, b, c) => (a + b + c) / 3;
A função do quadrado: const quadrado = x => x * x;
As funções de escopo também podem ser declaradas dessa forma, com const nomeDaFuncao = () => { ... }.

//10// Função que calcula a média de dois números
const calcularMedia = () => {
  // Solicita os números ao usuário
  let num1 = parseFloat(prompt("Digite o primeiro número:"));
  let num2 = parseFloat(prompt("Digite o segundo número:"));

  // Calcula a média
  let media = (num1 + num2) / 2;

  // Exibe o resultado
  alert("A média é: " + media);
};

// Chama a função 

//11// Funções para cada operação
const soma = (a, b) => a + b;
const subtracao = (a, b) => a - b;
const multiplicacao = (a, b) => a * b;
const divisao = (a, b) => b !== 0 ? a / b : "Erro: divisão por zero";

// Função para exibir o resultado
const mostrarResultado = (operacao, resultado) => {
  alert(`O resultado da ${operacao} é: ${resultado}`);
};

// Função principal da calculadora
const calculadora = () => {
  let num1 = parseFloat(prompt("Digite o primeiro número:"));
  let num2 = parseFloat(prompt("Digite o segundo número:"));
  let operacao = prompt("Escolha a operação (+, -, *, /):");

  let resultado;

  switch (operacao) {
    case "+":
      resultado = soma(num1, num2);
      mostrarResultado("adição", resultado);
      break;
    case "-":
      resultado = subtracao(num1, num2);
      mostrarResultado("subtração", resultado);
      break;
    case "*":
      resultado = multiplicacao(num1, num2);
      mostrarResultado("multiplicação", resultado);
      break;
    case "/":
      resultado = divisao(num1, num2);
      mostrarResultado("divisão", resultado);
      break;
    default:
      alert("Operação inválida!");
  }
};
Chamar a calculadora ();

 //12//
 
function lerValorEmReais() {
  const valor = parseFloat(prompt("Digite o valor em Reais (R$):"));
  return valor;
}

function converterParaDolar(valorEmReais, taxaDeCambio) {
  return valorEmReais / taxaDeCambio;
}

function exibirResultado(valorEmReais, valorEmDolar, taxaDeCambio) {
  alert(`Com a taxa de câmbio de R$ ${taxaDeCambio.toFixed(2)} por US$ 1,\n` +
        `R$ ${valorEmReais.toFixed(2)} equivalem a US$ ${valorEmDolar.toFixed(2)}`);
}

function conversorMoeda() {
  const taxaDeCambio = 5.20; // exemplo
  const valorEmReais = lerValorEmReais();
  const valorEmDolar = converterParaDolar(valorEmReais, taxaDeCambio);
  exibirResultado(valorEmReais, valorEmDolar, taxaDeCambio);
}

conversorMoeda();

Explicação: 
 
• LerValorEmReais(): Usa prompt@) para pedir ao usuário que digite um valor em reais. Converte esse valor para número com parseFloat().
 • converterParaDolar(): Recebe o valor em reais e a taxa de câmbio, e retorna o valor convertido em dólares.
• ﻿﻿exibirResultado(): Mostra o resultado final com alertO, formatando os números com duas casas decimais usando toFixed (2).
• ﻿﻿conversorMoeda(): É a função principal que coordena todo o processo - leitura, conversão e exibição.

//13//

function calcularIMC(peso, altura) {
  return peso / (altura * altura);
}

function classificarIMC(imc) {
  if (imc < 18.5) {
    return "Abaixo do peso";
  } else if (imc < 25) {
    return "Peso normal";
  } else if (imc < 30) {
    return "Sobrepeso";
  } else {
    return "Obeso";
  }
}

function main() {
  let altura = parseFloat(prompt("Digite sua altura (em metros):"));
  let peso = parseFloat(prompt("Digite seu peso (em kg):"));

  let imc = calcularIMC(peso, altura);
  let classificacao = classificarIMC(imc);

  alert("Seu IMC é: " + imc.toFixed(2) + "\nClassificação: " + classificacao);
}// Executa o programa
main();

Explicação:

O programa pede altura e peso do usuário, calcula o IMC pela fórmula. e mostra o valor junto com a classificação:
- IMC < 18.5 → Abaixo do peso
- 18.5 ≤ IMC < 25 → Peso normal
- 25 ≤ IMC < 30 → Sobrepeso
- IMC ≥ 30 → Obeso

• Usa prompt() para pedir a altura e o peso ao usuário.
• Converte os valores para número decimal com parseFloat.
• Chama calcularIMC para obter o valor do IMC.
• Usa classificarIMC para determinar a categoria.
• Mostra o resultado com alert().  
    

- O .toFixed(2) limita o valor do IMC a 2 casas decimais.


//14//

function jogoAdivinhacao() {
  // Número secreto aleatório entre 1 e 100
  let numeroSecreto = Math.floor(Math.random() * 100) + 1;

  // Pontuação inicial
  let pontos = 100;
  let palpite;

  alert("Bem-vindo ao jogo de adivinhação!\nTente adivinhar o número entre 1 e 100.");

  // Loop até o jogador acertar
  while (true) {
    palpite = parseInt(prompt("Digite seu palpite:"));

    if (palpite === numeroSecreto) {
      alert("Parabéns! Você acertou o número secreto " + numeroSecreto +
            "\nSua pontuação final: " + pontos + " pontos.");
      break; // Sai do loop
    } else {
      pontos--; // perde 1 ponto por erro

      if (palpite > numeroSecreto) {
        alert(" Errou! O número secreto é menor que " + palpite +
              "\nPontuação atual: " + pontos);
      } else {
        alert(" Errou! O número secreto é maior que " + palpite +
              "\nPontuação atual: " + pontos);
      }
    }
  }
}

// Executa o jogo
jogoAdivinhacao();
