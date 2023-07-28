// Global variables
var lettersInRandomWord = [];
var numberBlanks = 0;
var wins = 0;
var losses = 0;
var userGuess = [];
var randomWord;

// Variables that hold references to the places in the HTML where we want to display things.
var directionsText = document.getElementById("directions-text");
var message = document.getElementById("message");
var winSound = document.getElementById("fanfare");
var loseSound = document.getElementById("trombone");
var wordBlanks = document.getElementById("word-blanks");
var wrongGuesses = document.getElementById("wrong-guesses");
var guessesLeft = document.getElementById("guesses-left");
var winCounter = document.getElementById("win-counter");
var lossCounter = document.getElementById("loss-counter");

// Random word array
var wordList = [
  "pakistan",
  "united states",
  "france",
  "spain",
  "canada",
  "india",
  "england",
  "nigeria",
  "morocco",
  "brazil",
  "argentina",
  "japan",
  "italy",
  "mexico",
  "south africa",
  "turkiye",
  "china",
  "australia",
  "new zealand",
  "paraguay"
];

// CREATE A RANDOM WORD
randomWord = wordList[Math.floor(Math.random() * wordList.length)];
console.log(randomWord);
var rightLetter = [];
var wrongLetter = [];
var spaces = [];
var guessesLeft = 9 - wrongLetter;
// The number of letters in random word:
var numLetters = 0;
// Split the randomly selected word into individual letters
lettersInRandomWord = randomWord.split("");
// Determine the number of blank spaces in the randomly selected word
numberBlanks = lettersInRandomWord.length;
console.log(numberBlanks);
// Create spaces based on number of letters in word
function createSpaces() {
  for (i = 0; i < randomWord.length; i++) {
    spaces.push(" _ ");
    // Show the correct number of spaces on the screen for the random word
    document.getElementById("word-blanks").innerHTML = spaces.join(' ');
  }
  return spaces;
}
console.log(createSpaces());

document.onkeyup = function (event) {
  console.log(event);
  // Determine which key was pressed.
  var userGuess = event.key;

  // Hide the directions
  directionsText.textContent = "";

  // CHECK THE GUESS
  if (randomWord.indexOf(userGuess) > -1) {
    for (var i = 0; i < randomWord.length; i++) {
      if (randomWord[i] === userGuess) {
        spaces[i] = userGuess;
        console.log(spaces);
        // rightLetter.push(userGuess);
        console.log(rightLetter);
        // Populate the game (spaces) with the correctly guessed letter
        document.getElementById("word-blanks").innerHTML = spaces.join("");
      }
    }
    console.log(randomWord.split(""));
    console.log(spaces);

    // CODE THAT DETERMINES WIN OR LOSS
    //correct user guess (spaces array) === random word (randomWord is a string, so in order for it to be an array so that it's equal to correct user guess, also an array, we use split - join turns an array into a string)
    var matched = true;
    for (i = 0; i < spaces.length; i++) {
      if (spaces[i] !== (randomWord.split(""))[i]) {
        matched = false;
      }
    }
    if (matched === true) {
      console.log("You win!");
      wins++;
      document.getElementById("win-counter").innerHTML = wins;
      document.getElementById("message").innerHTML = "You win!";
      if (wins) {
        winSound.play();
      } else {
        loseSound.play();
      }
      console.log(wins);
      reset();
    }
  } else {
    // Push wrong guess into wrongLetter array
    wrongLetter.push(userGuess);
    // Show which letters were guessed incorrectly on the screen
    document.getElementById("wrong-guesses").innerHTML = wrongLetter.join(", ");
    // Decrease the number of guesses left
    guessesLeft--;
    // Update number of guesses left on the screen
    document.getElementById("guesses-left").innerHTML = guessesLeft;
    console.log(guessesLeft);
    console.log(wrongLetter);

    if (guessesLeft === 0) {
      console.log("Sorry, you lose.");
      losses++;
      document.getElementById("loss-counter").innerHTML = losses;
      document.getElementById("message").innerHTML = "Sorry, you lose.";
      if (losses) {
        loseSound.play();
      } else {
        winSound.play();
      }
      console.log(losses);
      reset();
    }
  }
}

// RESET THE GAME
function reset() {
  guessesLeft = 9;
  document.getElementById("guesses-left").innerHTML = guessesLeft;
  rightLetter = [];
  wrongLetter = [];
  document.getElementById("wrong-guesses").innerHTML = wrongLetter.join(", ");
  randomWord = wordList[Math.floor(Math.random() * wordList.length)];
  console.log(randomWord);
  lettersInRandomWord = randomWord.split("");
  numberBlanks = lettersInRandomWord.length;
  spaces = [];
  createSpaces();
  return spaces;
}