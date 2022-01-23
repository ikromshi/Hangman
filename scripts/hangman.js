class Hangman {
    // Sets up the main part of the game (parameters --> Original word, Num of guesses)
    constructor(word, remainingGuesses) {
        this.status = "playing"
        this.word = word.toLowerCase().split("")
        this.remainingGuesses = remainingGuesses
        this.guessedLetters = []
    }

    // Checks status
    calculateStatus() {
        const finished = this.word.every(letter => this.guessedLetters.includes(letter) || letter === " ") 
        if (this.remainingGuesses === 0) {this.status = "failed"}
        else if (finished) {this.status = "finished"}
        else {this.status = "playing"}
    }

    // Gives a status message
    statusMessage() {
        let msg = "Great work! You guessed the word."
        if (this.status === "playing") {
            msg = `Guesses left: ${this.remainingGuesses}.`
        } else if (this.status === "failed") {
            msg = `Nice try! The word was ${this.word.join("")}.`
        }
        return msg
    }
    
    // Decides if the guess is correct or not (add the letter if yes, asterisk otherwise)
    puzzle() {
        let puzzle = ""
    
        this.word.forEach((letter) => {
            if (this.guessedLetters.includes(letter) || letter === " ") {puzzle += letter}
            else {puzzle += "*"}})

            return puzzle
        }

    // Enables user to make a guess (if correct fine, if not chances-1)
    makeGuess(guess) {
        guess = guess.toLowerCase()
        const isUnique = !this.guessedLetters.includes(guess) && this.word.includes(guess)
        const isBadGuess = !this.word.includes(guess)

        if (this.status !== "playing") {return}
        if (isUnique) {this.guessedLetters.push(guess)}
        if (isBadGuess) {this.remainingGuesses--}

        this.calculateStatus() 
    }
}
