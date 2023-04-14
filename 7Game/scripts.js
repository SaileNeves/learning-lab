disableButtons()
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
  toggleBtnSequence(0);
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

function disableButtons() {
  document.getElementById("button-1").disabled = true;
  document.getElementById("button-2").disabled = true;
  document.getElementById("button-3").disabled = true;
  document.getElementById("button-4").disabled = true;
}
function enableButtons() {
  document.getElementById("button-1").disabled = false;
  document.getElementById("button-2").disabled = false;
  document.getElementById("button-3").disabled = false;
  document.getElementById("button-4").disabled = false;
}
function showStartButton(){
  const startButton = document.querySelector('#start-button');
    startButton.style.display = 'block';
}
function hideStartButton(){
  const startButton = document.querySelector('#start-button');
    startButton.style.display = 'none';
}

  let startBtn = document.getElementById('start-button');
  startBtn.addEventListener("click",() => {
    hideStartButton();
    StartGame();
  });



//Player input logic
function handlePlayerInput(inputNum) {
  playerInput.push(inputNum);
  for (let i = 0; i < playerInput.length; i++) {
    if (playerInput[i] !== ButtonSequence[i]) {
      playNote(false)
      GameOver()
      return;
    }
    else if(playerInput[i] === ButtonSequence[i]){
    playNote(true)
  }

  if (playerInput.length === ButtonSequence.length) {
    updateScore()
    playerInput = [];
    setTimeout(generateNextSequence,1800);

  }
}
}

//Game Logic Controller
function StartGame() {
  hideStartButton();
  HideMessage();
  enableButtons();
  updateScore(0);
  StartingSequence();
  toggleBtnSequence(0);
  }

//Light Toggler
/* toggleBtnSequence(0) */ //Starting condition
function toggleBtnSequence(index) {
  if (index < ButtonSequence.length) {
    const button = document.getElementById(`button-${ButtonSequence[index]}`);
    button.classList.add(`active-${ButtonSequence[index]}`);

    setTimeout(function () {
      button.classList.remove(`active-${ButtonSequence[index]}`);
      setTimeout(()=> toggleBtnSequence(index + 1),500);
  
  }, 1300);
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
}

//GamePoints Tracker
/* updateScore(0) */  //Starting condition
let score = 0;
function updateScore() {
  score += 1;
  document.getElementById("score").innerText = `Score:${score}`;
}

//Game Messages
function GameOver() {
const messageDisplay = document.getElementById('message');
messageDisplay.innerHTML = 'GAME OVER';
messageDisplay.style.display = 'flex';

const buttons = document.querySelectorAll('.button');
buttons.forEach(button => {
  button.disabled = true;
});

const restartButton = document.getElementById('start-button');
restartButton.textContent = 'RE-START';
showStartButton()
}

function HideMessage(){
  const messageDisplay = document.getElementById('message');
  messageDisplay.style.display = 'none';
}