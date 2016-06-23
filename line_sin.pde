float[] angle1;
float[] angle2;
float[] dotsW;
int h;
int w;


void setup () {
 size(640,640,P3D);
 strokeWeight(5);
 frameRate(30);
 h = height;
 w = width;
 
 dotsW = new float[w];
 angle1 = new float[w];
 angle2 = new float[w];
 for (int i = 0; i < w; i++) {
  dotsW[i] = i * 20;
  angle1[i] = i * 0.05;
  angle2[i] = angle1[i];
 }
 
}

void draw () {
  background(100);
  
  for (int i = 0; i < w; i++) {
    float y1 = (sin(angle1[i]) * h/3) + h/2;
    float y2 = (sin(angle2[i]) * h/3) + h/2;
    stroke(200,200,0);
    line(dotsW[i],y1,dotsW[i],100 + y2);
    stroke(0,200,200);
    line(10 + dotsW[i],100 + y1,10 + dotsW[i],y2);
    angle1[i] += 0.01;
    angle2[i] += 0.04;
  }
  
}
