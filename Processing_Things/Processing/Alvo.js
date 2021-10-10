function setup(){
    createCanvas(windowWidth,windowHeight);
    frameRate(1);
}

function draw(){
    background(20,20,50);
    stroke(random(250),random(250),250);
    strokeWeight(1);
    let x=random(height);
    line(0,x,width,x);
    let y=random (width);
    line(y,0,y,height)

    circle(y,x,50);
}