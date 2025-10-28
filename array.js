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

const carrosAntigos = carros.filter((carro) => {return carro.ano < 2000;});

console.log(carrosAntigos);
