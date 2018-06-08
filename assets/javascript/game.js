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
    artist: ["michaeljackson", "prince", "madonna", "rundmc", "vanhalen", "publicenemy", "billyjoel", "thepolice"],
    errorimages: ['assets/images/error-0','assets/images/error-1' ],
    lossCount: 0,
    incorrectGuess: [],
    initialCharacters: [],
    maxGuess: 10,
    accurate: false,
    wins: 0,
    loss: 0,


};





function reLoad() {
    game.initialCharacters = [];
    game.maxGuess = 10;
    game.incorrectGuess = [];
    game.errorimages = [0];
    game.lossCount = 0;
    randomSelection = game.artist[Math.floor(Math.random() * game.artist.length)];
    console.log("test:" + randomSelection)

    for (var i = 0; i < randomSelection.length; i++) {
        game.initialCharacters.push(" _ ");
        // game.currentGuess.push(randomSelection[i]);
    };
   


};
// function to start over
function reset() {
    game.wins = 0;
    game.loss = 0;
};



// function to update all my html elements 

function updateAll() {
    document.querySelector(".winamount").innerHTML = game.wins;
    document.querySelector(".lossamount").innerHTML = game.loss;
    document.querySelector(".maxguess").innerHTML = game.maxGuess;
    document.querySelector('.guess').innerHTML = game.initialCharacters.join(" ");
    document.querySelector('.incorrect').innerHTML = game.incorrectGuess;
    // document.querySelector('.image').appendChild(img) = game.errorimages;
}



// Randomly select an artist from the list of artist 
// var randomSelection = game.artist[Math.floor(Math.random() * game.artist.length)]

// Loop through the radomly selected artist 
// for (var i = 0; i < randomSelection.length; i++) {
//  Set the initial characters based on the randomly selected artist
// game.initialCharacters.push(" _ ");

// store each character of the randomly selected artist in the currentGuess array
// game.currentGuess.push(randomSelection[i]);

// }


// function to write the maximum guesses to the html page 



// Detect user selection 
document.onkeyup = function () {
    choice = event.key.toLowerCase();
    console.log("you choice: " + randomSelection)
    // restrict to only letters 
   
    if (event.keyCode >= 65 && event.keyCode <= 90) {
       
    //    var errorimages = ["assets/images/error-0", "assets/images/error-1"];

    //     console.log("first time image:" + errorimages[1])
    //     console.log(lossCount)
        // reset accurate variable false
        accurate = false;
        
        // for each attempt check the entered key against the current guess array
        for (var a = 0; a < randomSelection.length; a++) {
            if (randomSelection[a] === choice) {
                // if theres a match set accurate to true 
                accurate = true;
                // if match raplace the initial characters with the the entered key
                game.initialCharacters.splice(a, 1, randomSelection[a]);
                console.log("INITIAL CHARAC: " + game.initialCharacters.join(""))
                if (game.initialCharacters.join("") == randomSelection) {
                    // console.log("winner");
                    game.wins++;
                    reLoad();
                    updateAll();
                }
            }

        }
        if (accurate === false) {
            // check to see if the input has been incorrectly guessed already 
            if (game.incorrectGuess.includes(choice)) {

            }
            else {
                //  decrease guess by 1
                game.maxGuess--;
                // console.log("image: " + game.errorimages[1]); 
                game.incorrectGuess.push(choice);
                document.querySelector('.incorrect').innerHTML = game.incorrectGuess
            }
        }

        if (game.maxGuess === 0) {
            game.loss++;

            // var playAgain = confirm("Another Round?")

            // alert("game over");
            reLoad();
            updateAll();
            console.log("gameover")
        }

        if (accurate === true) {

            console.log("your choice is accurate ")
        };
        updateAll();



        // console.log("right" + game.currentGuess[a]);
        // console.log("initial charact beg: " + game.initialCharacters);
        // 
        // console.log("initial charact aft: " + game.initialCharacters);

        // maxGuess--;

        // 

        // 
        //  game.incorrectGuess.splice(a,1,game.incorrectGuess[a]);
        // console.log("inc guess: " + game.incorrectGuess)
        // doing a hack way but there has to be a better way  


    }
    else {
        alert("Select a letter")
    }



};






// WHen the window loads perform the following function 
// window.onload = function load() {

//     Update();
// };

window.onload = function () {
    reLoad();
    updateAll();

    // 
    
    var restart = document.getElementById('button');
    restart.addEventListener("click", function (){
        reset();
        reLoad();
        updateAll();
        console.log("something")
    });
    console.log("restart button: " + restart)
}


  // write the initial characters to the html page for the random selection 
    // document.querySelector('.guess').innerHTML = game.initialCharacters;

    // Flexible guess to allow the number of guesses to change based on the random selection 
    // maxGuess = Math.round(randomSelection.length * 1.65);

    // write the maximum guesses to the html page 