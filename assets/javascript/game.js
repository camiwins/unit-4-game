// *** GLOBAL VARIABLES
// *************************************

// Variables for all the crystals
var crystal = {
    water:
    {
        name: "Water",
        value: 0
    },
    fire:
    {
        name: "Fire",
        value: 0
    },
    leaf:
    {
        name: "Leaf",
        value: 0
    },
    sun:
    {
        name: "Sun",
        value: 0
    },
};

// Variables to keep track of the current score and target score
var currentScore = 0;
var targetScore = 0;
// Variables to keep track of wins and losses
var win = 0;
var loss = 0;

// *** GLOBAL FUNCTIONS
// *************************************

// Function to generate random numbers
var randomNumber = function (min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to start the game at the beginning
var gameStart = function (){
    // Reset current score
    currentScore = 0;
    // A target score is set between 19-20
    targetScore = randomNumber(19, 120);
    // Randomly generate different values for each crystal
    crystal.water.value = randomNumber(1,    12);
    crystal.fire.value = randomNumber(1, 12);
    crystal.leaf.value = randomNumber(1, 12);
    crystal.sun.value = randomNumber(1, 12);
    // Display all these changes to the HTML page
    $("#yourScore").html(currentScore);
    $("#targetScore").html(targetScore);
}

//  Function for updating the currents core
var addValues = function(crystal) {
    // Adds value of crystal to current score
    currentScore = currentScore + crystal.value;
    // Display this current score in HTML
    $("#yourScore").html(currentScore);
    // Checks to see if current score matches target score
    checkScore();

}

// Function to check if user wins, then reset the game
var checkScore = function() {
    // If current score is larger than target score
    if (currentScore > targetScore) {
        // Notify user of loss
        alert("You lose.")
        // Add one to loss count
        loss++
        // Display on HTML page
        $("#loss").html(loss);
        // Restart game
        gameStart();
    }
    // If current score is equal to target score
    else if (currentScore == targetScore) {
        //Notify user of win
        alert("You win.")
        // Add one to win count
        win++
        // Display on HTML page
        $("#win").html(win);
        // Restart game
        gameStart();
    }
}

// *** CALLED FUNCTIONS
// *************************************

// Function to set the start of the game
gameStart();

// When crystals are clicked...

$("#water").click(function() {
    addValues(crystal.water);
});

$("#fire").click(function() {
    addValues(crystal.fire);
});

$("#leaf").click(function() {
    addValues(crystal.leaf);
});

$("#sun").click(function() {
    addValues(crystal.sun);
});