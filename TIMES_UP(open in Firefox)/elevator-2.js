var img;
var img2;
var x = 50;
var time = 0;
var man
var thought;

function preload() { //loads music

  img = loadImage("elevator.png");
  img2 = loadImage("GIRL.png");
  man = loadImage("colleague2.png")
  thought = loadImage("speechbubble.png")

}

function setup() {
  //mySound.setVolume(0.1); //sets volume

  createCanvas(600, 400); //creates canvas


  //fish button

}

function draw() {
  time++;
  var moveGirl = true;

  image(img,0,0,600, 400);
  image(img2,x,100,140,280);
  image(man, 250,90,280,310);

 if (keyIsDown(RIGHT_ARROW) && moveGirl == true && x<=350) 
 	x+=5;

 if (keyIsDown(LEFT_ARROW) && x>=40) 
 	x-=5;

 if(x>200) 
 	moveGirl = false;
 	
 if (time>50) {
   	textStyle(BOLD);
   rect(10,315,80,40);
   strokeWeight(3);
   text("Nate",20,335);
   textSize(24);
    textFont('Courier');
  	moveGirl = false;
 	}

if (time > 50) {
  	textStyle(NORMAL);
 	rect(10,340,570,40);
 	strokeWeight(3);
 	text("You look hot today.",20,370);
 	textSize(24);
 	textFont('Courier');
 	moveGirl = false;
 	}

 if (time > 200) {
 	rect(10,340,570,40);
 	text("...",20,370);
 	textSize(24);
 	textFont('Courier');
 	time+=1;
 }

 if (time > 350) {
  	rect(10,340,570,40);
 	text("Why are you offended?",20,370);
 	textSize(24);
 	textFont('Courier');
 	time+=1;

 }
 if (time > 600) {
 	 	rect(10,340,570,40);
 	text("Don't be so sensitive.",20,370);
 	textSize(24);
 	textFont('Courier');
 	time+=1
	} 
	
	if (time > 850) {
 	 	rect(10,340,570,40);
 	text("It was a compliment for God's sake!",20,370);
 	textSize(24);
 	textFont('Courier');
 	 text("Proceed to next scene", 290, 25);
 	time+=1
	} 
}

