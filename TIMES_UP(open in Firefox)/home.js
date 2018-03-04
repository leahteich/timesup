var img;
var img2;

function preload() { //loads music
  //soundFormats('wav');
  //mySound = loadSound('bubble.wav');
  img = loadImage("bedroom.png");
  img2 = loadImage("GIRL.png")

}

function setup() {
  //mySound.setVolume(0.1); //sets volume

  createCanvas(600, 400); //creates canvas
  image(img,0,0,600, 400);
  image(img2,400,100);
  
  //fish button

}

function draw() {
 // background(113, 244, 255); //blue color for water
}

function simulation() { //plays bubbles sound and calls function createGoldfish
}

