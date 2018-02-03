const Letter = require("./letter");

const Word = function(wordToGuess) {

	this.word = [];
	this.solved = false;
	this.guessesLeft = 15;
	for (var i = 0; i < wordToGuess.length; i++) {
		var newLetter = new Letter(wordToGuess[i].toUpperCase());
		this.word.push(newLetter);
	};

	this.theWord = function() {
		var word = this.word;
		//calls the toString function because it is being cast to a string
		return word.join(" ");
	},

	// hold all the letters that have been guessed
	this.alreadyChecked = [];

	this.guess = function(guess) {
		// if the letter has been guessed, print message and return
		var guess = guess.toUpperCase();
		var correct = false;
		// TODO
		// check if it's a letter
		// else return "that's not a letter
		if (this.checkIfGuessed(guess, this.alreadyChecked)) {
			
			return "guessed already \n";
		}
		//add the letter to the guessed array
		this.alreadyChecked.push(guess);

		for (letter in this.word) {

			if(this.word[letter].checkLetter(guess)) {
				correct = true;
			}
			
		};
		this.guessesLeft--;
		return correct;
	};

	this.checkIfGuessed = function(guess, alreadyChecked) {

		return (alreadyChecked.indexOf(guess) !== -1);

	}

}

Word.prototype.isSolved = function() {
	// reduce the words array, return true if all guessed values are true

	return this.word.reduce(function(accumulator,currentValue) {
		if (!currentValue.guessed) {
			return false;
		}
		return accumulator;
	}, true);
}

module.exports = Word;


