var h = 640;
var w = 640;
var dotsW = new Array(w);
var angle1 = new Array(w);
var angle2 = new Array(w);
var angle3 = new Array(w);

function setup () {
  createCanvas(w, h);
  strokeWeight(3);
  frameRate(60);
  for (var i = 0; i < w; i++) {
    dotsW[i] = i * 9;
    angle1[i] = i * 0.05;
    angle2[i] = angle1[i];
    angle3[i] = angle2[i];
  }
}

function draw () {
  background(100);
  for (var i = 0; i < w; i++) {
    var y1 = (sin(angle1[i]) * h/4) + h/3;
    var y2 = (sin(angle2[i]) * h/5) + h/3;
    var y3 = (sin(angle3[i]) * h/6) + h/3;
    stroke(0, 177, 89);
    line(dotsW[i], y1, dotsW[i], 100 + y2);
    stroke(89, 0, 177);
    line(3 + dotsW[i], 150 + y2, 3 + dotsW[i], y3);
    stroke(177, 89, 0);
    line(6 + dotsW[i], 200 + y3 , 6 + dotsW[i], y1);
    angle1[i] += 0.02;
    angle2[i] += 0.03;
    angle3[i] += 0.04;
  }
}
