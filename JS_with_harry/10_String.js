let names = "Ayush";
console.log("Length of name: "+names.length);
console.log(names[0]);
console.log(names[1]);

let friends = 'Prashant';
console.log(friends);

// Template literals
let boy1 = "Pramod"
let boy2 = "Nikhil"

let sentence = `boy1 is a friend of boy2`;
console.log(sentence);

//String  Interpolation: 
let sentence2 = `${boy1} is a friend of ${boy2}`;
console.log(sentence2);


//Escape Sequence Character:
let fruit = 'Bana\'na';
console.log(fruit);
console.log(fruit.length);

let fruit2 = 'app\"le'; // or can write like; "app\"le"
console.log(fruit2);
console.log(fruit2.length);

// \n : new line
let fruit3 = 'Bana\nna';
console.log(fruit3);

// \t : new tab
let fruit5 = 'app\tle';
console.log(fruit5);

// \r : Carrige Return; it take the cursor at starting of line write ir over.
let fruit6 = 'Bana\rna';
console.log(fruit6);