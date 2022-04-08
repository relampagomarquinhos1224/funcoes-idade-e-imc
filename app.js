const { calcularIdade, calcularImc } = require('./modulos/funcoes.js');

// Pega a 3ª entrada de uma lista de argumentos
const idade = process.argv[2];
const peso = process.argv[3];
const altura = process.argv[4];

console.log(`Você tem ${calcularIdade(idade)} anos e seu imc é de ${calcularImc(peso, altura)}`);