let x_circle=200;
let y_circle=0;
let x_vel=4;
let y_vel=2;

let cor=100;


function setup(){
    createCanvas(windowWidth,windowHeight);
    frameRate();
}

function draw(){
    background(100,150,200);

    x_circle+=x_vel;

    if (x_circle>width){
        x_vel*=-1;
        cor=random(250);

    };

    y_circle+=y_vel;

    if (y_circle>width){
        y_vel*=-1;
        cor=random(250);
    }

    if (y_circle<0){
        y_vel*=-1
        cor=random(250);
    }

    if (x_circle<0){
        x_vel*=-1
        cor=random(250);
    }


    fill(cor,23,230);
    circle(x_circle,y_circle,50);

}