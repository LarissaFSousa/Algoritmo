1. let aluno = {
  nome: "Larissa Feitosa",
  idade: 17,
  curso: "Informática"
};

console.log("Nome " + aluno.nome);
console.log("Idade: " + aluno.idade);
console.log("Curso: " + aluno.curso);

2. let carro = {
  marca: "Ford",
  modelo: "Fastback GT",
  ano: 1967
};

console.log("Marca: " + carro.marca);

3. let livro = {
  título: "O Alienista",
  autor: "Machado de Assis",
  anoPublicação: 1882
};

console.log("Título: " + livro.título);
console.log("Autor: " + livro.autor);

4. let produto = {
  nome: "Mustang GTD",
  preço: 16000000,
  quantidade: 10
};

let valorTotal = produto.preco * produto.quantidade;

console.log("Valor Total: R$" + valorTotal);

//16
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

numeros.forEach(function(numero)  {
         console.log(numero)       
});

//17
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const numerosMultiplicados = numeros.map((numero) => {return numero * 2;});

console.log(numerosMultiplicados);

//18
const carros = [
{ nome: 'Honda NSX', ano: 1990},
{ nome: 'Mustang Shelby gt500', ano: 2022},
{ nome: 'Supra MK4', ano: 1995},
{ nome: 'Nissan Skyline GT-R', ano: 1996},
{ nome: 'Koenigsegg Agera', ano: 2016},
];

const carrosAntigos = carros.filter((carro) => {return carro.ano > 2010;});

console.log(carrosAntigos);

Questão 19
//criação do Array de Frutas
const frutas = ["banana", "laranja", "maçã", "uva", "morango"];
//usa o método includes() para verificar se "maçã" está no array
const temMaca = frutas.includes("maçã");
//resultado
console.log("O array de frutas é:", frutas);
console.log("A fruta 'maçã' está presente?", temMaca); //
saída: true

Questão 20

// Array de objetos
const pessoas = [
{ nome: "Ana", idade: 16 },
{ nome: "Bruno", idade: 20 },
{ nome: "Carla", idade: 22 },
{ nome: "Daniel", idade: 17 }
];

// Usando find para achar a primeira pessoa com idade > 18
const maiorDe18 = pessoas.find(pessoa => pessoa.idade > 18);

console.log(maiorDe18);

// Exercício 21: Crie uma string com o seu nome e imprima o número de caracteres.
const meuNome = "Inteligência Artificial";
const numeroDeCaracteres = meuNome.length;

console.log(`21. O número de caracteres no nome '${meuNome}' é: ${numeroDeCaracteres}`);
console.log("-".repeat(20));


// Exercício 22: Crie uma função que recebe um nome completo do usuário e imprime o primeiro e último nome.
function imprimirPrimeiroEUltimoNome(nomeCompleto) {
    const partesDoNome = nomeCompleto.trim().split(/\s+/); // Divide e remove espaços extras

    if (partesDoNome.length > 0) {
        const primeiroNome = partesDoNome[0];
        // O último nome é o último elemento do array
        const ultimoNome = partesDoNome[partesDoNome.length - 1];

        console.log(`Primeiro nome: ${primeiroNome}`);
        console.log(`Último nome: ${ultimoNome}`);
    } else {
        console.log("O nome fornecido está vazio.");
    }
}

console.log("22. Teste da função 'imprimirPrimeiroEUltimoNome':");
imprimirPrimeiroEUltimoNome("Ana Maria da Silva");
console.log("-".repeat(20));

// Exercício 23: Crie uma função que recebe um nome completo do usuário e imprime somente o primeiro nome.
function imprimirPrimeiroNome(nomeCompleto) {
    const partesDoNome = nomeCompleto.trim().split(/\s+/); // Divide e remove espaços extras

    if (partesDoNome.length > 0) {
        const primeiroNome = partesDoNome[0];
        console.log(`Primeiro nome: ${primeiroNome}`);
    } else {
        console.log("O nome fornecido está vazio.");
    }
}

console.log("23. Teste da função 'imprimirPrimeiroNome':");
imprimirPrimeiroNome("Carlos Alberto Junior");
console.log("-".repeat(20));

// Exercício 24: Crie uma string com uma frase e use o método 'toUpperCase' para imprimir a frase em letras maiúsculas.
const fraseOriginal = "o aprendizado em javascript é fantástico!";
// O método em JavaScript é 'toUpperCase()'
const fraseMaiuscula = fraseOriginal.toUpperCase();

console.log(`24. Frase original: ${fraseOriginal}`);
console.log(`Frase em maiúsculas: ${fraseMaiuscula}`);
console.log("-".repeat(20));
