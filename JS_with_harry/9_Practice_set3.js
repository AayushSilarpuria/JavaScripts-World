//1. Print marks of students by using for loop.

let obj = {
    ayu: 89,
    pri: 99,
    pras:78
}

for(i=0;i<Object.keys(obj).length;i++)
{
    console.log("1. Them marks of student "+Object.keys(obj)[i]+" is "+obj[Object.keys(obj)[i]]);
}

//2. Write 1. question in for_in format.
for(let k in obj)
{
    console.log("2. The marks of Student "+k+" is "+obj[k]);
}

//3. Enter correct number.

const prompt = require("prompt-sync")();

let cn = 3;
let i1
while(i1 != cn)
{
    i1 = prompt("Enter Correct Number: ");
}
console.log("You have entered a correct number.");


//4. Mean of 5 number.

function me(p,q,r,s,t)
{
    return (p+q+r+s+t)/5;
}

let a = 1;
let b = 2;
let c = 3;
let d = 4;
let e = 5;

console.log("Mean value of 5 numbers are "+me(a,b,c,d,e));


const mean = (a,b,c,d,e) => {
    return (a+b+c+d+e)/5
}

console.log("The mean value of 5 numbers are "+mean(1,2,3,4,5));