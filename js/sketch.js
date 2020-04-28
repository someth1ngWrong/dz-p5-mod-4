let box = {
  x: 0,
  y: 0
}

let extraCanvas;


function setup() {
  createCanvas(windowWidth, windowHeight);
  background(255);
  box.x = width / 2;
  box.y = height / 2;

}

function draw() {

  let mapX = map (mouseX, 0, width, -2, 2);
  let mapY = map (mouseY, 0, height, -2, 2);
  box.x = box.x + random(-3, 3) + mapX ;
  box.y = box.y + random(-3, 3) + mapY ;
  ellipse(box.x, box.y, 50, 50);

  if (mouseIsPressed) {
      fill(random(0,255),random(0,255),random(0,255));

  } else {
      fill(255);

  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
