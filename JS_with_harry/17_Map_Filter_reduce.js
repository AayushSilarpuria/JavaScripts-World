// Map()

let arr = [45, 33, 76];
let a = arr.map((value, index, array)=>{
    console.log(value, index, array);
    return value + 1;   // also can do : (return value + index)
})
console.log(a); // map can assign function value to new variable, that is why it is different form for_each.

// filter()

let arr2 = [1,2,33,44,5,67,7,90];
let ab = arr2.filter((val)=>{
    return val < 10;
})
console.log(ab); // these map, filter does not change the value of orignal array.

// reduce()

let arr3 = [1, 2, 3, 4, 5, 6];
let abc = arr3.reduce((a1, a2)=>{
    return a1 + a2;
})
console.log(abc);


// Different method:
const reduc_func = (h1, h2)=>{
    return h1+h2;
}
let abc2 = arr3.reduce(reduc_func);
console.log(abc2);

