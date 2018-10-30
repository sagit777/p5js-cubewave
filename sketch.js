var cols, rows;
var scl = 20;

function setup() {
  createCanvas(600, 600, P2D);
  var w = 600;
  var h = 600;
  cols = w / scl;
  rows = h / scl;
  console.log(cols);
  console.log(rows);


}


function draw() {
  background(0);

  for (var x = 0; x < cols; x++) {
    for (var y = 0; y < rows; y++) {
      stroke(255);
      noFill();
      rect(x * scl, y * scl, scl, scl);
    }
  }


}
