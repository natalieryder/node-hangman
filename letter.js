const Letter = function(letter) {
	this.letter = letter;
	this.guessed = false;

};

Letter.prototype.toString = function() {
	// if (this.guessed) {
	// 	process.stdout.write(this.letter + " ");
	// } else {
	// 	// write("_ ");
	// 	process.stdout.write("_ ");
	// }

	if (this.guessed) {
		return this.letter;
	} else {
		// write("_ ");
		return "_";
	}
};

Letter.prototype.checkLetter = function(guess) {

	if (guess === this.letter) {
		
		this.guessed = true;
	}
}

// var a = new Letter("a");
// a.showLetter();

// a.checkLetter("a");

// a.showLetter();

// console.log(a)

module.exports = Letter;
