let computerSelection = getComputerChoice();
const buttons = document.querySelectorAll('input');
let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let choice =  Math.ceil(Math.random() * 3);
    switch (choice) {
        case 1: return 'rock';
        case 2: return 'paper';
        case 3: return 'scissor';
        default: return null;
    }    
}


function playRound(playerSelection) {
    playerSelection = playerSelection.toLowerCase();
    let result = "";
    // your code here!
    if ( (playerSelection == "rock" && computerSelection == "paper") 
    || (playerSelection == "paper" && computerSelection == "scissor") 
    || (playerSelection == "scissor" && computerSelection == "rock") ) {
        computerScore++;
        result = ('You lose! ' + playerSelection + ' beats ' + computerSelection
            + "<br><br>Player score: " + playerScore + "<br>Computer score: " + computerScore);

        if(computerScore === 5) {
            alert("You lose!");
            result += '<br><br>You lost the game! Reload the page to play again';
            buttons.forEach(elem => {
                elem.disabled = true
            })
        }
    }

    else if (playerSelection === computerSelection) {
        result = ('Tie! ' + "<br><br>Player score: " + playerScore + "<br>Computer score: " + computerScore);
    }

    else {
        playerScore++;
        result = ('You win! ' + playerSelection + ' beats ' + computerSelection
            + "<br><br>Player score: " + playerScore + "<br>Computer score: " + computerScore);

        if(playerScore === 5) {
            alert("You win!");
            result += '<br><br>You win the game! Reload the page to play again';
            buttons.forEach(elem => {
                elem.disabled = true
            })
        }
    }

    document.getElementById('result').innerHTML = result
    return result;
}

buttons.forEach(button =>{
    button.addEventListener('click', function(){
        computerSelection = getComputerChoice();
        playRound(button.value)
    })
})