const prompt = require("prompt-sync")();

/*
num = prompt("Enter the number for while loop: ");
n = Number.parseInt(num);

let count = 0;
while(n > count)
{
    console.log(count);
    count++;
}
*/

/*
//do-while loop
num = prompt("Enter the number for do_while loop: ");
n = Number.parseInt(num);
let i=10;
do{
    console.log(i)
    i++;
}while(n>i)

// do_while atleast rum 1 time.
*/

// Factorial program for while and do_while loop

num = prompt("Enter the number for factorial: ");
n = Number.parseInt(num);

let i = 1;
while(n>i)
{
    fact = n % i;
    console.log("While loop Factorial of given number "+n+" is "+fact);
    i++;
}


let i1 = 10;
do
{
    fact = n % i1;
    console.log("Do_while loop Factorial of given number "+n+" is "+fact);
    i1++;
}while(n>i1)