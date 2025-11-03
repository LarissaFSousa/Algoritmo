Exercício 5

let numeros = [10, 20, 30];
numeros.push(40, 50);

console.log("Array resultante:", numeros);


Exercício 6

let numeros = [5, 10, 15, 20];
let removido = numeros.pop();

console.log("Array resultante:", numeros);
console.log("Elemento removido:", removido);


Exercício 7

let numeros = [1, 2, 3, 4, 5];
let removido = numeros.shift();

console.log("Array resultante:", numeros);
console.log("Elemento removido:", removido);


//8
let cores = ['vermelho', 'verde'];

cores.unshift('azul', 'amarelo');

console.log(cores); 


//9
let frutas = ['maçã', 'banana'];
let maisFrutas = ['laranja', 'pêra'];

let todasAsFrutas = frutas.concat(maisFrutas);

console.log(todasAsFrutas); 


//10
let animais = ['cachorro', 'gato', 'pássaro', 'peixe'];

let animaisSelecionados = animais.slice(1, 3);

console.log(animaisSelecionados);


//11
let cidades = ['São Paulo', 'Rio de Janeiro', 'Belo Horizonte',
'Salvador', 'Fortaleza'];

cidades.splice(2, 2);

console.log(cidades);


//12
let numeros = [50, 10, 1, 30, 20, 2];

numeros.sort ((a, b) => a - b);

console.log (numeros);


13.  // Cria um array vazio para armazenar os filmes
let filmes = [];

// Pede ao usuário o nome de 5 filmes
for (let i = 0; i < 5; i++) {
  let nomeFilme = prompt(`Digite o nome do ${i + 1}º filme:`);
  filmes.push(nomeFilme);
}

// Exibe no console os filmes informados
console.log("Os filmes informados foram:");
for (let filme of filmes) {
  console.log(filme);
}


14. // Cria um array vazio para armazenar os filmes
let filmes = [];

// Pede ao usuário o nome de 5 filmes
for (let i = 0; i < 5; i++) {
  let nomeFilme = prompt(`Digite o nome do ${i + 1}º filme:`);
  filmes.push(nomeFilme);
}

// Exibe os filmes informados usando um for tradicional
console.log("Os filmes informados foram:");
for (let i = 0; i < filmes.length; i++) {
  console.log(filmes[i]);
}


15. // Lista de filmes do exercício anterior
let filmes = [];

// Solicita ao usuário o nome de 5 filmes
for (let i = 0; i < 5; i++) {
  let nomeFilme = prompt(`Digite o nome do ${i + 1}º filme:`);
  filmes.push(nomeFilme);
}

// Exibe no console cada um dos filmes informados usando for...of
console.log("Os filmes informados foram:");
for (let filme of filmes) {
  console.log(filme);
}
