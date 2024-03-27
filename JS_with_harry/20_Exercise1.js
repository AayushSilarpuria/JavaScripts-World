// Exercise 1 :

let number  = Math.floor(Math.random() * 101);
console.log(number);

const prompt = require('prompt-sync')();
let chances = 0;

do{
    if(chances < 100)
    {
        let guess = prompt("Guess the correct number:  ");
        guessed = Number.parseInt(guess);
        chances += 1;

        let differnece = Number.parseInt(number - guessed);

        if(differnece < 0) 
        {
            console.log("The Required number is lesser then "+guessed);
        }
        else
        {
            console.log("The Required number is greater then "+guessed);
        }
    }
}while(guessed !== number )

console.log("You got the correct Number: "+guessed+"; In Chances: "+chances);
console.log("You Score is "+(100 - chances));

