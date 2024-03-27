// Fibonacci series: 

// The Fibonacci numbers are the numbers in integer sequence: 
// 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144,...

function fib(n)
{
    const fib_list = [0,1];

    for(i=2; i<= n; i++){
        fib_list.push(fib_list[i-1] + fib_list[i-2]);
    }

    //return fib_list;
    return fib_list[n];
}

console.log(fib(3));


// Another Method:

const fibon = function (n){
    if(n <= 1) return n;
    
    return fibon(n-2) + fibon(n-1);

};

console.log(fibon(3));

