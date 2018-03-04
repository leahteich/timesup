var img;
var img2;
var img3;
var img4;
var img5;
var whenTime = 0;


function preload() { //loads music
  soundFormats('mp3');
  mySound = loadSound('ClockAlarm.mp3');
  img = loadImage("bedroom.png");
  img2 = loadImage("GIRL.png");
  img3 = loadImage("thoughtbubble.png");
  img4 = loadImage("clock.png");
  img5 = loadImage("clockRinging.png");

}


function setup() {
  

  createCanvas(600, 400); //creates canvas
  textSize(20);
 textFont('Courier');
  //fish button
}

function draw() {
	//image(img3, 355,65);
var x = 0;
moveGirl = true;

strokeWeight(4);

 if (keyIsDown(RIGHT_ARROW)) {
 	if (moveGirl)
 		x+=5;
 } 

 if (keyIsDown(LEFT_ARROW)) {
 	if (moveGirl) 
 		x-=5;
 }

	whenTime = whenTime + 1;
	image(img,0,0,600, 400);
  	image(img4,40,125,100,100);
  	//image(img3,350,70, 150,100);
	  	image(img2,x,100);

	if (whenTime > 60 && whenTime < 380)
	{
	rect(10,340,570,40);
	//image(img3,350,70, 150,100);
	if (whenTime > 60 && whenTime <180)
	{
	text("Should I wear heels?",20,370);
}	
if (whenTime> 180 && whenTime <280)
	{
	text("Uhh, but Dan always....", 20,370);
}	
if (whenTime> 280 && whenTime <460)
	{
	text("Is this skirt too short?", 20,370); 
}
if (whenTime > 460 && whenTime < 580 )	
{
	text("Do I have to wear a pantsuit?", 20,370);
}
}

if (whenTime > 480 && whenTime < 600)
{
//image(img3,350,70, 150,100);
rect(10,340,570,40);
text("Ughhhh...", 20,370);
/*button = createButton('Wear a skirt'); //button for piranha
button.position(600, 250);
button.mousePressed(skirt);

pants = createButton('Wear pants'); //button for piranha
pants.position(600, 280);
pants.mousePressed(wearPants);
 // background(113, 244, 255); //blue color for water
}
*/	
}
if (whenTime > 600 && whenTime < 700) {
	//mySound.setVolume(0.1); //sets volume
	//mysound.play();
	rect(10,340,570,40);
	img4 = img5;
	text("Shoot...I've got to go.", 20,370);
	}
	
	if (whenTime > 700) {

	 text("Proceed to next scene", 340, 370);

	}
}

/* function wearPants() { //plays bubbles sound and calls function createGoldfish
	console.log("HI I am pants");
	rect(200,200,20,20);
	img4 = loadImage("girlcropped.png");
	image(img4,200,200);

}

function skirt()
{
	img4 = loadImage("girlcropped.png");
	return img4;

}
*/
