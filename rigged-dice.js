const prompt = require('prompt-sync')({sigint: true});

let num1 = Number(prompt('Which die number do you want rigged(1-6): '))

let num2 = Number(Math.ceil(Math.random() * 7))

if (num2 === 7) {
    console.log(`You rolled a ${num1}`)
} 
else if (
        num2 === 1 ||
        num2 === 2 ||
        num2 === 3 ||
        num2 === 4 ||
        num2 === 5 ||
        num2 === 6) {
    console.log(`You rolled a ${num2}`)
}        
else {
    console.log(`Try a number from 1-6: `)
}