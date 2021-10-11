function setup(){ // sempre execultado apenas uma vez no início do código
    
    createCanvas(windowWidth,windowHeight);
}
function draw(){ // usado a cada "frame" do código
    
    //background(3,300,0); // se reitrar o background a tela não será repintada e os frames da "animação" ficarão a mostra
    
    point (random(width),random(height)); // usar um numero aleatório do canvas pra adicionar pontinhos
    stroke(255,255,255);
    
}