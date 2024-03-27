// what will it print: 
console.log("hero\"".length);

// .includes
const sentence = 'The quick brown fox jumped over the lazy dog.';
const word = 'fox';
console.log(sentence.includes(word));
console.log(`The word "${word}" ${sentence.includes(word) ? 'is' : 'is not' } in the sentence.`);

// .startsWith
let text = "hello WorlD WelcomE To UniversE.";
console.log(text.startsWith("hello"));

// .endsWith
console.log(text.endsWith("."));

console.log(text.toLowerCase());
console.log(text.toUpperCase());

// remove 1000:
let str2 = "Please give me Rs. 1000";
let amount = str2.slice("Please give me Rs. ".length);
console.log(amount);
console.log(typeof amount);
let amount2 = Number.parseInt(str2.slice("Please give me Rs. ".length));
console.log(amount2);
console.log(typeof amount2);

// change 4th character of string: 
let str1 = 'hello Ayush';
console.log(str1.replace(str1[3], 'O'));

// The string is immutable thats why we cannot directly change the string value.
str1[3] = 'W';
console.log(str1);