//Sequence Generator
let ButtonSequence = []; // [1,2,3,1]
function StartingSequence() {
for (let i = 0; i < 3; i++) {
  let randomValue = Math.floor(Math.random() * 4) + 1; // generate random value between 1 and 4
  ButtonSequence.push(randomValue);
}
}
function generateNextSequence() {
  ButtonSequence.push(Math.floor(Math.random() * 4) + 1);
  lightUpButtons(ButtonSequence); // Call a function to light up the buttons based on the new sequence
}

//Button Controller
let playerInput = [];
document.getElementById("button-1").addEventListener("click", function() {
  toggleBtn(1);
  handlePlayerInput(1);
});
document.getElementById("button-2").addEventListener("click", function() {
  toggleBtn(2);
  handlePlayerInput(2);
});
document.getElementById("button-3").addEventListener("click", function() {
  toggleBtn(3);
  handlePlayerInput(3);
});
document.getElementById("button-4").addEventListener("click", function() {
  toggleBtn(4);
  handlePlayerInput(4);
});
function handlePlayerInput(inputNum) {
  playerInput.push(inputNum);
  for (let i = 0; i < playerInput.length; i++) {
    if (playerInput[i] !== ButtonSequence[i]) {
      playNote(false)
      /* console.log("Game over!"); */  //Change for game over screen function
      return;
    }
    else if(playerInput[i] === ButtonSequence[i])
    playNote(true)
  }

  if (playerInput.length === ButtonSequence.length) {
    console.log("Congratulations, you won!");
    playerInput = [];
    generateNextSequence()
  }
}
function StartButton(){
  let startBtn = document.getElementById('start-button');
  startBtn.addEventListener("click",() => {
    StartGame()
  });
}

function hideStartButton(){
  const startButton = document.querySelector('#start-button');
    startButton.style.display = 'none';
}

//Game Logic Controller

function StartGame() {
  hideStartButton();
  updateScore(0);
  StartingSequence();/* (function() {
    toggleBtnSequence(0); */
    console.log(ButtonSequence)
  }/* );

}
 */

//Light Toggler
/* toggleBtnSequence(0) */
function toggleBtnSequence(index) {
  if (index < ButtonSequence.length) {
    const button = document.getElementById(`button-${ButtonSequence[index]}`);
    button.classList.add(`active-${ButtonSequence[index]}`);

    setTimeout(function () {
      button.classList.remove(`active-${ButtonSequence[index]}`);
      toggleBtnSequence(index + 1);
  }, 1200);
}
}
function toggleBtn(btnNum){
  const button = document.getElementById(`button-${btnNum}`)
  button.classList.add(`active-${btnNum}`)

  setTimeout(function () {
    button.classList.remove(`active-${btnNum}`);
  }, 1200);
}

//Audio Player
function playNote(isCorrect) {
  let buttonSound
  if (isCorrect) {
    buttonSound = new Audio(`./Sounds/btnSound.mp3`);
  } else {
    buttonSound = new Audio(`./Sounds/btnError.mp3`);
  }
  buttonSound.play();

  /* new Audio(`./Sounds/btn${audioName}.mp3`).play() */
}

//GamePoints Tracker
/* updateScore(0) */  //Starting condition
let score = 0;
function updateScore(points) {
  let score = 0;
  score += points;
  document.getElementById("score").innerText = `Score:${score}`;
}
function endGame(didWin) {
  if (didWin) {
    updateScore(1);
  }
}

//Game Messages
function GameOver() {
const messageDisplay = document.getElementById('message')
messageDisplay.innerHTML = 'GAME OVER';

const buttons = document.querySelectorAll('.button');
buttons.forEach(button => {
  button.disabled = true;
});

const restartButton = document.getElementById('start-button');
restartButton.textContent = 'RE-START';
restartButton.addEventListener('click', () => {
//Adicionar aqui evento
});
}