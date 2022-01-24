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
    puzzleEl.innerHTML = ""
    guessesEl.textContent = game.statusMessage()

    const word = game.puzzle().split("")
    word.forEach((letter) => {
        let newEl = document.createElement("span")
        newEl.textContent = letter
        document.querySelector("#puzzle").appendChild(newEl)
    }) 
    
}


const startGame = async () => {
    const puzzle = await getPuzzle("2")
    game = new Hangman(puzzle, 5)
    render()
}

document.querySelector("#reset").addEventListener("click", startGame)

startGame()

