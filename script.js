let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

const generateTarget = () => Math.floor(Math.random()*10)


function compareGuesses(man,computer,target){
    const manDiff = Math.abs(target-man)
    const computerDiff = Math.abs(target-computer)
    return manDiff <= computerDiff ? true : false
    // If the difference is closer to zero, that party has won.
}

const updateScore = winner => {
    if (winner === 'human') {
      humanScore++;
    } else if (winner === 'computer') {
      computerScore++;
    }
  }
  

const advanceRound = () => currentRoundNumber++;