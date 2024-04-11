console.log("For of script running!");

const names = ["Marina", "Laura", "Helena", "Martha", "Valentina"]

for (let name of names) { // it checks the length of the variable that we pass
    console.log(name);
}

const word = "This is a string";
let words = "";

for (let character of word){
    words+= character
    if(character === "g"){
        console.log(words);
        return // ends the loop
    }
    if(words === "a "){
        continue // skips the rest of the iteration for this loop
    }
    if(character === " "){
        console.log(words);
        words = "";
    }
}