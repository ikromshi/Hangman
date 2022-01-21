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


getPuzzle((error, puzzle) => {
    if (error) {console.log(`Error ${error}`)}
    else {console.log(puzzle)}
})


// // Using restcountries.eu
// const findCountry = new XMLHttpRequest()
// findCountry.open("GET", "http://api.countrylayer.com/v2/all?access_key=920920f8f6a0aefd84f8ededde259eb9")
// findCountry.send()

// const countryCode = "MX"

// findCountry.addEventListener("readystatechange", (e) => {
//     if (e.target.readyState === 4 && e.target.status === 200) {
//         console.log(e)
//         const data = JSON.parse(e.target.responseText)
//         const country = data.find((country) => country.alpha2Code === countryCode)
//         console.log(country.name)
//     }
// })