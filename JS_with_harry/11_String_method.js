let names = "Ayus\"h";
console.log(names.length);
console.log(names.toUpperCase());
console.log(names.toLowerCase());

// Indexing is used in slice
let friend = "Prashant";
console.log(friend.slice(2,6));
//from index value 2 to index value 5 is print.  
//(start, stop) but position at stop is not print.
console.log(friend.slice(2)); // it print all value after 2 index value.

let name1 = "Ayush Bhai";
let newname = name1.replace("Bhai", "Bhau");
console.log("Replace of old name \""+name1+"\" to new name \""+newname+"\".");

// concat method:
console.log(name1.concat(" is a friend of ", friend ," ok"));

// trim method:
let friend2 = "      MeraBhai       ";
console.log(friend2.trim());

// For loop to print the string: 

for(i=0; i<name1.length; i++)
{
    console.log(name1[i]);
}

// Concatenation:
let name2 = "Ayush " + "Silarpuria";
console.log(name2);
