// UI Var
const UIminNumber = document.querySelector('.min-number'),
			UImaxNumber = document.querySelector('.max-number'),
			UIguessInput = document.querySelector('#guess-input'),
			UIguessBtn = document.querySelector('#guess-btn'),
			message = document.querySelector('.message'),
			gameWrapper = document.querySelector('.game');

// Game Var
let min = 1,
		max = 10,
		winningNum = getRandomNum(min, max),
		guessesLeft = 3;

// Set UI min and max
UIminNumber.textContent = min;
UImaxNumber.textContent = max;

// Play again
gameWrapper.addEventListener('mousedown', e => {
	if(e.target.className === 'play-again') {
		window.location.reload();
	}
});
// Listen for guess
UIguessBtn.addEventListener('click', () => {
	let guess = parseInt(UIguessInput.value);

	// Validate
	if(isNaN(guess) || guess < min || guess > max) {
		setMessage(`Please enter a number between ${min} and ${max}`, 'red')
	} else {

		// Check if won
		if(guess === winningNum) {
			// Game over - win
			gameOver(true, `${winningNum} is correct, you WIN!`);
		} else {
			guessesLeft -= 1;

			if(guessesLeft < 1) {
			// Game over - loss
			gameOver(false, `Game Over, you lost. The correct number was ${winningNum}.`);
			} else {
				// Wrong guess
				UIguessInput.value = '';
				UIguessInput.style.borderColor = 'red';
				setMessage(`${guess} is not the correct number, ${guessesLeft} guesses left`);
			}
		}
	}
});

// Get Winning Number
function getRandomNum(min, max) {
	return Math.floor(Math.random()*((max-min+1)+min));
}

// Game over
function gameOver(won, msg) {
	// Set color
	let color;
	won === true ? color = 'green' : color = 'red';
	UIguessInput.style.borderColor = color;
	message.style.color = color;
	// Disable input
	UIguessInput.disabled = 'true';
	// UI message
	setMessage(msg, color);

	// Play again
	UIguessBtn.value = 'Play Again';
	UIguessBtn.className += 'play-again';
}

// Set message
function setMessage(msg, color) {
	message.textContent = msg;
	message.style.color = color
}