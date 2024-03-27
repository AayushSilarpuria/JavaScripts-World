// for loop 
let num = [11,12,13,14,15,16];

for(let i=0;i<num.length;i++)
{
    console.log(num[i]);
}

console.log();
// for Each loop

num.forEach((ele) =>{
    console.log(ele * ele);
})

// Array.from
let nam = "Ayush";
let arr = Array.from(nam);
console.log(arr);

// for of 

for(let i of num)
{
    console.log(i);
}

// for in 

for(let it in num)
{
    console.log(num[it]);
}

