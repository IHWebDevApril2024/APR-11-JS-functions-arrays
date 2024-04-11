const animals = [
  "dog",
  "cat",
  "elephant",
  "lion",
  "tiger",
  "bear",
  "monkey",
  "giraffe",
  "zebra",
  "hippo",
  "rhino",
  "kangaroo",
  "koala",
  "panda",
  "wolf",
  "fox",
  "deer",
  "rabbit",
  "horse",
  "cow",
  "sheep",
  "goat",
  "pig",
  "chicken",
  "duck",
  "turkey",
  "peacock",
  "parrot",
  "eagle",
  "owl",
  "penguin",
  "dolphin",
  "whale",
  "shark",
  "octopus",
  "jellyfish",
  "turtle",
  "crocodile",
  "snake",
  "spider",
];

// PUSH: Add an elment at the end of the array

animals.push("unicorn");

// UNSHIFT: Add the new element at the begging

animals.unshift("🍔");

console.log(animals);

console.log(animals.indexOf("🍔"));
// SHIFT: removes the first element
animals.shift();

// POP: Removes the last element

animals.pop();
console.log(animals);

// SPLICE: Removes selected elements

animals.splice(0, 3); // We delete 3 elements starting at index 0

console.log(animals);

animals.splice(1, 1, "ant"); // now it's deleting the second element and adding "ant"

console.log(animals);

animals.splice(1, 0, "TIGER", "ABITERSASDA");
console.log(animals);

// Can we sum more than one array??

// YEEEES With JS everything is possible

const array1 = ["John", "Jane", "Mike", "Sarah"];

const array2 = ["Tom", "Emily", "David", "Olivia", "Daniel", "Sophia"];

const array3 = ["Alice", "Bob", "Charlie", "Eve", "Frank"];

const array4 = array1.concat(array2, array3);


console.log(array4);

/* for(let i = 0; i<array4.length; i++){
    console.log(array4[i]);
}

for(const name of array4){
    console.log(name);
} */

// forEach method works only with arrays

array4.forEach(function(eachName){ // anonymous function
    console.log(eachName);
})

// A CALLBACK FUNCTION is a FUNCTION passed as an ARGUMENT

// SPLIT
const phrase = "is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";

const arrayOfWords = phrase.split(" ");

console.log(arrayOfWords);

