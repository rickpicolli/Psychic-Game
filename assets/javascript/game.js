var pcChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessesSoFar = [];
var userInput = null;

var pcGuess = pcChoices[Math.floor(Math.random() * pcChoices.length)];
console.log("Computer picked: " + pcGuess);


var newPcChoices = function() {
  this.pcGuess = this.pcChoices[Math.floor(Math.random() * this.pcChoices.length)];

}


document.onkeyup = function(event) {
	// guessesLeft--;

	
	var userInput = String.fromCharCode(event.keyCode).toLowerCase();

	
	if (guessesSoFar.indexOf(userInput) < 0 && pcChoices.indexOf(userInput) >= 0) {
		guessesSoFar[guessesSoFar.length] = userInput;
	
		guessesLeft--;
	}



	var reset = function() {
  	guessesLeft = 9;
  	guessesSoFar = [];

  	var pcGuess = pcChoices[Math.floor(Math.random() * pcChoices.length)];

  	newPcChoices();

  	console.log(" Computer picked: " + this.pcGuess);

	}


	if (pcGuess == userInput) {
		wins++;

		reset();
		
		
	}

	
	if (guessesLeft == 0) {
		losses++;

		reset();
		
		
	}

	var html = 
	"<p><h4>Guess what letter I'm thinking of</h4></p>" + 
	"<p><h4>Wins: " + wins + "</h4></p>" +
	"<p><h4>Losses: " + losses + "</h4></p>" +
	"<p><h4>Guesses Left: " + guessesLeft + "</h4></p>" +
	"<p><h4>Your guesses so far: " + guessesSoFar + "</h4></p>";

	document.querySelector("#game").innerHTML = html;

}


    