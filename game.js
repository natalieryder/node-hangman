var Word = require("./word");
var inquirer = require("inquirer");

const Game = function(wordsArray) {
	this.roundNumber = 0;
	this.wins= 0;
	this.words = wordsArray;
	this.currentWord = {};


};

Game.prototype.getRandomWord = function() {
	// get a random word from the array and return it
	var random = Math.floor(Math.random() * this.words.length);
	return this.words[random];
};

Game.prototype.constructWord = function() {
	// create a new word variable
	var newWord = new Word(this.getRandomWord());
	this.currentWord = newWord;
	this.roundNumber++;
	// return the new word

	console.log("\n Word "+ this.roundNumber +"\n")
	return this.currentWord.theWord();
};

Game.prototype.playWord = function() {
	if (this.currentWord.isSolved()) {
		console.log("You won!");
		this.wins++;
		console.log("Wins this game: " + this.wins);
		
		console.log(this.constructWord());

	}
	if (this.currentWord.guessesLeft <= 0) {
		this.lose();
		return;
	}
	inquirer.prompt([
	{
		message: "guess a letter",
		name: "letter",
	}]
	).then(answers => {
		console.log("\n" + "you guessed: " + answers.letter);

		var response = this.currentWord.guess(answers.letter);

		if (response === true)  {
			console.log('\x1b[32m%s\x1b[0m', "CORRECT")
		} else if (response === false) {
			console.log('\x1b[31m%s\x1b[0m', "INCORRECT");
		} else {
			console.log('\x1b[31m%s\x1b[0m', response);
		};

		// console.log("\n" + this.currentWord.guess(answers.letter) + "\n");
		console.log("\n" + this.currentWord.theWord() + "\n");

		console.log("you have " + this.currentWord.guessesLeft + " guesses left \n");
		this.playWord();
	})
}

Game.prototype.lose = function() {
	console.log("you lost!");
	return;
};

Game.prototype.win = function() {
	console.log("You won!");
	this.wins++;
	console.log("Wins this game: " + this.wins);
	// start new word
	console.log(this.constructWord());
}


module.exports = Game;

