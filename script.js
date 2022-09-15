const prompt = require('prompt-sync')();
const calcImc = require('./imc');

const peso = Number(prompt('Digite seu peso: '));
const altura = Number(prompt('Digite sua altura: '));

const imc = calcImc(peso, altura);

console.log(`Seu IMC é: ${imc.toFixed(2)}`);