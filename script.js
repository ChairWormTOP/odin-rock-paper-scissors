const options = ['rock', 'paper', 'scissors']

// helper function to randomly get a value from min to max
const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min)
    max = Math.floor(max)

    return Math.floor(Math.random() * (max - min + 1) + min)
}

const computerPlay = () => {
    //for debudding purposes
    const randomNumber = getRandomIntInclusive(1, 3)
    console.log(randomNumber);
    return options[randomNumber - 1] // randomNumber - 1 because index 0 is 1, index 1 is 2, and index 2 is 3
}

const playSingleRound = (playerSelection, computerSelection) => {
    if (playerSelection.toLowerCase() === computerSelection) {
        return 'Tie!'
    } else if ((playerSelection.toLowerCase() === 'rock') && (computerSelection === 'paper')) {
        return 'You lose! Paper beats Rock'
    } else if ((playerSelection.toLowerCase() === 'paper') && (computerSelection === 'rock')) {
        return 'You win! Paper beats Rock'
    } else if ((playerSelection.toLowerCase() === 'scissors') && (computerSelection === 'paper')) {
        return 'You win! Scissors beat Paper'
    } else if ((playerSelection.toLowerCase() === 'paper') && (computerSelection === 'scissors')) {
        return 'You lose! Scissors beat Paper'
    } else if ((playerSelection.toLowerCase() === 'rock') && (computerSelection === 'scissors')) {
        return 'You win! Rock beats Scissors'
    } else if ((playerSelection.toLowerCase() === 'scissors') && (computerSelection === 'rock')) {
        return 'You lose! Rock beats Scissors'
    } else {
        return 'Invalid input.'
    }
}

const playerSelection = prompt("Rock, Paper, or Scissors?")

console.log(playSingleRound(playerSelection, computerPlay()));