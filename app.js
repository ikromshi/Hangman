// Sets up the event listener so user can guess from the webpage
const puzzleEl = document.querySelector("#puzzle")
const guessesEl = document.querySelector("#guesses")
let game


window.addEventListener("keypress", (e) => {
    const guess = String.fromCharCode(e.charCode)
    game.makeGuess(guess)
    render()
})


const render = () => {
    puzzleEl.textContent = game.puzzle()
    guessesEl.textContent = game.statusMessage()
}


const startGame = async () => {
    const puzzle = await getPuzzle("2")
    game = new Hangman(puzzle, 45)
    render()
}

document.querySelector("#reset").addEventListener("click", startGame)

startGame()

