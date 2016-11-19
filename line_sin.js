 var h = window.innerHeight;
 var w = window.innerWidth;
 
 var dotsW = new Array(w);
 var angle1 = new Array(w);
 var angle2 = new Array(w);

function setup () {
  createCanvas(w, h);
  strokeWeight(5);
  frameRate(60);
  for (var i = 0; i < w; i++) {
   dotsW[i] = i * 20;
   angle1[i] = i * 0.05;
   angle2[i] = angle1[i];
 }
}

function draw () {
  background(100);
  for (var i = 0; i < w; i++) {
    var y1 = (sin(angle1[i]) * h/3) + h/2;
    var y2 = (sin(angle2[i]) * h/3) + h/2;
    stroke(200,200,0);
    line(dotsW[i],y1,dotsW[i],100 + y2);
    stroke(0,200,200);
    line(10 + dotsW[i],100 + y1,10 + dotsW[i],y2);
    angle1[i] += 0.01;
    angle2[i] += 0.04;
  }
}