let choices = ['Rock', 'Paper', 'Scissors']

function getComputerChoice() {
    x = Math.floor(Math.random()*3);
    y = choices[x];
    return y;
}