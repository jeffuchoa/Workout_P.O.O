let x_circle=0;
let x_rect=0;

function setup(){
    createCanvas(windowWidth,windowHeight);
    frameRate();
}

function draw(){
    background(0,0,50);
    //noStroke(); retirar as linhas

    //carinha que eu fiz
    
    rectMode(CENTER);
    fill(random(250),random(250),250);
    rect(width/2,(height/2)-180,200,10);
    rect(height-100,100,100,150);
    rect(height-580,100,100,150);
    
    //Corrida entre formas geometricas com reset 

    let tam=50;

    x_circle=x_circle+1;

    if (x_circle>width){
        x_circle=0;
    }

    // Probabilidades:

    if (random(100)<9){  // a cada 9% de chance do circulo mudar seu tamanho. random por 10 seria 50% etc
        tam=40;

    }
    fill(200,10,100)
    circle(x_circle,330,tam)

    x_rect=x_rect+2;

    if (x_rect>width){
        x_rect=0;
    }

    let cor=(150);

    if (random(100)<10){
        cor=20;
       
    }

    rectMode(CENTER);
    fill(150,20,cor)
    rect(x_rect,400,50,50);
}