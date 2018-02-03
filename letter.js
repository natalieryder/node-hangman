const Letter = function(letter) {
	this.letter = letter;
	this.guessed = false;
	if (letter === " "){
		this.guessed = true;
	}
};



Letter.prototype.toString = function() {

	if (this.guessed) {
		return this.letter;
	} else {
		return "_";
	}
};

Letter.prototype.checkLetter = function(guess) {

	if (guess === this.letter) {
		
		this.guessed = true;
		return true;
	}
}


module.exports = Letter;
