//1.
// Operator and conditionals:

//const prompt = require('prompt-sync')();
/*
let age = prompt("What is your age?");
age = Number.parseInt(age)
if(age>10 && age<20)
{
    console.log("The age is between 10 and 20.");
}
else
{
    console.log("Out of range.")
}
*/

//2. 
/*
let text;
switch(new Date().getDay())
{
    case 1:
        text = "Today is Saturday";
        break;
    case 2: 
        text = "Today is Sunday";
        break;
    default:
        text = "Looking forward to weekend";

}
*/

/*
let age = prompt("what is your age: ");
switch(age){

    case '12':
        console.log("Your age is 12.");
        break;        
    case '13':
        console.log("Your age is 13.");
        break;
    case '14':
        console.log("Your age is 14.");
        break;
    default : 
        console.log("Your age is more then 14.");

}
*/

//Q-3:

const prompt = require('prompt-sync')();
/*
let divi = prompt("provide the number for check: ");
num = Number.parseInt(divi);
if(num%2==0 && num%3==0))
{
    console.log("The Number is divisible by 2 and 3.");
}
else
{
    console.log("The provided num is not divisible by 2 & 3.");
}
*/

//Q-4:

/*
let divi = prompt("provide the number for check: ");
num = Number.parseInt(divi);
if(num % 2 == 0 || num % 3 == 0)
{
    console.log("The Number is divisible by 2 and 3.");
}
else
{
    console.log("The provided num is not divisible by 2 & 3.");
}
*/

//Q-5:
let age = prompt("what is your age? : ");
let a = age>18 ? "You can drive." : "You cannot drive.";
console.log(a);