// Need to know what to guess from list of shows 
// Capture user guesses 
// If the user guessed a letter correctly then 
// add letter to to the corresponding location within the word 
// and add to list of guessed letters 
// and chances to finish the word drop by 1 
// if the user guesses incorrectly then 
// chances reduces by 1 
// and add to list of guessed letters 
// user cannot guess more than twice the amount of letters in a word 
// if the user guesses the entire word then
// wins go up by 1
//  and add another word to be guessed but mask it until it has been guessed 
// repeat the guessing rules above for the new word added 
// to guess a letter - we can look at each character in the word and see if it matches the user input
// need a list of words that can be guessed 
// each word has a corresponding album art 
// each word has a corresponding sound 


var game = {
    artist: ["michaeljackson", "prince", "madonna","u2", "rundmc", "vanhalen", "publicenemy", "billyjoel", "thepolice"],
    guessedLetters: [],
    correctGuess: [],
    incorrectGuess: [],
    initialCharacters: [],
    currentGuess: [],
    maxGuess: 0,
    acceptableChoice: "abcdefghijklmnopqrstu"
    

}
// Randomly select an artist from the list of artist 
var randomSelection = game.artist[Math.floor(Math.random() * game.artist.length)]

// Loop through the radomly selected artist 
 for (var i = 0; i < randomSelection.length; i++) {
    //  Set the initial characters based on the randomly selected artist
    game.initialCharacters.push(" _ ");

    // store each character of the randomly selected artist in the currentGuess array
    game.currentGuess.push(randomSelection[i]);
    
}
console.log(game.artist)
console.log("Random Selection is: " + randomSelection)
console.log(randomSelection.length)
console.log(game.currentGuess)

// function to write the maximum guesses to the html page 
function Update () {
    document.querySelector(".maxguess").innerHTML = maxGuess;
    document.querySelector('.guess').innerHTML = game.initialCharacters.join(" ");
};

// WHen the window loads perform the following function 
window.onload = function load (){
    // write the initial characters to the html page for the random selection 
    // document.querySelector('.guess').innerHTML = game.initialCharacters;

// Flexible guess to allow the number of guesses to change based on the random selection 
    maxGuess = Math.round(randomSelection.length * 1.65);

// write the maximum guesses to the html page 
    Update();
};


// Detect user selection 
document.onkeyup = function(){
    choice = event.key.toLowerCase();

    // restrict to only letters 
    if (event.keyCode >= 65 && event.keyCode <=90) {
        // for each attempt check against the current guess array
        
        for (var a = 0; a < randomSelection.length; a++) {
            if (randomSelection[a] === choice){
                // console.log("right" + game.currentGuess[a]);
                // console.log("initial charact beg: " + game.initialCharacters);
                game.initialCharacters.splice(a,1, randomSelection[a]);
                // console.log("initial charact aft: " + game.initialCharacters);

                maxGuess--;

                Update();
            }
            else {
                game.incorrectGuess.push(choice);
                //  game.incorrectGuess.splice(a,1,game.incorrectGuess[a]);
                console.log("inc guess: " + game.incorrectGuess)
                // doing a hack way but there has to be a better way
            }
   
        }
        
    }
    else {
        alert("Select a letter")
    }
   

    console.log(choice)
    console.log(event.keyCode)

}




