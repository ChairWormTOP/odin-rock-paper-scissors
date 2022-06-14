const options = ['Rock', 'Paper', 'Scissors']

// helper function to randomly get a value from min to max
const getRandomIntInclusive = (min, max) => {
    min = Math.ceil(min)
    max = Math.floor(max)

    return Math.floor(Math.random() * (max - min + 1) + min)
}