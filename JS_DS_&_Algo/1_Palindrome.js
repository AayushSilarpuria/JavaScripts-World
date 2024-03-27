// Palindrome: 

// input: 121  -------> true
// input: 21 --------> false

var ispalindrome = function (x){
    return x === +x.toString().split("").reverse().join("");
};

console.log(ispalindrome(12321));

// .split cannot split number only split string.
// .reverse cannot reverse single string and number.


// Another way without methods:

function ispal(str){
    let rev = "";

    for(i=str.length-1; i>=0;  i--)
    {
        rev += str[i];
    }
    if(str == rev){
        return true;
    }
    else{
        return false;
    }
}

console.log(ispal("ayuya"));
console.log(ispal("121"));