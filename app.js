/*
GAME FUNCTION
- Player must guess a number between a min and max
- Player gets a certain amount of guesses
- Noitfy player of guesses remaining
- Notify the palyer of the correct answer if loose
- Let player choose to play again
*/

// Game values

let min = 1,
    max = 10,
    winningNum = 2,
    guessesLeft = 3,

// UI Elements
      game = document.querySelector('#game'),
      minNum = document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input'),
      message = document.querySelector('.message');

// Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

// Play again event listener
game.addEventListener('mousedown', function(e){
  if(e.target.className === 'play-again') {
    window.location.reload();
  }
});

// Listen for guess
guessBtn.addEventListener('click', function(){
  let guess = parseInt(guessInput.value);

// Validate
if( isNaN(guess) || guess < min || guess > max ) {

  setMessage(`Please enter a numberr between ${min} and ${max}`, 'blue');
}

// Check if won
if(guess === winningNum) {

  // Game over - WIN
 
  gameOver(true, `${winningNum} is correct!, YOU WIN`);

} else {
  guessesLeft -= 1;
  if(guessesLeft === 0){

  // Game over - lost

  gameOver(false, `Game Over, you lost. The correct number was ${winningNum}`);



  } else{
   // Game over - answer is wrong

   // Change border color
   guessInput.style.borderColor = `red`;

   // Clear Input
   guessInput.value = '';
   // Tell user it is the wrong number

   setMessage(`${guess} is not correct, ${guessesLeft} guesses left`, 'red');

  }
}

});

// GameOver(won)

function gameOver(won, msg){

let color;
won === true ? color = 'green' : color = 'red';

// Disable input
guessInput.disabled = true;
// Change border color
guessInput.style.borderColor = color;

// Set text color
message.style.color = color;

// Set message
setMessage(msg);

  // Play Again
  guessBtn.value = 'Play Again';
  guessBtn.classname += 'play-again';

}

// Set message
function setMessage(msg, color){
  message.style.color = color;
  message.textContent = msg;
}


