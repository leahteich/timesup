var img;
var img2;
var x = -100;
var time = 0;
var message;

function preload() { //loads music

  img = loadImage("officeHR.png");
  img2 = loadImage("GIRL.png");
  resourceWoman = loadImage("humanResourcesPerson.png")

}

function setup() {
  createCanvas(600, 400); 
}

function draw() {
  rect(200,200,100,100);
  var moveGirl = true;

 	 time++;


  image(img,0,0,600, 400);
  image(resourceWoman,240,65,200,200);
  image(img2,x+60,90,180,340);
  


 if (keyIsDown(RIGHT_ARROW)) {
 	if (moveGirl)
 		x+=5;
 } 

 if (keyIsDown(LEFT_ARROW)) {
 	if (moveGirl) 
 		x-=5;
 }


 if (time>50) {
 	rect(10,340,580,40);
 	strokeWeight(3);
 	text("Thank you for meeting with me. I would like to file a complaint",20,370);
 	textSize(15);
 	textFont('Courier');
 	moveGirl = false;
 	}

 if (time > 170) {

 	rect(10,340,580,40);
  textSize(15);
 	text("against some of the men in the office who have been sexually",20,370);
 	textFont('Courier');
 }

 if (time > 290) {
  rect(10,340,580,40);
  textSize(15);
 	text("harassing me during work. I get suggestive text messages ",20,370);
 	textFont('Courier');

 }

 if (time > 410) {
    rect(10,340,580,40);
    textSize(15);
  text("from colleagues. And my boss tells me to just get ",20,370);
  textFont('Courier');
 }

 if (time > 530) {
    rect(10,340,580,40);
    textSize(15);
  text("coffee and doesn't recognize my work.",20,370);
  textFont('Courier');
 }
 
if (time > 650) {
   	textStyle(BOLD);
 	rect(10,315,80,40);
 	strokeWeight(3);
 	text("HR",20,335);
 	textSize(24);

 	textFont('Courier');
 }
 push();
 if (time < 650 && time > 50) {
    textStyle(BOLD);
      textFont('Courier');
  textSize(18);
  strokeWeight(3);

  rect(10,315,80,25);
  text("Annie",20,335);

 }
pop();
 if (time > 650) {
   textStyle(NORMAL);
    rect(10,340,580,40);
      textSize(15);
  text("Honey, you're wearing a pencil skirt, I don't know ",20,370);
  textFont('Courier');
 }

  if (time > 770) {
    textStyle(NORMAL);
    rect(10,340,580,40);
      textSize(15);
  text("what you expect. Start working a little harder",20,370);
  textFont('Courier');
 }

 if (time > 970) {
    textFont('Courier');

   textStyle(NORMAL);
    rect(10,340,580,40);
    textSize(15);
  text("and your boss will recognize your efforts.",20,370);
  text("Proceed to 'What Can You Do'", 350, 25);

 }



}