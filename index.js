var Game = require("./game");
var inquirer = require("inquirer");
var request = require("request");

inquirer.prompt([{
	message: "Choose a topic to generate 10 random hangman words:",
	name: "topic"
}]).then(answers => {

	createGame(answers.topic);

})

function createGame(topic) {
	request('https://api.datamuse.com/words?topics=' + topic + '&max=10', function (error, response, body) {
		if (error) {
	  		console.log('error:', error); // Print the error if one occurred
	  		console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
		}
	  	body = JSON.parse(body);
	  	var words = [];
	  	for (word in body) {
	  		words.push(body[word].word);
	  	};
	  	console.log(words);
	  	
	  	var game = new Game(words);

		console.log(game.constructWord());

		game.playWord();
	});
}
