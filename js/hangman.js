
//VARIABLES
var selectedWord = "";
var selectedHint = "";
var board = [];
var remainingGuesses = 6;
var words = ["snake", "monkey", "beetle"];

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

//Selects a random word for a game of hangman
function pickWord() {
    var randomInt = Math.floor(Math.random() * words.length);
    selectedWord = words[randomInt];
}

//Begins a game of hangman
function startGame() {
    pickWord()
    initBoard()
    updateBoard()
}


console.log(words[0]);
initBoard();