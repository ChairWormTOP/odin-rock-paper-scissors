const options = ['Rock', 'Paper', 'Scissors']

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

console.log(computerPlay());