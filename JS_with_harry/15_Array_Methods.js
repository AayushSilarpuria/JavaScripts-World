// 1. delete 

let num = [1,2,3,4,5,6,7];
console.log(num.length);
delete num[0];
console.log(num);
console.log(num.length); // after deleting the number the length of array remain same.

// 2. concat()

let num2 = [11,12,13,14,15,16,17];
add_num = num.concat(num2);
console.log(add_num);   // concat create new array with added (concat) value.
console.log(num, num2);

let num3 = [211,212,213,124,125,216,127]; 
add_num2 = num.concat(num2, num3); 
console.log(add_num2);

// 3. sort: 

add_num.sort();
console.log(add_num);   // sort modifies the original array and arrange it in alphabetically order.
//   [ 11, 12, 13, 14, 15, 16, 17, 2, 3, 4, 5, 6, 7, <1 empty item> ]
// like here all the number with 1 come first then 2 then it goes on .

// to use sort for assending and decending order we have to create function.

let compare =(a,b) =>{
    return a-b // for ascending order (small to big) & (b-a) for decending order(big to small).
}
add_num.sort(compare);
console.log(add_num);

// 4. reverse
add_num.reverse();
console.log(add_num);

// 5. splice
console.log(add_num2);
add_num2.splice(2,2 ,1022,1023,1024,1025);  // It  take index value, take remove number of item,  then take item to add 
console.log(add_num2);  // ("index value", "number of item remove", "and item that added at removed item place")
// it modify the array.

deleted_item = num3.splice(2, 2 , 1022,1023,1024,1025);
console.log(num3);
console.log(deleted_item);

// 6. slice

//it doesn't modify the array.
console.log(num2);

let slice_num2 = num2.slice(2) // it remove the item before index value 2.
console.log(slice_num2);

let slice_num_2 = num.slice(2,4);  // it remove the item from index value: 2 to before index value: 4
console.log(slice_num_2);

