const nl=6;
const nc=6;

const lado=50;
let snake_x=0;
let snake_y=0;

let snake_co;
let cell_co;

let timer=0;

let snake_vx=0;
let snake_vy=0;

let maca_x=0;
let maca_y=0;
let maca_co;

let ponto=0;


function setup(){
    createCanvas(nl*lado,nc*lado);
    snake_co= color("green");
    cell_co=("blue");
    maca_co= color ("red");
    maca_x=parseInt(random(0,nc));
    maca_y=parseInt(random(0,nl));
    
}


function draw_cell(x,y,co){
    noStroke( );
    fill(co);
    square(x*lado+1,y*lado+1,lado-1);
}


function draw_mat(){
    fill(50,0,150);

    for (let c=0; c<nl;c++){
        for (let i =0; i<nc;i++){
            draw_cell(c,i,cell_co);
        }

    }
    
}


function snake_walk(){
    if (snake_x==nc){
        snake_x=0;
    }
    if (snake_y==nl){
        snake_y=0;
    }
    if (snake_x<0){
        snake_x=nc-1
    }
    if (snake_y<0){
        snake_y=nl-1
    }

}

function snake_walki(){
    if(frameCount-timer>50){
        timer=frameCount;
        snake_x+=snake_vx;
        snake_y+=snake_vy;
    }
}


function pega_pega(){
    if( snake_x==maca_x && snake_y==maca_y){
        maca_x=parseInt(random(0,nc));
        maca_y=parseInt(random(0,nl));
        ponto+=1;
    }
}
function draw(){
    snake_walki();
    snake_walk();
    pega_pega();
    background(0,0,50);
    draw_mat();
    square(snake_x*lado,snake_y*lado,lado);
    draw_cell(maca_x,maca_y,maca_co);
    draw_cell(snake_x,snake_y,snake_co);

    fill(250);
    textSize(30);
    text(ponto,260,290)
}


function keyPressed(){
    if (keyCode===LEFT_ARROW){
        snake_vx=-1;
        snake_vy=0;
    }
    if (keyCode===RIGHT_ARROW){
        snake_vx=1;
        snake_vy=0;
    }
    if (keyCode===UP_ARROW){
        snake_vy=-1;
        snake_vx=0;
    }
    if (keyCode===DOWN_ARROW){
        snake_vy=1;
        snake_vx=0;
    }
}
