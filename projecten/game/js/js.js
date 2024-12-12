"use strict";

let canvasWidth = 800;
let canvasHeight = 600;

let sourceX = 520;
let sourceY = 120;
let booWidth = 18;
let booHeight = 18;

let booX = 10;
let booY = 50;

let booSpeedX = 0;
let booSpeedY = 0;

window.onload = function() {

  let sheet = new Image();   //Maak nieuw img element

  let canvas = document.getElementById("boo");
  let ctx = canvas.getContext("2d");
  ctx.imageSmoothingEnabled = false; //Voorkom antialias effect

  var gameLoop = function(){
    //Maak canvas leeg
    ctx.fillStyle = "#9999ee";
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);

    booX += booSpeedX;
    booY += booSpeedY;

    if(booX > canvasWidth){
      booX = 0;
    }

    //Teken
    ctx.drawImage(sheet, 53, sourceY, booWidth, booHeight, booX, booY, 64, 64);

    //Blijf lopen
    requestAnimationFrame(gameLoop);
  }

  //Als spritesheet is geladen, start dan gameloop
  sheet.addEventListener('load', function(){
    requestAnimationFrame(gameLoop);
  }, false);

  //Bronbestand
  sheet.src = 'img/sheet.png';

  //Maak hem zelf bewegen
  window.addEventListener("keydown", keysPressed, false);
  window.addEventListener("keyup", keysReleased, false);

  var keys = [];

  function keysPressed(e) {

      keys[e.keyCode] = true;

      //Links
      if (keys[37]) {
        booX -= 10;
      }

      //Rechts
      if (keys[39]) {
        booX += 10;
      }

      //Beneden
      if (keys[38]) {
        booY -= 10;
      }

      //Omhoog
      if (keys[40]) {
        booY += 10;
      }

      e.preventDefault();

  }

  function keysReleased(e) {
      keys[e.keyCode] = false;
  }
};
