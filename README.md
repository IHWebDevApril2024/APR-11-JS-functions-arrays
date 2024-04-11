# Functions and arrays
## Functions
### Function declaration vs function invocation
A funtion declaration is a statement that defines a function. It consists of the function keyword, followed by the name of the function.
```javascript
function myFunction() {
  // code to be executed
}
```
A function invocation is when you call a function. You can call a function by using the function name followed by parentheses.
```javascript
myFunction();
```

### Function parameters
Function parameters are the names listed in the function definition. They are used to pass values to the function. 
```javascript
function myFunction(param1, param2) { // param1 and param2 are parameters
  // code to be executed
}
```
### Function arguments
Function arguments are the real values passed to the function. They are the values received by the function when it is invoked.
```javascript
myFunction(12, 30); // the values 12 and 30 are arguments
```

### Function return
The return statement ends the function execution and specifies the value to be returned by that function.
```javascript
function multiply(a, b) {
  return a * b; // the function returns the product of a and b
}
```

### Callback functions
A callback function is a function passed into another function as an argument. We'll review this concept in more detail in the next days.

## Arrays
### Array declaration
An array is a special variable that can hold more than one value.
```javascript
let fruits = ["Apple", "Banana", "Orange"];
```

### Accessing array elements
You can access an array element by referring to the index number.
```javascript
let firstFruit = fruits[0]; // Apple
```

### Adding elements to an array
You can add elements to an array using different methods.
```javascript
fruits.push("Mango"); // Adds a new element (Mango) to fruits
fruits.unshift("Strawberry"); // Adds a new element (Strawberry) to the beginning of fruits
```

### Removing elements from an array
You can also remove elements from an array using different methods.
```javascript
fruits.pop(); // Removes the last element from fruits
fruits.shift(); // Removes the first element from fruits
fruits.splice(1, 3); // Removes 3 elements starting from index 1 
```

### Array length
The length property returns the number of elements in an array.
```javascript
let fruitsLength = fruits.length; // 3
```

### Looping through an array
You can loop through an array using different methods.
```javascript
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}

for (let fruit of fruits) {
  console.log(fruit);
}

fruits.forEach(function(fruit) {
  console.log(fruit);
});
```

### Array methods
There are many methods you can use with arrays. Some of the most common are:
- concat(): Joins two or more arrays
- indexOf(): Searches the array for an element and returns its position
- lastIndexOf(): Returns the position of the last occurrence of a specified value in an array
- includes(): Determines whether an array contains a specified element
- find(): Returns the first element in an array that passes a test