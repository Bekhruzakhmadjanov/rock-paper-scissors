// const computerSelection = getComputerChoice();
// const buttons = document.querySelectorAll('input');
// let playerScore = 0;
// let computerScore = 0;

// function getComputerChoice() {
//     let choice =  Math.floor(Math.random() * (3) + 1);
//     if(choice === 1)
//     {
//         return "rock";
//     }

//     else if(choice === 2)
//     {
//         return "paper";
//     }

//     else
//     {
//         return "scissor";
//     }
    
// }


// function playRound(playerSelection) {
//     playerSelection = playerSelection.toLowerCase();
//     let result = "";
//     // your code here!
//     if ( (playerSelection == "rock" && computerSelection == "paper") 
//     || (playerSelection == "paper" && computerSelection == "scissor") 
//     || (playerSelection == "scissor" && computerSelection == "rock") ) {
//         alert("You lose!");
//         computerScore++;
//         result = ('You lose! ' + playerSelection + ' beats ' + computerSelection
//             + "<br><br>Player score: " + playerScore + "<br>Computer score: " + computerScore);

//         if(computerScore == 5) {
//             result += '<br><br>You lost the game! Reload the page to play again';
//             buttons.forEach(elem => {
//                 elem.disabled = true
//             })
//         }
//     }

//     else if (playerSelection == computerSelection) {
//         alert("Tie");
//         result = ('Tie! ' + "<br><br>Player score: " + playerScore + "<br>Computer score: " + computerScore);
//     }

//     else {
//         alert("You win!");
//         playerScore++;
//         result = ('You win! ' + playerSelection + ' beats ' + computerSelection
//             + "<br><br>Player score: " + playerScore + "<br>Computer score: " + computerScore);

//         if(playerScore == 5) {
//             result += '<br><br>You win the game! Reload the page to play again';
//             buttons.forEach(elem => {
//                 elem.disabled = true
//             })
//         }
//     }

//     document.getElementById('result').innerHTML = result
//     return result;
// }


// buttons.forEach(button =>{
//     button.addEventListener('click', function(){
//         playRound(button.value)
//     })
// })







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
            result += '<br><br>You lost the game! Reload the page to play again';
            buttons.forEach(elem => {
                elem.disabled = true
            })
        }
    }

    else if (playerSelection === computerSelection) {
        alert("Tie");
        result = ('Tie! ' + "<br><br>Player score: " + playerScore + "<br>Computer score: " + computerScore);
    }

    else {
        alert("You win!");
        playerScore++;
        result = ('You win! ' + playerSelection + ' beats ' + computerSelection
            + "<br><br>Player score: " + playerScore + "<br>Computer score: " + computerScore);

        if(playerScore === 5) {
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