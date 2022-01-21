class Hangman {
    // Sets up the main part of the game (parameters --> Original word, Num of guesses)
    constructor(word, remainingGuesses) {
        this.status = "playing"
        this.word = word.toLowerCase().split("")
        this.remainingGuesses = remainingGuesses
        
        this.guessedLetters = []
    }
    
    // Decides if the guess is correct or not (add the letter if yes, asterisk otherwise)
    puzzle() {
        this.guessMatch = ""
    
        this.word.forEach((letter) => {
            if (this.guessedLetters.includes(letter) || letter === " ") {this.guessMatch += letter}
            else {this.guessMatch += "*"}})

            return this.guessMatch
        }

    // Enables user to make a guess (if correct fine, if not chances-1)
    makeGuess(guess) {
        this.guess = guess.toLowerCase()
        if (!this.guessedLetters.includes(guess)) {
            this.guessedLetters.push(guess)
            this.puzzle()} 
        if (!this.word.includes(guess)) {this.remainingGuesses -= 1}
    }

    // Checks status
    gameStatus() {
        const finished = this.word.every(letter => this.guessMatch.includes(letter))
        if (this.remainingGuesses < 0) {this.status = "failed"}
        else if (finished) {this.status = "finished"}
        
        return this.status
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
}
