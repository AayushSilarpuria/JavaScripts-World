// Array can take anytype of data: 
let marks_class_12 = [92,48,95,59,null,false,"Not Present"];
console.log(marks_class_12);
console.log(marks_class_12[0]);
console.log(marks_class_12[5]); // index value is (length-1) of any array.
console.log("The length of class 12 th marks is : "+marks_class_12.length);

marks_class_12[0] = 99;
marks_class_12[5] = 'True';
console.log(marks_class_12);

// Array are mutable, array can be changed.
// Strings are immutable, strings cannot be changed.

console.log(typeof marks_class_12);


for(i=0;i<marks_class_12.length;i++)
{
    console.log("Current Array at position: "+i+" and value is : "+marks_class_12[i]);
}