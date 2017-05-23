var h = 600;
var w = 800;

var angle = new Array(w);
var lines = new Array(w);

function setup () {
  createCanvas(w, h);
  strokeWeight(10);
  frameRate(60);
  for (var i = 0; i < w; i++) {
    lines[i] = i * 25;
    angle[i] = i * 0.2;
  }
}

function draw () {
  background(50);
      stroke(100,100,100);
  for (var p = -500; p <= 500; p += 20) {
    wave(p);
  }
}

function wave(pos) {
  for (var i = 0; i < w; i++) {
    var y = (sin(angle[i]) * h / 10) + h / 2;
    y = y + pos;
    line(lines[i], y, lines[i], y);
    angle[i] += 0.0002;
  }
}