const options = ['rock', 'paper', 'scissors']

let playerScore = 0
let computerScore = 0

// helper function to randomly get a value from min to max
const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min)
    max = Math.floor(max)

    return Math.floor(Math.random() * (max - min + 1) + min)
}

const computerPlay = () => {
    const randomNumber = getRandomIntInclusive(1, 3)
    return options[randomNumber - 1] // randomNumber - 1 because index 0 is 1, index 1 is 2, and index 2 is 3
}

const playSingleRound = (playerSelection, computerSelection) => {
    if (playerSelection.toLowerCase() === computerSelection) {
        return 'Tie!'
    } else if ((playerSelection.toLowerCase() === 'rock') && (computerSelection === 'paper')) {
        computerScore++
        return 'You lose! Paper beats Rock'
    } else if ((playerSelection.toLowerCase() === 'paper') && (computerSelection === 'rock')) {
        playerScore++
        return 'You win! Paper beats Rock'
    } else if ((playerSelection.toLowerCase() === 'scissors') && (computerSelection === 'paper')) {
        playerScore++
        return 'You win! Scissors beat Paper'
    } else if ((playerSelection.toLowerCase() === 'paper') && (computerSelection === 'scissors')) {
        computerScore++
        return 'You lose! Scissors beat Paper'
    } else if ((playerSelection.toLowerCase() === 'rock') && (computerSelection === 'scissors')) {
        playerScore++
        return 'You win! Rock beats Scissors'
    } else if ((playerSelection.toLowerCase() === 'scissors') && (computerSelection === 'rock')) {
        computerScore++
        return 'You lose! Rock beats Scissors'
    } else {
        return 'Invalid input.'
    }
}

const playRock = () => {
    console.log(playSingleRound('rock', computerPlay()))
}

const playPaper = () => {
    console.log(playSingleRound('paper', computerPlay()))
}

const playScissors = () => {
    console.log(playSingleRound('scissors', computerPlay()))
}

const rock = document.querySelector('#rock')
rock.addEventListener('click', () => playRock())

const paper = document.querySelector('#paper')
paper.addEventListener('click', () => playPaper())

const scissors = document.querySelector('#scissors')
scissors.addEventListener('click', () => playScissors())