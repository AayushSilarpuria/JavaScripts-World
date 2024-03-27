//Program to add first n natural number.
/*
const prompt = require('prompt-sync')();
let sum = 0;
let n = prompt("Enter the value of n: ");
num = Number.parseInt(n);
for(let i=0; i<5; i++)
{
    sum += (i+1);
    console.log(i);
}
console.log("Sum of first "+ num +" natural num is "+ sum);
//console.log(i); // It only run when we change i from let to var type.
*/
/*
let obj = {
    ayu: 99,
    shubh: 83,
    veer: 88,
    nee: 93,
    priya: 83
}

for(let a in obj)
{
    console.log("Marks of student "+a+" is "+obj[a]+".");
}


// of-loop doesn't work in object key-value pair.
for(let a of "Ayush")
{
    console.log(a);
}
*/
//Factorial Program:
const prompt = require("prompt-sync")();

n = prompt("Enter the number: ");
num = Number.parseInt(n);

for(let i=1;i<=num;i++)
{
    fact = i%2;
    console.log("The factorial of till number "+i+" by 2 is "+fact);
}