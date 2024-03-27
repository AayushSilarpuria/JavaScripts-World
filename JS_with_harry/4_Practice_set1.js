//1. Create a variable of type string and try to add number to it.
let names = "Ayush";
let numberss = 1;
console.log(names+numberss)

console.log()

//2.
console.log(typeof names)
console.log(typeof numberss)
console.log(typeof (names+numberss))

console.log()

//3.
const a = {
    name : "Ayush",
    section : 1
}
//a = 66
// No it cannot possible to attach new number to const.

//4. 
const a1 = {
    name1 : "Ayush",
    section : 1
}
console.log(a1)
a1['name1'] = "Aayu"
a1['friend'] = "Prashant"
console.log(a1)

console.log()

//5. Word_Meaning Dictionary:
const Dic = {
    denouement : "he final resolution of the intricacies of a plot, as of a drama or novel.",
    esculent : "suitable for use as food",
    kismet : "fate; destiny",
    whoosis : "an object or person whose name is not known or cannot be recalled.",
    sycophant : "a self-seeking, servile flatterer."
}
console.log(Dic.denouement)
console.log(Dic['kismet'])