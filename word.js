const Letter = require("./letter");

const Word = function(wordToGuess) {
	this.word = [];
	for (var i = 0; i < wordToGuess.length; i++) {
		var newLetter = new Letter(wordToGuess[i]);
		this.word.push(newLetter);
	};

	this.printWord = function() {
		console.log(this.word);
	},

	this.showWord = function() {
		var word = this.word;
		// for (letter in word) {
			// console.log(letter + "=" + word[letter].letter);
			// console.log(word[letter]);

			// get each word object and run the showLetter function
			// console.log(word[letter] + " ")
		// }
		//create newline

		//calls the toString function because it is being cast to a string
		console.log(word.join(" "));
		// console.log("\n");
	},

	// hold all the letters that have been guessed
	this.alreadyChecked = [];

	this.guess = function(guess) {
		// if the letter has been guessed, print message and return
		if (this.checkIfGuessed(guess, this.alreadyChecked)) {
			console.log("guessed already");
			return;
		}
		//add the letter to the guessed array
		this.alreadyChecked.push(guess);

		for (letter in this.word) {

			this.word[letter].checkLetter(guess);
			
		}
	};

	this.checkIfGuessed = function(guess, alreadyChecked) {

		return (alreadyChecked.indexOf(guess) !== -1);

	}

}

var word = new Word("wordtest");

console.log("guess 'o'");
word.guess("o");
word.showWord();
console.log("guess 'w'");
word.guess("w");
word.showWord();
console.log("guess 't'");
word.guess("t");

word.showWord();

console.log("guess 't'");
word.guess("t");
console.log("guess 'u'")
word.guess("u");

word.showWord();
console.log("guess 'u'")
word.guess("u");