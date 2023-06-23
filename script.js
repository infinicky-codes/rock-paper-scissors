// Keep track of the player's score
let playerScore = 0;
// Keep track of the computer's score
let computerScore = 0;

// Wait for the player to choose something
getSelections();

// Function that plays 5 rounds of Rock Paper Scissors
function game() {
    // keep track of the round number
    let round = 1;

    // play 5 rounds
    // while (round <= 5) {        
    //     // get the computer's choice
    //     let computerSelection = getComputerSelection();
    //     // play a round and log the result
    //     console.log(playRound(playerSelection, computerSelection));
    //     round++;
    // }

    // determine the winner
    console.log("Final round played. Determining the winner...");
    if (playerScore > computerScore) {
        console.log("You win! You beat the computer by " + (playerScore - computerScore) + " points.");
    }
    else if (playerScore < computerScore) {
        console.log("You lose by " + (computerScore - playerScore) + " points.");
        console.log("Better luck next time!");
    }
    else {
        console.log("It's a tie! You both have " + playerScore + " points.");
    }
}

// Get player and Computer selections 
function getSelections() {
    let selection = '';

    const rockChoice = document.querySelector('#rock');
    const paperChoice = document.querySelector('#paper');
    const scissorsChoice = document.querySelector('#scissors');

    rockChoice.addEventListener('click', () => console.log(playRound('Rock', getComputerSelection())));
    paperChoice.addEventListener('click', () => console.log(playRound('Paper', getComputerSelection())));
    scissorsChoice.addEventListener('click', () => console.log(playRound('Scissors', getComputerSelection())));

    // ALTERNATIVE //

    // let selection = '';
    // // get the player's choice
    // const choices = document.querySelectorAll('button');

    // choices.forEach(choice => {
    //     choice.addEventListener('click', () => 
    //         selection = choice.id);
    // });
}

// Single round of Rock Paper Scissors
function playRound(playerSelection, computerSelection) {
    // make playerSelection and computerSelection case insensitive
    // playerSelection = playerSelection.toLowerCase();
    // computerSelection = computerSelection.toLowerCase();

    let playerWins = false;

    // if the player and computer choose the same thing, it's a tie
    if (playerSelection === computerSelection) {
        return "It's a tie!";
    }
    
    // rock beats scissors
    switch (playerSelection) {
        case "Rock":
            if (computerSelection === "Scissors") {
                playerWins = true;
            }
            else {
                playerWins = false;
            }
            break;
        // paper beats rock
        case "Paper":
            if (computerSelection === "Rock") {
                playerWins = true;
            }
            else {
                playerWins = false;
            }
            break;
        // scissors beat paper
        case "Scissors":
            if (computerSelection === "Paper") {
                playerWins = true;
            }
            else {
                playerWins = false;
            }
            break;            
    }

    // capitalize the first letter of the selections
    // playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
    // computerSelection = computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1);

    // return the result of the round
    if (playerWins) {
        playerScore++;
        return "You win! " + playerSelection + " beats " + computerSelection;
    }
    else {
        computerScore++;
        return "You lose! " + computerSelection + " beats " + playerSelection;
    }
}


// Function that returns either ‘Rock’, ‘Paper’ or ‘Scissors’
function getComputerSelection() {
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
