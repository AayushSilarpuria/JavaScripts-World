// 1. Adding num to array:

let arr = [1,20,3,40,5,60,7,8,99];
/*

const  prompt = require('prompt-sync')();
let input1 = prompt("Enter the number to add in array: ");
a = Number.parseInt(input1);
arr.push(a);
console.log(arr);
*/

// 2. keep adding number to array until 0 comes:

/*
do{
    let input2 = prompt("Enter number to add: ");
    a1 = Number.parseInt(input2);
    arr.push(a1);
}while( a1 != 0)

console.log(arr);
*/

// 3. filter for number divisible by 10.

let ab = arr.filter((val)=>{
    return val % 10 == 0;
})
console.log(ab);

// 4. Create an array of square of given numbers.
/*
count = 5;
arr12 = [];

do{
    let input3 = prompt("Enter number to create square: ");
    let inp = Number.parseInt(input3);
    arr12.push(inp);
    
}while(arr12.length < count)


let abc = arr12.map((m)=>{
    return m*m;
})
console.log(abc);
*/

// 5. factorial of 1st nth number.
let abcd = arr.reduce((a1, a2)=>{
    return a1*a2 ;
})
console.log(abcd);


// Factorial program:


function fact1(n)
{
    
    if(n<0)
    {
        return "Number is negative, enter positive number.";
    }
    else if(n === 0 || n === 1)
    {
        return 1;
    }
    else
    {
        let ans = 1;
        for(i1=2; i1<=n; i1++)
        {
            ans *=  i1;
        }
        return ans;
    }
}

let arr14 = [1,2,8,3,6]
for(let i1=0; i1<arr14.length; i1++ )
{
    let n11= arr14[i1];
    answer1 = fact1(n11);
    console.log("Factorial of "+arr14[i1]+" is "+answer1);
    
}