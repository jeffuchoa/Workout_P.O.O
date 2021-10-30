let bubble_img:p5.Image;
let font:p5.Font;
let back:p5.Image;

let game:Game;

let hit:number=0;
let fase:string[]=["bolha","abelha","paralelepipedo","amidalou"];
let x_fase:number=0;
let x_letra:number=0;
let times:number[]=[3000,4000,4200];
let cor:string="";

let alinha:number[]=[225,250,570]
let cont:number=0


function imagem(path:string):p5.Image{
    return loadImage(path)
  }
  
  
  
  function preload(){
    bubble_img=imagem('../sketch/bolha.gif') ;
    font=loadFont('../sketch/fip.otf');
    back=imagem('../sketch/back4.gif');
  }

class Bubble{
    x:number;
    y:number;
    letra:string;
    velo:number;
    image:p5.Image;
    static radius:number=20;
    vivo:boolean=true;

    constructor(x:number,y:number,letra:string,velo:number,image:p5.Image){
        this.x=x;
        this.y=y;
        this.letra=letra;
        this.velo=velo;
        this.image=image;
    }

    update():void{
        this.y+=this.velo;

    }

    draw():void{
        image(this.image,this.x,this.y,60,60);
        fill(225,225,225);
        stroke(0);
        textSize(25);
        text(this.letra,this.x+15,this.y+40);

    }

}

class Board{
    bubbles:Bubble[]=[];
    timeout:number=30;
    timer:number=0;
    beto:string[]=[];

    hits:number=0;
    erro:number=0;

    constructor(){
        

    }

    update():void{
        this.checkbolha();
        this.markBubble();
        this.time();

        for(let bubble of this.bubbles){
            bubble.update();
        }
        this.bubblePop();

    }
    bubblePop():void{
        this.bubbles=this.bubbles.filter(b=>b.vivo);
        
    }
    removeHit(code:number):void{
        for (let bubble of this.bubbles){
            if (bubble.letra[0].toUpperCase().charCodeAt(0)==code && bubble.letra[0]==fase[x_fase][x_letra]){
                hit+=1;
                cor+=fase[x_fase][x_letra];
                x_letra+=1;
                
                if(hit==fase[x_fase].length){
                    cont=cont+1;
                    x_fase=x_fase+1;
                    cor="";
                    x_letra=0;
                    hit=0;

                }
                bubble.vivo=false;
                break;
            }
        }
    }
    checkbolha(): void{
        this.timer-=1;
        if(this.timer<=0){
            this.addBubble();
            this.timer=this.timeout;

        }
    }
    addBubble():void{
        let x=random(0,width-2*Bubble.radius);
        let y=-2*Bubble.radius;
        let letter=["bolha?wmisbolhazj","abelha?!qwertabelhakjhgf","paralelepipedozxparalelepipedosa"];
        let velo=random(1,3);
        let bubble=new Bubble(x,y,letter[x_fase][int(random(letter[x_fase].length))],velo,bubble_img);
        this.bubbles.push(bubble);
    }

    markBubble():void{
        for (let bubble of this.bubbles){
            if(bubble.y+2*Bubble.radius>=height){
                bubble.vivo=false;

        }
    }
}
    time():number{
    let timiout:number=0;

        if (times[x_fase]>=0){
            times[x_fase]-=1;
        }
    return times[x_fase];

}

    draw(): void {
        fill(225,225,225);
        textSize(40);
        textFont(font);
        text('Tempo  '+int((this.time()/30)),(windowWidth/2)-150,windowHeight-(windowHeight-50));
        fill(128,128,128);
        textSize(100);
        text (fase[x_fase],(windowWidth/2)-alinha[cont],windowHeight);
        fill(65,105,225);
        text (cor,(windowWidth/2)-alinha[cont],windowHeight);
        for (let bubble of this.bubbles){
            bubble.draw();
        }

    }
    
}


class Game{
    activeFunction: ()=>void;
    board:Board;

    constructor(){
        this.board = new Board();
        this.activeFunction=this.gamePlay;


    }
    update():void{
        this.board.update();
        
    }
    draw():void{
        background(0,0,0);
        this.board.draw
    }

    winer(){
        frameRate(6)
        background(int(random(0,255)),int(random(0,255)),int(random(0,255)));
        fill(int(random(0,255)),int(random(0,255)),int(random(0,255)));
        textSize(300);
        textFont(font);
        text("Parabéns!",windowWidth/2-650,windowHeight/2);
        fill(int(random(0,255)),int(random(0,255)),int(random(0,255)));
        text(":)",windowWidth/2-100,windowHeight/2+300);
    }

    gamePlay(){
        this.board.update();
        background(back);
        this.board.draw();

        if (times[x_fase]==0){
            this.activeFunction=this.gameOver;
            times=[3800,4000,4200];
            x_fase=0;
            x_letra=0;
        }

        else if  (x_fase==3){
            this.activeFunction=this.winer;
        }
        

    }

    restart(code:number):void{

    }
    

    gameOver():void{
        background(255,0,0);
        fill(0);
        textSize(100);
        text("Game Over",(windowWidth/2)-400,(windowHeight/2)-260);
        fill(0);
        textSize(200);
        text(":c",(windowWidth/2)-100,(windowHeight/2)+50);
        fill(0);
        textSize(28);
        text("Que triste",(windowWidth/2)-55,(windowHeight/2)+200);
        text("Aperte a barra de espaço para reiniciar o jogo",(windowWidth/2)-450,(windowHeight/2)+400);

        if(keyCode==32){
            this.activeFunction=this.gamePlay;
            times=[3800,4000,4200];
            x_letra=0;
            x_fase=0;
            cor="";
            hit=0;
            cont=0
        }

    }
}

function setup(){
    frameRate(30);
    //let a =createCanvas(700,600);
    //var x = (windowWidth - width) / 2;
    //var y = (windowHeight - height) / 2;
    //a.position(x, y);

    let b =createCanvas(windowWidth,windowHeight);

    game=new Game()
}
function keyPressed(){
    game.board.removeHit(keyCode);
    game.restart(keyCode)
}
function draw(){
    background(color(0,0,0));
    game.update();
    game.activeFunction();
}