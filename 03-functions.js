console.log("functions JS running!");

// DECLARE A FUNCTION. We define what the function is going to do.
// Is not running untill we CAll it
function myFirstFunction(){
    console.log("Hello function");
}

// FUNCTION INVOCATION
myFirstFunction(); // it runs when we add the name of the function and the parenthesis

// PARAMETERS

function sum(firstNumber, secondNumber){ // parameters are like variables
    
    console.log(Number(firstNumber) + Number(secondNumber));
}


// ARGUMENTS are actual values

sum(2,2);
sum(3,4);


// PROMPTS
const firstInput = prompt("INPUT YOUR FIRST NUMBER");
const secondInput = prompt("INPUT YOUR SCOND NUMBER");

sum(firstInput, secondInput);