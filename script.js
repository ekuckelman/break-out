var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');
var x = canvas.width / 2;
var y = canvas.height - 30;
var colorArray = ['#00FF00', '#432F75', '#FF7F00', '#0000FF', '#FF0000'];
var dx = 1;
var dy = -3;
var ballRadius = 10;

function drawBall() {
  ctx.beginPath();
  ctx.arc(x, y, ballRadius, 0, Math.PI*2);
  ctx.fillStyle = 'gray';
  ctx.fill();
  ctx.closePath();
}

function changeColor() {
  var color = colorArray[Math.floor(Math.random() * colorArray.length)];
  ctx.fillStyle = color;
  ctx.fill();
  ctx.save();
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  drawBall();
  x += dx;
  y += dy;

  if (x + dx > canvas.width - ballRadius || x + dx < ballRadius) {
    changeColor();
    dx = -dx;
  }
  if (y+ dy > canvas.height - ballRadius || y + dy < ballRadius) {
    changeColor();
    dy = -dy;
  }
}

setInterval(draw, 10);
