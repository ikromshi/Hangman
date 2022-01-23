// Sets up the event listener so user can guess from the webpage

const inst1 = new Hangman("Cat Food", 2)
const puzzleEl = document.querySelector("#puzzle")
const guessesEl = document.querySelector("#guesses")

puzzleEl.textContent = inst1.puzzle()
guessesEl.textContent = inst1.statusMessage()

if (inst1.gameStatus() === "playing") {
    window.addEventListener("keypress", (e) => {
        const key = String.fromCharCode(e.charCode)
        inst1.makeGuess(key)

        // Checking for the status
        inst1.gameStatus()

        // Giving a status message
        puzzleEl.textContent = inst1.puzzle()
        guessesEl.textContent = inst1.statusMessage()
})}


// Getting the puzzle word from fetch API
getPuzzle("3").then((puzzle) => {
    console.log(puzzle)
}).catch(error => {
    console.log(error)
}) 


// Getting the country object from fetch API
getCountry("UZ").then((country) => {
    console.log(country.name)
}).catch(error => {
    console.log(error)
})


// Integrating two fetch methods using Promise Chaining
getLocation().then(data => {
    return getCountry(data.country)
}).then(country => {
    console.log(country.name)
}).catch(error => {
    console.log(error)
})