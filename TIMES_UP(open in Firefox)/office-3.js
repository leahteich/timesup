var img;
var img2;
var x = -100;
var time = 0;
var message;

function preload() { //loads music

  img = loadImage("office.png");
  img2 = loadImage("GIRL.png");
  message = loadImage("message.jpg");

}

function setup() {
  //mySound.setVolume(0.1); //sets volume

  createCanvas(600, 400); //creates canvas


  //fish button

}

function draw() {
  var moveGirl = true;

 	 time++;

  image(img,0,0,600, 400);
  image(img2,x+20,50,220,400);

  if(x>400) {
	moveGirl = false;
   }

 if (keyIsDown(RIGHT_ARROW)) {
 	if (moveGirl)
 		x+=5;
 } 

 if (keyIsDown(LEFT_ARROW)) {
 	if (moveGirl) 
 		x-=5;
 }


 if (time>150) {
 	rect(10,340,570,40);
 	strokeWeight(3);
 	text("**pzzt... pzzt...**",20,370);
 	textSize(24);
 	textFont('Courier');
 	moveGirl = false;
 	}

 if (time > 300) {
 	rect(10,340,570,40);
 	text("I wonder who that could be...",20,370);
 	textSize(18);
 	textFont('Courier');
 	time+=1;
 }

 if (time > 500) {
  	rect(10,340,570,40);
 	text("It's Jeff... Oh no...",20,370);
 	textSize(20);
 	textFont('Courier');
 	time+=1;

 }
 if (time > 800) {
 	 	image(message, 180, 20, 260,320);
 }
  if (time > 820) {
 	 	 text("Proceed to next scene", 340, 25);
	} 


}



