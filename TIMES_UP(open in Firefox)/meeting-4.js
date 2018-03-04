var img;
var img2;
var img3;
var img4;
var time=0
var img5;

function preload() { //loads music
  //soundFormats('wav');
  //mySound = loadSound('bubble.wav');
  img = loadImage("meeting.png");
  img2 = loadImage("GIRL.png")
  //img3 = loadImage("thoughtbubble.png");
  img4 = loadImage("colleague2.png")
  img5 = loadImage("colleague3.png")

}


function draw() {
createCanvas(600, 400); //creates canvas

  //mySound.setVolume(0.1); //sets volume
time = time + 1;
 image(img,0,0,600, 400);
  image(img2,0,150,150,250);
  image(img4,430,130,260,280)
  image(img5,270,70,300,220)

  
if (time>150){
  strokeWeight(3);
  textStyle(BOLD)
  rect(10,315,80,40);
 	strokeWeight(3);
 	text("Annie",20,335);
 	textSize(24);
 	textFont('Courier');
}

   if (time>150) {
     textStyle(NORMAL)
   		textFont('Courier');
   		strokeWeight(3);
 	rect(10,340,570,40);
 	//strokeWeight(3);
 	text("We should decrease production cost.",20,370);
 	textSize(18);
 
 	//moveGirl = false;
 	}
if (time>300){
  textStyle(BOLD)
  rect(10,315,80,40);
 	strokeWeight(3);
 	text("Greg",20,335);
 	textSize(24);
 	textFont('Courier');
}
 if (time > 300) {
  textStyle(NORMAL)
 	rect(10,340,570,40);
 	text("Yeah, we should lower those prices.",20,370);
 	textSize(18);
 	textFont('Courier');
 	time+=1;
 }
if (time>500){
  textStyle(BOLD)
  rect(10,315,80,40);
 	strokeWeight(3);
 	text("Nate",20,335);
 	textSize(24);
 	textFont('Courier');
}
 if (time > 500) {
  	rect(10,340,570,40);
  	 textStyle(NORMAL)
 	text("Great idea Greg!",20,370);
 	textSize(20);
 	textFont('Courier');
 	time+=1;

 }
 if (time>760){
  textStyle(BOLD)
  rect(10,315,80,40);
 	strokeWeight(3);
 	text("Annie",20,335);
 	textSize(24);
 	textFont('Courier');
}

 if (time > 760) {
  	rect(10,340,570,40);
  	 textStyle(NORMAL)
 	text("I said that...",20,370);
 	textSize(20);
 	textFont('Courier');

 }
 
  if (time > 1000) {
  	textStyle(BOLD)
  rect(10,315,80,40);
 	strokeWeight(3);
 	text("Nate",20,335);
 	textSize(24);
 	textFont('Courier');

 }
 
  if (time > 1000) {
  	rect(10,340,570,40);
  	 textStyle(NORMAL)
 	text("Hahaha no you didn't!",20,370);
 	textSize(20);
 	textFont('Courier');
  text("Proceed to next scene", 240, 395);

 }

}