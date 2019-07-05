
//VARIABLES
var selectedWord = "";
var selectedHint = "";
var board = [];
var remainingGuesses = 6;
var words = ["snake", "monkey", "beetle"];
var alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L',
                'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X',
                'Y', 'Z']

//LISTENERS
window.onload = startGame()

//FUNCTIONS
//Fill the board with underscores
function initBoard() {
    for (var letter in selectedWord) {
        board.push("_");
    }
}

//Redraws the board to show current guesses
function updateBoard() {
    for (var letter of board) {
        document.getElementById("word").innerHTML += letter + " ";
    }
}

//Creates the letter buttons for user input
function createLetters() {
    for (var letter of alphabet) {
        $('#letters').append("<button> class='letter' id='" + letter + "'>" + letter + "</button>");
    }
}

//Event handler for user letter input buttons
$('.letter').click(function(){
    console.log($(this).attr("id"));
})

//Selects a random word for a game of hangman
function pickWord() {
    var randomInt = Math.floor(Math.random() * words.length);
    selectedWord = words[randomInt].toUpperCase();
}

//Checks to see if the selected letter exists in the selectedWord
function checkLetter(letter) {
    var positions = new Array();

    //Put all the positions the letter exists in an array
    for (var i = 0; i < selectedWord.length; i++) {
        console.log(selectedWord)
        if (letter == selectedWord[i]) {
            positions.push(i);
        }
    }
}

//Begins a game of hangman
function startGame() {
    pickWord();
    initBoard();
    updateBoard();
    createLetters();
}


console.log(words[0]);
initBoard();