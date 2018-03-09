var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

//draws a square
ctx.beginPath();
ctx.rect(20, 40, 50, 50);
ctx.fillStyle = '#FF7400';
ctx.fill();
ctx.closePath();

//draws a cirlce
ctx.beginPath();
ctx.arc(240, 160, 20, 0, Math.PI*2, false);
ctx.fillStyle = '#000066';
ctx.fill();
ctx.closePath();

// draws an unfilled rectangle
ctx.beginPath();
ctx.rect(160, 10, 100, 40);
ctx.strokeStyle = '#009999';
ctx.stroke();
ctx.closePath();