let choices = ['rock', 'paper', 'scissors']
let playerChoice, compChoice;

function getComputerChoice() {
    x = Math.floor(Math.random()*3);
    compChoice = choices[x];
    return compChoice;
}

function rspRound (compChoice, playerChoice) {
    x = compChoice;
    y = playerChoice.toLowerCase();
    
    if (x == y){
        return `It\'s a tie, you both chose ${compChoice}` ;
    }
    else if (x == choices[0] && y == choices[1]) { //rock vs paper
        humanScore += 1;
        return `You: ${playerChoice} Computer: ${compChoice} Human wins`; //x == comp y == human
    }
    else if (x == choices[0] && y == choices[2]) { //rock vs scissors
        computerScore += 1;
        return `You: ${playerChoice} Computer: ${compChoice} Computer wins`;
    }
    else if (x == choices[1] && y == choices[0]) { //paper vs rock
        computerScore += 1;
        return `You: ${playerChoice} Computer: ${compChoice} Computer wins`;
    }
    else if (x == choices[1] && y == choices[2]) { //paper vs scissors
        humanScore += 1;
        return `You: ${playerChoice} Computer: ${compChoice} Human wins`;
    }
    else if (x == choices[2] && y == choices[0]) { //scissors vs rock
        humanScore += 1;
        return `You: ${playerChoice} Computer: ${compChoice} Human wins`;
    }
    else if (x == choices[2] && y == choices[1]) { //scissors vs paper
        computerScore += 1;
        return `You: ${playerChoice} Computer: ${compChoice} Computer wins`;
    }
}

/*function game (){
    for (let i = 0; i<5; i++){
        playerChoice = prompt("Choose your fighter")
        alert(rspRound(getComputerChoice(),playerChoice))
    }
    
}
*/

const btn = document.querySelectorAll('button');
const result = document.querySelector('.result');
let humanScore = 0;
let computerScore = 0;
const score = document.querySelector('.score');
const winner = document.querySelector('.winner');

btn.forEach((button) => {

    button.addEventListener('click', () => {
        if (button.id == 'rock'){
            playerChoice = 'rock';
            result.textContent = rspRound(getComputerChoice(),playerChoice);
        } else if (button.id == 'paper'){
            playerChoice = 'paper';
            result.textContent = rspRound(getComputerChoice(),playerChoice);
        } else if (button.id == 'scissors'){
            playerChoice = 'scissors';
            result.textContent = rspRound(getComputerChoice(),playerChoice);
        }
        if (humanScore == 5){
            winner.textContent = `Human WINS!`;
            humanScore = 0;
            computerScore = 0;
        } else if (computerScore == 5){
            winner.textContent = `You DIE!`;
            humanScore = 0;
            computerScore = 0;
        }
        score.textContent = `Human score: ${humanScore} Computer score: ${computerScore}`;
    })
})

