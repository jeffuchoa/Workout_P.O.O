function setup(){
    createCanvas(windowWidth,windowHeight);
    frameRate(50); // serve para diminuir a velocidade dos frames
}

function draw(){
    stroke(random(250),random(250),250);
    strokeWeight(1);
    line(width/2,height/2,random(width),random(height));
}