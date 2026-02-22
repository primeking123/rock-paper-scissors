
let userScore = 0;
let cpuScore = 0;





function getComputerChoice() {

    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}



function playRound(userChoice , cpuChoice) {
    
    document.getElementById('cpu-hand').textContent = cpuChoice.toUpperCase();
    if(userChoice === cpuChoice) {
        return "It's a tie!";
    } else if ((userChoice === 'rock' && cpuChoice === 'scissors') ||
              (userChoice === 'paper' && cpuChoice === 'rock') ||
              (userChoice === 'scissors' && cpuChoice === 'paper')) {
        userScore++;
        return `You win! Score: ${userScore} to ${cpuScore}`;
    } else {
        cpuScore++;
        return `You lose! Score: ${userScore} to ${cpuScore}`;
    }
}



const emojiMap ={
    'rock':'🪨',
    'paper':'📄',
    'scissors':'✂️'
};

function makeMove(userChoice){
      let cpuChoice = getComputerChoice();
      document.getElementById('cpu-hand').textContent= emojiMap[cpuChoice];

      


    let resultMessage = playRound(userChoice, cpuChoice);

    document.getElementById('results').textContent = resultMessage;


    document.getElementById('player-score').textContent =userScore;
    document.getElementById('cpu-score').textContent =cpuScore;

}

document.getElementById('reset').addEventListener('click', () => {
    userScore = 0;
    cpuScore = 0;
    document.getElementById('player-score').textContent = userScore;
    document.getElementById('cpu-score').textContent = cpuScore;
    document.getElementById('results').textContent = "Choose your weapon!";
});