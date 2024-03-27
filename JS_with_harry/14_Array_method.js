//Array Methods:

// 1. toStirng()
let num = [1,2,4,5,6,7,9];
let str = num.toString(); //b is now a string.
console.log(str, typeof str);

// 2. join()
let str1 = num.join("  and  ");
console.log(str1, typeof str1);

// 3. pop()    // remove from at end of array.
let str2 = num.pop();
console.log(num, str2);

// 4. push()   // add at the end of array.
let str3 = num.push(99);
console.log(str3, num);

// 5. shift()       // remove from start of array.
let str4 = num.shift();
console.log(num, str4);

// 6. unshift()    // add at start at array.
let str5 = num.unshift(78);
console.log(num, str5);

// 7. delete() 
let str6 = delete num[0];
console.log(num, str6);
