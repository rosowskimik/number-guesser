// UI Var
const UIminNumber = document.querySelector('.min-number'),
			UImaxNumber = document.querySelector('.max-number'),
			UIguessInput = document.querySelector('#guess-input'),
			UIguessBtn = document.querySelector('#guess-value'),
			message = document.querySelector('.message');

// Game Var
let min = 1,
		max = 10,
		winningNum = numberRandomize(),
		guessesLeft = 3;

// Set UI min and max
UIminNumber.textContent = min;
UImaxNumber.textContent = max;
