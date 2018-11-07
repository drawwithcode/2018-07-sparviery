var mic;
var capture;

function setup() {
  createCanvas(windowWidth, windowHeight);
angleMode(DEGREES);
frameRate(10);


  // Create an Audio input
  mic = new p5.AudioIn();

  // start the Audio Input.
  mic.start();

  capture = createCapture(VIDEO);
    capture.size(640, 480);
    capture.hide();
}

function draw() {

  background(220);

  //
  var vol = mic.getLevel();

  push();
  translate(width/2, height/2);
  rotate((frameCount)*(vol*1000));
  var r=200;
  for(var a=0; a<360; a += 60){

    var x = r*cos(a);
    var y = r*sin(a);
    imageMode(CENTER);
    noStroke();
    var myImage = capture.loadPixels();
    image(myImage, x, y, 64+(vol*640), 48+(vol*480));
}
  pop();

push();
      translate(width/2, height/2);
      textSize(20);
      textAlign(CENTER);
      text('SHOUT TO SPIN', 0 , 0);
pop();
}
