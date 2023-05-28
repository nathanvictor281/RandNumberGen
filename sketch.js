// p5.js setup function
function setup() {
  noCanvas();

  const generateButton = select('#generateButton');
  generateButton.mousePressed(generateRandomNumber);

  const diceButton = select('#diceButton');
  diceButton.mousePressed(rollDice);
}

// Generate a random number
function generateRandomNumber() {
  const minNumber = parseInt(select('#minNumber').value());
  const maxNumber = parseInt(select('#maxNumber').value());

  const randomNumber = Math.floor(random(minNumber, maxNumber + 1));

  const numberDisplay = select('#numberDisplay');
  numberDisplay.html(randomNumber);
}

// Roll the dice and update the number of clicks
function rollDice() {
  const numClicksInput = select('#numClicks');
  const currentNumClicks = parseInt(numClicksInput.value());
  const newNumClicks = Math.floor(random(1, 7)); // Random number between 1 and 6

  numClicksInput.value(currentNumClicks + newNumClicks);
}
