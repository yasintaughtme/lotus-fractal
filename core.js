// 001: set global variables_
let x;
let y;
let waveX;
let waveY;
let negX;
let negY;

let n;


function setup() {
  let canvas = createCanvas(1000, 1000);
  canvas.id('canvas');

  envX = 600;
  envY = 600;

  // Code Lab_
  background(33);
  x = 500;
  y = 500;
  waveX = 0;
  waveY = 100;
}

function draw() {
  // e.build();
  
  let n = 16;
  for (let i = 0; i < n; i++) {
    // 002: declare perlin noise_
    nX = noise(waveX+100*i);
    nY = noise(waveY+100*i);
    waveX += 0.001;
    waveY += 0.001;

    // 003: map pn to environment_
    minX = (width-envX) / 2;
    maxX = (width+envX) / 2;
    minY = (height-envY) / 2;
    maxY = (height+envY) / 2;

    x = map(nX, 0, 1, minX, maxX);
    y = map(nY, 0, 1, minY, maxY);
    
    // 004: create alternate fractal_
    negX = map(nX, 0, 1, maxX, minX);
    negY = map(nY, 0, 1, maxY, minY);


    // 005: generate explorer_  
    push();
      // Cool Tones
      let redN = noise(0)*i;
      let red = map(redN, 0, 1, 100, 150);
      let greenN = noise(100)*i;
      let green = map(greenN, 0, 1, 0, 40);
      let blueN = noise(200)*i;
      let blue = map(blueN, 0, 1, 100, 225);

      fill(red, green, blue);

      let sizeN = noise(100)*i;
      let size = map(sizeN, 0, 1, 0.8, 1);

      ellipseMode(CENTER);
      noStroke();
      // Negative Variant
      ellipse(x, y, size, size);
      ellipse(negX, y, size, size);
      
      // Invert Variant
      ellipse(negX, negY, size, size);
      ellipse(x, negY, size, size);

      // Angle Variant
      ellipse(y, x, size, size);
      ellipse(y, negX, size, size);
      ellipse(negY, negX, size, size);
      ellipse(negY, x, size, size);

    pop();
  }
  

}