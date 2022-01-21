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


getPuzzle("3", (error, puzzle) => {
    if (error) {console.log(`Error ${error}`)}
    else {console.log(puzzle)}
})


getCountry("US", (error, country) => {
    if (error) {console.log(error)}
    else {console.log(country.name)}
})