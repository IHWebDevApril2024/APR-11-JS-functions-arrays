console.log("Returns js is working");
/* 
function returnMyName(firstPlayer, secondPlayer) {
    if (!secondPlayer) {
      secondPlayer = "Machine";
    }
  console.log(`${firstPlayer} VS ${secondPlayer}!`);
}

const player1Input = prompt("What's the name of the first player?");
let player2Input = prompt("What's the name of the second player?");

returnMyName(player1Input); */

function capitalize(name){
    const welcomeMessage = "Hello! Happy to have you here "
    
    return welcomeMessage + name.toUpperCase()
    console.log("adsadsadsadsadsa"); // this code won't run
}


const theName = capitalize("Marcel"); // MARCEL
const secondName = capitalize("marina")

console.log(theName);
console.log(secondName);