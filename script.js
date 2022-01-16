'use strict';

// console.log(document.querySelector('.message') .textContent);
// document.querySelector('.message').textContent = 'Correct Number!'

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 20;

// document.querySelector('.guess').value = 58;
// console.log(document.querySelector('.guess').value);

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click',
	function () {
		let guess = Number(document.querySelector('.guess')
			.value);
		
		if (!guess) {
			document.querySelector('.message').textContent =
				'Number to daal bsdk';

			//when Player wins the game
		} else if (guess === secretNumber) {
			document.querySelector('.message').textContent =
				'aur ye sahi uttar h aapka, 7 Croreeeeee';
			document.querySelector('body').style.backgroundColor = '#60b347';
			document.querySelector('.number').style.width = '25rem';
			document.querySelector('.number').textContent = secretNumber;
			//when the input score is high

			if (score > highscore) {
				highscore = score;
				document.querySelector('.highscore').
					textContent = highscore;
			}

		} else if (guess !== secretNumber) {
			if (score > 1) {
				document.querySelector('.message').textContent =
					guess > secretNumber ? 'too high sur!' : 'Too low'
				score--;
				document.querySelector('.score').textContent =
					score;
			}
			//when user loses the game
			else {
				document.querySelector('.message').textContent =
					'u lost';
				document.querySelector('.score').textContent =
					score = 0;
			}		
		}
		if (document.querySelector('.guess').value == 69) {
			return alert('Bhk chutiya')
		} else { return nothing };
	});

	document.querySelector('.again').addEventListener('click',
		function () {
			score = 20;
			secretNumber = Math.trunc(Math.random() * 20) + 1;
			document.querySelector('.message').textContent = 'Start guessing...';
			document.querySelector('.score').textContent = score;
			document.querySelector('body').style.backgroundColor = '#222'
			// const guess = Number(document.querySelector('.guess')
			// .value);
				document.querySelector('.number').textContent = '?';
				(document.querySelector('.guess')
			.value = '');
		})