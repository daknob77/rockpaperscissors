let choices = ['rock', 'paper', 'scissors']
let playerChoice, compChoice;
playerChoice = 'rock'

function getComputerChoice() {
    x = Math.floor(Math.random()*3);
    compChoice = choices[x];
    return compChoice;
}

function rspRound (compChoice, playerChoice) {
    x = compChoice
    y = playerChoice.toLowerCase()
    
    if (x == y){
        return 'It\'s a tie'
    }
    else if (x == choices[0] && y == choices[1]) { //rock vs paper
        return 'Human wins'                         //x == comp y == human
    }
    else if (x == choices[0] && y == choices[2]) { //rock vs scissors
        return 'Computer wins'
    }
    else if (x == choices[1] && y == choices[0]) { //paper vs rock
        return 'Computer wins'
    }
    else if (x == choices[1] && y == choices[2]) { //paper vs scissors
        return 'Human wins'
    }
    else if (x == choices[2] && y == choices[0]) { //scissors vs rock
        return 'Human wins'
    }
    else if (x == choices[2] && y == choices[1]) { //scissors vs paper
        return 'Computer wins'
    }
}

function game (){
    for (let i = 0; i<5; i++){
        playerChoice = prompt("Choose your fighter")
        alert(rspRound(getComputerChoice(),playerChoice))
    }
}