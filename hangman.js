// Sets up the main part of the game (parameters --> Original word, Num of guesses)
const Hangman = function(word, remainingGuesses) {
    this.status = "playing"
    this.word = word.toLowerCase().split("")
    this.remainingGuesses = remainingGuesses
    
    this.guessedLetters = []
}

// Decided if the guess is correct or not (add the letter if yes, asterisk otherwise)
Hangman.prototype.puzzle = function() {
    this.guessMatch = ""
    this.correctGuesses = ""

    this.word.forEach((letter, pos) => {
        if (this.guessedLetters.includes(letter)) {
            this.guessMatch += letter
            this.correctGuesses += letter
        } else if (letter === " ") {
            this.guessMatch += letter
        } else {
            this.guessMatch += "*"
        }})
        return this.guessMatch
}

// Enables user to make a guess (if correct fine, if not chances-1)
Hangman.prototype.makeGuess = function (guess) {
    this.guess = guess.toLowerCase()
    if (!this.guessedLetters.includes(guess)) {
        this.guessedLetters.push(guess)
        this.puzzle()} 
    if (!this.word.includes(guess)) {this.remainingGuesses -= 1}
}

// Checks status
Hangman.prototype.gameStatus = function() {
    if (this.remainingGuesses >= 0 && this.correctGuesses.length === this.word.length) {
        this.status = "finished"
    }
    else if (this.remainingGuesses < 0) {
        this.status = "failed"
    }
    return this.status
}