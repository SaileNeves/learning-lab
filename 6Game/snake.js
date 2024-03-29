//board
let blockSize = 25;
let rows = 20;
let cols = 20;
let board;
let context;

//Snake Head
let snakeX = blockSize * 5;
let snakeY = blockSize * 5;

//food
let foodX = blockSize * 10;
let foodY = blockSize * 10;

window.onload=function(){
  board=document.getElementById("board");
  board.height = rows*blockSize;
  board.width = cols*blockSize;
  context=board.getContext("2d");

  update();
}

function update(){
  context.fillStyle="black";
  context.fillRect(0, 0, board.width, board.height);

  context.fillStyle="lime";
  context.fillRect(snakeX, snakeY, blockSize, blockSize);

  context.fillStyle="red";
  context.fillRect(foodX, foodY, blockSize, blockSize);

}

