const snakeboard = document.getElementById("gameCanvas")
snakeboard.width = 900;
snakeboard.height = 900;
const snakeboard_ctx =snakeboard.getContext("2d")

function drawGame(){
  clearScreen();
}

function clearScreen(){
snakeboard_ctx.fillStyle = "black";
snakeboard_ctx.fillRect(400,400,snakeboard.clientWidth,snakeboard.clientHeight)
}

drawGame();