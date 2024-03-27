// 1+average of 2 numbers:

function oneaverage(x,y)
{
    console.log("Done");
    return Math.round(1 + (x+y)/2);
}

const hello = ()=>{
    console.log("Hey How are you. I am fine yaar.");
}

const sum = (p,q)=>{
    return p+q;
}

let a = 2;
let b = 8;
let c = 5;

console.log("One plus average of the number a and b is : ",1+(a+b)/2);
console.log("One plus average of the number b and c is : "+oneaverage(b,c));
console.log("One plus average of the number a and c is : "+oneaverage(a,c));
hello();
console.log(sum(a,b));

