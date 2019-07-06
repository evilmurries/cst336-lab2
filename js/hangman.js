
//VARIABLES
var selectedWord = "";
var selectedHint = "";
var board = [];
var remainingGuesses = 6;
var words = [{word: "snake", hint: "It's a reptile"},
             {word: "monkey", hint: "It's a mammal"},
             {word: "beetle", hint: "It's an insect"}];
var alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L',
                'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X',
                'Y', 'Z']

//LISTENERS
window.onload = startGame()

//FUNCTIONS
//Fill the board with underscores
function initBoard() {
    //alert(selectedWord);
    for (var letter in selectedWord) {
        board.push("_");
    }
    updateMan();
}

//Initializes the hint button
function initHints() {
    $("#hintArea").append("<br />");
    $("#hintArea").append("<button class='hintBtn'>Press For A Hint</button>");
}

//Changes the hint button to hint text
function updateHints() {
    $("#hintArea").empty();
    $("#hintArea").append("<br />");
    $("#hintArea").append("<span class='hint'>Hint: " + selectedHint + "</span>");
}

//Redraws the board to show current guesses
function updateBoard() {
    updateMan();
    $("#word").empty();

    for (var i = 0; i < board.length; i++) {
        $("#word").append(board[i] + " ");
    }
    updateMan();
}

//Creates the letter buttons for user input
function createLetters() {
    for (var letter of alphabet) {
        $("#letters").append("<button class='letter' id='" + letter + "'>" + letter + "</button>");
    }
}

//Updates the image of the hangman
function updateMan() {
    $("#hangImg").attr("src", "img/stick_" + String((6 - remainingGuesses)) + ".png");
}

//Event handler for user letter input buttons
$('.letter').click(function(){
    checkLetter($(this).attr("id"));
    disableButton($(this));
})

//Event handler for the replay buttons
$(".replayBtn").on("click", function() {
    location.reload();
})

//Displays a hint at the cost of one guess
$(".hintBtn").on("click", function() {
    remainingGuesses -= 1;
    updateHints();
    updateMan();
    updateBoard();
})

//Changes the board to reflect the end of the game
function endGame(win) {
    $("letters").hide();

    if (win) {
        $("#won").show();
    } else {
        $("#lost").show();
    }
}

//Disables the button and changes the style to tell the user that it's disabled
function disableButton(btn) {
    btn.prop("disabled", true);
    btn.attr("class", "btn btn-danger");
}

//Selects a random word for a game of hangman
function pickWord() {
    var randomInt = Math.floor(Math.random() * words.length);
    selectedWord = words[randomInt].word.toUpperCase();
    selectedHint = words[randomInt].hint;
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

    if (positions.length > 0) {
        updateWord(positions, letter);

        //Check to see if this is the winning guess
        if (!board.includes("_")) {
            endGame(true);
        }
    } else {
        remainingGuesses -= 1;
        updateMan();
    }

    if (remainingGuesses <= 0) {
        endGame(false);
    }
}

function updateWord(positions, letter) {
    for (var pos of positions) {
        board[pos] = letter;
    }
    updateBoard();
}

//Begins a game of hangman
function startGame() {
    pickWord();
    initBoard();
    initHints();
    createLetters();
    console.log(selectedWord);
    updateBoard();
}
