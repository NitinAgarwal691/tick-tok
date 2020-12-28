var hour,minutes,seconds;

var sc = 24;

function setup() {
  createCanvas(800,400);
  hour=hour();
  minutes=minute();
  seconds=second();
  angleMode(DEGREES)
}

function draw() {
  background(255,255,255);
  scAngle= map(sc,0,60,0,360);
  stroke(255,0,0);
  strokeWeight(7);
  line(0,0,100,0);  
  drawSprites();
}