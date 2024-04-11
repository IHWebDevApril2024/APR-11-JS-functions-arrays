// ARRAYS

["Hello", 3242, [123, 21332], { hello: "world" }]; // can contain multiple data types

const myArray = [1, 2, 3, 4, 5];

console.log(myArray);

const students = [
  "John",
  "Jane",
  "Michael",
  "Emily",
  "David",
  "Sarah",
  "Daniel",
  "Olivia",
  "Matthew",
  "Sophia",
];

console.log(students[3]); // select an elemnt of the array with an specific index

console.log(students);
console.log(`The position for Olivia is: ${students.indexOf("Olivia")}`);

// CRAZY STUFF YOU TOLD ME TO DO 😅
const indexOfMatthew = students.indexOf("Matthew")
const lengthMinusOne = students[indexOfMatthew].length - 1
console.log(students[indexOfMatthew][lengthMinusOne]);
