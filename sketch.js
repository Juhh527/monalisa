function setup() {
  createCanvas(400, 400);
}
let olhoX;
let olhoY;

function draw() {
    background('#491551');
    fill('#BCAABF');
    circle(200, 200, 300);//rosto
    fill('white');
    circle(150, 150, 70);//olho esquerdo
    circle(250, 150, 70);//olho direito
    line(170, 290, 250, 280);//boca
    fill('pink')
    triangle(200, 180, 180, 240, 220, 240);//nariz
    line(123,115,178,113);//sobrancelha esquerda
    line(225,117,279,113);//sobrancelha direita
    //circle(150,150,10);//pupila esquerda
    //circle(250,150,10);//pupila direita
  
    olhoX=map(mouseX,0,400,130,170);
    olhoY=map(mouseY,0,400,130,170)
  
    circle(olhoX,olhoY,30);//nova pupila esquerda
    circle(olhoX+100,olhoY,30);//nova pupila direita

    if (mouseIsPressed) {
        console.log(mouseX, mouseY);
    }
}
