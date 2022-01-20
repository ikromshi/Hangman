// Sets up the event listener so user can guess from the webpage

const inst1 = new Hangman("Cat", 2)
const puzzleEl = document.querySelector("#puzzle")
const guessesEl = document.querySelector("#guesses")

puzzleEl.textContent = inst1.puzzle()
guessesEl.textContent = inst1.remainingGuesses

window.addEventListener("keypress", function(e) {
    const key = String.fromCharCode(e.charCode)
    inst1.makeGuess(key)

    puzzleEl.textContent = inst1.puzzle()
    guessesEl.textContent = inst1.remainingGuesses

    // Checking for the status
    const status = inst1.gameStatus()
    console.log(status)
})