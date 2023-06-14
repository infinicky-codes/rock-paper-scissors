game();

// Function that plays 5 rounds of Rock Paper Scissors
function game() {
    // keep track of the round number
    let round = 1;
    // keep track of the player's score
    let playerScore = 0;
    // keep track of the computer's score
    let computerScore = 0;
    
    // play 5 rounds
    while (round <= 5) {        
        // get the player's choice
        let playerSelection = prompt("Rock, paper, or scissors?");
        // get the computer's choice
        let computerSelection = getComputerChoice();
        
        // play a round and log the result
        console.log(playRound(playerSelection, computerSelection));
        round++;
    }

    // determine the winner
    if (playerScore > computerScore) {
        console.log("You win!");
    }
    else if (playerScore < computerScore) {
        console.log("You lose!");
    }
    else {
        console.log("It's a tie!");
    }
}

// Single round of Rock Paper Scissors
function playRound(playerSelection, computerSelection) {
    // make playerSelection and computerSelection case insensitive
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    let playerWins = false;

    // if the player and computer choose the same thing, it's a tie
    if (playerSelection === computerSelection) {
        return "It's a tie!";
    }
    
    // rock beats scissors
    switch (playerSelection) {
        case "rock":
            if (computerSelection === "scissors") {
                playerWins = true;
            }
            else {
                playerWins = false;
            }
            break;
        // paper beats rock
        case "paper":
            if (computerSelection === "rock") {
                playerWins = true;
            }
            else {
                playerWins = false;
            }
            break;
        // scissors beat paper
        case "scissors":
            if (computerSelection === "paper") {
                playerWins = true;
            }
            else {
                playerWins = false;
            }
            break;            
    }

    // capitalize the first letter of the selections
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
    computerSelection = computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1);

    // return the result of the round
    if (playerWins) {
        return "You win! " + playerSelection + " beats " + computerSelection;
    }
    else {
        return "You lose! " + computerSelection + " beats " + playerSelection;
    }
}


// Function that returns either ‘Rock’, ‘Paper’ or ‘Scissors’
function getComputerChoice() {
    // get a random number between 0 and 2
    let randomNumber = Math.floor(Math.random() * 3);
    // return the computer's choice
    switch (randomNumber) {
        // if the number is 0, return Rock
        case 0:
            return "Rock";
        // if the number is 1, return Paper
        case 1:
            return "Paper";
        // if the number is 2, return Scissors
        case 2:
            return "Scissors";
    }
}
