// Callback functions

const arrayOfUsers = ['Marina', 'Laura', 'Oriol', 'Mónica', 'Mica', 'Valentina', 'Hel·lena'];

function sayHello(user) {
  console.log(`Hello, ${user}!`);
};

/* for (let i = 0; i < arrayOfUsers.length; i++) {
   sayHello(arrayOfUsers[i]);
} */

// arrayOfUsers.forEach(sayHello)

arrayOfUsers[7] = "Arnaldo"// This is possible

console.log(arrayOfUsers);

