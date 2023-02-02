const prompt = require('prompt-sync')({sigint: true});

let num1 = Number(prompt('How many sides do you want to roll?: '))
console.log(Math.ceil(Math.random() * num1));
