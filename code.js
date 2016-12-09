var c;
var e;

function setup() {
createCanvas(500,500);
 frameRate(10);
 c = color(255, 255, 255);
 e = color(255, 255, 255);
 
}

function draw() {
  background(c);
  
  fill(0);
  text('Drück R, G, B um den Hintergrund zu verändern', width/4,height/4);
  fill(e); //füllung ellipses 
  //e = color(255,50);
  ellipse(mouseX+80,mouseY+80,pmouseX, pmouseY);
  ellipse(mouseX-80,mouseY-80,pmouseX, pmouseY);
  ellipse(mouseX,mouseY,pmouseX, pmouseY);
  
}

function keyPressed(){
  //r = rot
  if (key == 'r' || key == 'R'){
  c = color(255,0,0);
  
  e = color(217,0,0,90);
  }

  //g = grün
  if (key == 'g' || key == 'G'){
  c = color(0,255,0);
  e = color(0,125,0,90);
  }

  //b = blau
  if (key == 'b' || key == 'B'){
  c = color(0,0,255);
  e = color(0,145,200,90);
  }
}
