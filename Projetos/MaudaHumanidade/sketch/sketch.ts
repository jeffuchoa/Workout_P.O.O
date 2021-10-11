let uni_img : p5.Image;
let mano_img:p5.Image;
let board_img:p5.Image;
let uni2_img:p5.Image;
let bite_img:p5.Image;
let power_img:p5.Image;
let god_img:p5.Image;
let pow_img:p5.Image;

let uni:Entity;
let mano:Entity;
let board:Board;
let bite:Entity;
let god:good;

let ponto:number=0;
let ti:number=1;
let attack:boolean=false;



class Entity{
  x:number;
  y:number;
  step:number;
  image:p5.Image;

  constructor (x:number,y:number,step:number,image:p5.Image){
    this.x=x;
    this.y=y;
    this.step=step;
    this.image=image;

  }

  draw() {
    image(this.image,this.x*this.step,this.y*this.step,this.step,this.step);
  }

}

class good{
  image:p5.Image;

  constructor(image:p5.Image){
    this.image=image;
  }
  draw(){
    image(this.image,170,150,250,200);
  }
}

class Board{
  nl:number;
  nc:number;
  step:number;
  background:p5.Image

  constructor(nl:number,nc:number,step:number,background:p5.Image){
    this.nl=nl;
    this.nc=nc;
    this.step=step;
    this.background=background;
  }

  draw():void{
    image(this.background,0,0,this.nc*this.step,this.nl*this.step);
    for (let x=0;x<this.nc;x++){
      for (let y=0;y<this.nl;y++){
        noFill();
        stroke(0);
        strokeWeight(2);
        rect(x* this.step,y*this.step,this.step,this.step);
        
      }

    }
  }
}



function imagem(path:string):p5.Image{
  return loadImage(path)
}



function preload(){
  uni_img=imagem('../sketch/uni2.gif') ;
  uni2_img=imagem('../sketch/uni3.gif');
  mano_img=imagem('../sketch/mano.gif');
  board_img=imagem('../sketch/grama.png');
  bite_img=imagem('../sketch/bite.gif');
  power_img=imagem('../sketch/pode.gif');
  god_img=imagem('../sketch/god.gif');
  pow_img=imagem('../sketch/ded.gif');
}



function setup(){
  
  let size =100
  uni= new Entity(0,0,size,uni_img);
  mano= new Entity(int(random(4)),int(random(5)),size,mano_img);
  bite=new Entity(mano.x,mano.y,size,bite_img);
  board=new Board(5,6,size,board_img);
  god= new good(god_img);
  //let canvas =createCanvas(windowWidth,windowHeight);
  setInterval(time, 10000);
  let canvas =createCanvas(board.nc*size,board.nl*size);
  canvas.center();
}

let co:number=0;
let co1:number=0;

function uni_walk(){

if (uni.x-mano.x==-1 || uni.x-mano.x==1 || uni.y-mano.y==-1 ||uni.y-mano.y==1){
  co=uni.x;
  co1=uni.y;
  }

if (uni.x==mano.x && uni.y==mano.y){
  uni.x=co;
  uni.y=co1;
}
if (uni.x==board.nc){
    uni.x=board.nc-1;
}
if (uni.y==board.nl){
    uni.y=board.nl-1;
}
if (uni.x<0){
    uni.x=0;
}
if (uni.y<0){
    uni.y=0;
}
}
function time(){
  let i:number=0;
  i++;
  if (i>=10){
    return true;
  }
}

function draw() {
  background(0);
  if (ponto>10){
    bite.image=power_img;
  }
  if (ponto>=39){
    bite.image=pow_img;
  }
  uni_walk();
  board.draw();
  if (ponto <39){
    uni.draw();
  }
  if (ponto>=39){
    god.draw();

  }
  mano.draw();
  textSize(200);
  text(ponto,200,200);
  //text("Você mordeu",650,200);
  if (attack==true ){
    bite.draw();
    if (frameCount % 60 == 0 && ti > 0) {
      ti--;
    }
    if (ti==0){
      attack=false;

    }
    }
    ti=1;
    }
    

function keyPressed(){
  if (ponto<39){
    if (uni.x-mano.x==-1 && uni.y-mano.y==0 || uni.x-mano.x==1 && uni.y-mano.y==0 || uni.y-mano.y==-1 && uni.x-mano.x==0 ||uni.y-mano.y==1 && uni.x-mano.x==0){
      if (keyCode===32){
        ponto=ponto+1;
        bite.x=mano.x;
        bite.y=mano.y;
        mano.x=int(random(4));
        mano.y=int(random(5));
        attack=true;
      }
  
    if (uni.x==mano.x && uni.y==mano.y){
      if (keyCode===32){
        ponto=ponto+1;
        bite.x=mano.x;
        bite.y=mano.y;
        mano.x=int(random(4));
        mano.y=int(random(5));
        attack=true
        
        
      }
  
    }
    }
  
    if (keyCode===LEFT_ARROW){
      uni.x--;
      uni.image=uni2_img;
     }
  if (keyCode===RIGHT_ARROW){
      uni.x++;
      uni.image=uni_img;
     }
  if (keyCode===UP_ARROW){
      uni.y--;
     }
  if (keyCode===DOWN_ARROW){
      uni.y++;
     }
  }
  if (ponto>=39){
    if (keyCode===32){
        ponto=ponto+1;
        bite.x=mano.x;
        bite.y=mano.y;
        mano.x=int(random(4));
        mano.y=int(random(5));
        attack=true;
  }
  }
}