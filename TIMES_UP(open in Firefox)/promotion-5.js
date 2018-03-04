var img;
var img2;
var x = -100;
var time = 0;
var message;

function preload() { //loads music

  img = loadImage("office.png");
  img2 = loadImage("GIRL.png");
  boss = loadImage("colleague.png")

}

function setup() {
  createCanvas(600, 400); 
}

function draw() {
  var moveGirl = true;

 	 time++;

  image(img,0,0,600, 400);
  image(img2,x+60,90,180,340);


 if (keyIsDown(RIGHT_ARROW)) {
 	if (moveGirl)
 		x+=5;
 } 

 if (keyIsDown(LEFT_ARROW)) {
 	if (moveGirl) 
 		x-=5;
 }


 if (time>0) {
 	rect(10,340,580,40);
 	strokeWeight(3);
 	text("I'm nervous...the boss could be here any minute.",20,370);
 	textSize(18);
 	textFont('Courier');
 	moveGirl = false;
 	}

if (time>250 && time<400 || time>1000){
  textStyle(BOLD);
 	rect(10,315,80,40);
 	strokeWeight(3);
 	text("Boss",20,335);
 	textSize(24);

 	textFont('Courier');
}
push();
if (time<250|| time>400 && time <1000){
  textStyle(BOLD);
  rect(10,315,80,25);
  strokeWeight(3);
  text("Annie",20,335);
  textSize(24);

  textFont('Courier');
}
pop();

 if (time > 250) {
   textStyle(NORMAL)
  image(boss,300,70,400,400);

 	rect(10,340,580,40);
  textSize(16);
 	text("Annie, how will you waste my time today?",20,370);
 	textFont('Courier');
 }

 if (time > 400) {
    textStyle(NORMAL)
  rect(10,340,580,40);
  textSize(20);
 	text("I believe I deserve a promotion.",20,370);
 	textFont('Courier');

 }

 if (time > 600) {
    textStyle(NORMAL)
    rect(10,340,580,40);
    textSize(18);
  text("I work harder than anyone. I'm never late.",20,370);
  textFont('Courier');
 }

 if (time > 800) {
    textStyle(NORMAL)
    rect(10,340,580,40);
    textSize(20);
  text("I've made over 200% in profits this year alone.",20,370);
  textFont('Courier');
 }

 if (time > 1000) {
    textStyle(NORMAL)
    rect(10,340,580,40);
      textSize(16);
  text("I'd give you this job, but it's more of a ‘mans job.’",20,370);
  textFont('Courier');
 }

  if (time > 1200) {
     textStyle(NORMAL)
    rect(10,340,580,40);
      textSize(17);
  text("Just stick to getting us coffee. Keep up the good work!",20,370);
  text("Proceed to next scene", 350, 25);

   }




}



