
let angle = 0;
let w = 25;
let magic;
let maxD;

function setup() {
  createCanvas(400, 400, WEBGL);
  magic = atan(1 / sqrt(2));
  maxD = dist(0, 0, 200, 200);
}


function draw() {
  background(100);
  ortho(-400, 400, -400, 400, 0, 1000);
  ambientLight(255, 255, 255, 0);

  rotateX(-QUARTER_PI);
  rotateY(magic);


  let offset = 0;
  for (let z = 0; z < height; z += w) {
    for (let x = 0; x < width; x += w) {
      push();
      let d = dist(x, z, width / 2, height / 2);
      let offset = map(d, 0, maxD, -PI, PI);
      let a = angle + offset;
      let h = map(sin(a), -1, 1, 100, 300);
      normalMaterial();
      translate(x - width / 2.1, 0, z - height / 2);
      box(w - 2, h, w - 2);
      //rect(x - width / 2 + w / 2, 0, w - 2, h);
      pop();
    }
    offset += 0.1;
  }
  angle -= 0.08;
}
