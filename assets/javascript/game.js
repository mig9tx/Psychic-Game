//create an array of letters
let compChoice = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
//console.log(compChoice[5]);
var wins = 0;
var losses = 0;
var guessLeft = 10;
var guessTotal = "";

//create variables to hold the values for the HTML elements to be displayed
var instructionsText = document.getElementById("instructions-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var guessesLeft = document.getElementById("guessleft-text");
var guessText = document.getElementById("guess-text");


//user inputs key as his first guess, save into a variable

document.onkeyup = function (event) {
    var userGuess = event.key;
    guessTotal = guessTotal + userGuess + ", ";
    // var event = guessTotal.push(event)
    console.log(guessTotal);
    //computer selects a letter from the array randomly based on the length of the array.
    var compLetter = compChoice[Math.floor(Math.random() * compChoice.length)];

    //save input and compare to compChoice
    if (userGuess === compLetter){
        wins++;
        guessLeft=10;
        guessTotal = "";
    }else if(userGuess !== compLetter){
        guessLeft--;
        // losses++;
    }if (guessLeft <= 0){
        losses++;
        guessLeft = 10;
        guessTotal = "";
}



//hides the instructions
// instructionsText.textContent = "";

//displays variable values to the browser window along with text
document.getElementById("guess-text").innerHTML = "You chose: " + guessTotal;
document.getElementById("guessleft-text").innerHTML = "Guesses left: " + guessLeft;
document.getElementById("wins-text").innerHTML = "Wins: " + wins;
document.getElementById("losses-text").innerHTML = "Losses: " + losses;

}



