var n = Math.random();
n = (n * 6 + 1);
n = Math.floor(n);

document.querySelector(".img1").setAttribute("src","images/dice" + n + ".png");

var m = Math.random();
m = (m * 6 + 1);
m = Math.floor(m);

document.querySelector(".img2").setAttribute("src","images/dice" + m + ".png");


if (n > m) {
  document.querySelector("h1").innerHTML = "PLAYER 1 WON";}
else if (n<m) {
  document.querySelector("h1").innerHTML = "PLAYER 2 WON";}
else {
  document.querySelector("h1").innerHTML = "DRAW";}
