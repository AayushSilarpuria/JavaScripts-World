// 1. Factorial program:

function fact(n) {
    if (n < 0) {
        return "Number is negative, enter a positive number.";
    } else if (n === 0 || n === 1) {
        return 1;
    } else {
        let ans = 1;
        for (let i = 2; i <= n; i++) {
            ans *= i;
        }
        return ans;
    }
}

let arr4 = [1, 2, 8, 3, 6];
for (let i = 0; i < arr4.length; i++) {
    let n1 = arr4[i];
    console.log("Factorial of " + n1 + " is " + fact(n1));
}



// 2. Factorial program:

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