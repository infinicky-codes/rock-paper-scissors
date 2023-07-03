// TODO //

// Refactor playRound
// Make elements show and disappear again
// Less global variables








// Keep track of the player's score
let playerScore = 0;
// Keep track of the computer's score
let computerScore = 0;

// Keep track of the round number
let round = 1;

const container = document.querySelector('.content');    


// Let player choose something
getSelections();

// Get player and Computer selections 
function getSelections() {
    // Get the player's selection
    const selections = document.querySelectorAll('button');

    selections.forEach(selection => {
        selection.addEventListener('click', () => 
            console.log(playRound(selection.id, getComputerSelection())));
            //playRound(selection.id, getComputerSelection()));
    });
}

// Display intermediate result
function showRoundResult(result) {
    let resultMessage = document.createElement('h2');
    resultMessage.textContent = result;
    container.appendChild(resultMessage);
}

// Display end of game
function displayEndOfGame() {
    let determinationMessage = document.createElement('h2');
    determinationMessage.textContent = "Final round played. Determining the winner...";
    container.appendChild(determinationMessage);
}

// Determine final result
function determineFinalResult() {
    let finalMessage = document.createElement('h2');
    
    if (playerScore > computerScore) {
        finalMessage.textContent = "You win! You beat the computer by " + 
        (playerScore - computerScore) + " points.";
        finalMessage.style.color = 'green';
    }
    else if (playerScore < computerScore) {
        finalMessage.textContent = "You lose by " + (computerScore - playerScore) + 
        " points.";
        finalMessage.textContent += "\n Better luck next time!";
        finalMessage.style.color = 'red';
    }
    else {
        finalMessage.textContent = "It's a tie! You both have " + playerScore + " points.";
    }
    
    container.appendChild(finalMessage);
}



// Single round of Rock Paper Scissors
function playRound(playerSelection, computerSelection) {
    // Match playerSelection and computerSelection cases
    playerSelection = playerSelection.charAt(0).toUpperCase() + 
                      playerSelection.slice(1);    

    let playerWins = false;

    // End the game if this has been the 5th round
    round++;
    if (round === 6) {
        displayEndOfGame();
        determineFinalResult();
    }

    // if the player and computer choose the same thing, it's a tie
    if (playerSelection === computerSelection) {
        //container.removeChild(document.getElementsByTagName('h2'));
        showRoundResult("It's a tie!");
        return;
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

    // return the result of the round
    if (playerWins) {
        playerScore++;
        showRoundResult("You win! " + playerSelection + " beats " + computerSelection);
    }
    else {
        computerScore++;
        showRoundResult("You lose! " + computerSelection + " beats " + playerSelection);
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
