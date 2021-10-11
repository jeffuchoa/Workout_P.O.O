let sketch=function (jogo:any){
  let x=100;
  let y=100;

  let size =100
  uni= new Entity(0,0,size,uni_img);
  mano= new Entity(int(random(4)),int(random(5)),size,mano_img);
  bite=new Entity(mano.x,mano.y,size,bite_img);
  board=new Board(5,6,size,board_img);
  let canvas =createCanvas(board.nc*size,board.nl*size);
  canvas.center();
}
let uni_img : p5.Image;
let mano_img:p5.Image;
let board_img:p5.Image;
let uni2_img:p5.Image;
let bite_img:p5.Image;

let uni:Entity;
let mano:Entity;
let board:Board;
let bite:Entity;

let ponto:number=0;



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
}




  let size =100
  uni= new Entity(0,0,size,uni_img);
  mano= new Entity(int(random(4)),int(random(5)),size,mano_img);
  bite=new Entity(mano.x,mano.y,size,bite_img);
  board=new Board(5,6,size,board_img);
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

function draw() {
  background(0);
  uni_walk();
  board.draw();
  uni.draw();
  mano.draw();
  textSize(200)
  text(ponto,200,200);
}


function keyPressed(){
  if (uni.x-mano.x==-1 && uni.y-mano.y==0 || uni.x-mano.x==1 && uni.y-mano.y==0 || uni.y-mano.y==-1 && uni.x-mano.x==0 ||uni.y-mano.y==1 && uni.x-mano.x==0){
    if (keyCode===32){
      ponto=ponto+1;
      mano.x=int(random(4));
      mano.y=int(random(5));
      bite.x=mano.x;
      bite.y=mano.y;
      function draw (){
        bite.draw();
      }
    }

  if (uni.x==mano.x && uni.y==mano.y){
    if (keyCode===32){
      ponto=ponto+1;
      mano.x=int(random(4));
      mano.y=int(random(5));
      bite.x=mano.x;
      bite.y=mano.y;
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

