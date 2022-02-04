const readline = require('readline-sync');
let input = (): string => readline.question();
let write = (x : any) => process.stdout.write("" + x);

//let pop:string[]=[" Ficou com tanto sono que caiu no sono eterno"," Ficou com tanta fome que se devorou"," Ficou tão sujo que morreu de desgosto"];
let pop:string=" ---- MORREU ---- "

 
 class tama{
    private nome:string;
    private energy:number;
    private saciedade:number;
    private limpeza:number;
    private idade:number=0;
    private diamante:number=0;

    constructor (energy:number,saciedade:number,limpeza:number,nome:string){
        this.setNome=(nome);
        this.energy=energy;
        this.saciedade=saciedade;
        this.limpeza=limpeza;
        this.idade=0
        this.diamante=0;
    }
    play(){
        if (this.live==true){
        this.taminha.energy=this.taminha.energy-2;
        this.taminha.saciedade=this.taminha.saciedade-1;
        this.taminha.limpeza=this.taminha.limpeza-3;
        this.taminha.diamante=this.taminha.diamante+1;
        this.taminha.idade=this.taminha.idade+1;
        }
        if (this.taminha.energy<=0 || this.taminha.saciedade<=0 || this.taminha.limpeza<=0){

            this.live=false;
        }
        this.toString();

    }

    
    eat(){
        if (this.live==true){

        this.taminha.energy=this.taminha.energy-1;
        this.taminha.saciedade=this.taminha.saciedade+4;
        this.taminha.limpeza=this.taminha.limpeza-2;
        this.taminha.idade=this.taminha.idade+1;
        }

        if (this.taminha.energy<=0 || this.taminha.saciedade<=0 || this.taminha.limpeza<=0){

            this.live=false;
        }
        this.toString();
    }
    sleep(){
        if (this.live==true){
            if(this.taminha.energy==this.taminha.energy-5){
                this.taminha.energy=this.max.energy;
                this.taminha.idade=this.taminha.idade+1;
        
    }
            else{
                console.log ("Fail : "+this.taminha.nome+" não está com sono");
            }
        }
        if (this.taminha.energy<=0 || this.taminha.saciedade<=0 || this.taminha.limpeza<=0){
            this.live=false;
        }
        this.toString();

    }
    clean(){
        this.taminha.energy=this.taminha.energy-1;
        this.taminha.saciedade=this.taminha.saciedade-1;
        this.taminha.limpeza=this.max.limpeza;
        this.taminha.idade=this.taminha.idade+2;
        this.toString();

    }

    public toString() {
        if (this.live==true){
        let result:string=this.taminha.nome+" => "+"Energia: "+this.taminha.energy+" | "+ "Saciedade: "+this.taminha.saciedade+" | "+"Limpeza: "+this.taminha.limpeza+" | "+"Idade: "+this.taminha.idade+" |";
        return result;
        }
        if (this.live==false){
        let ded:string=this.taminha.nome+pop;
        return ded
        }
    }

}
    public setNome(nome: string) {
        if (nome.length == 0) {
            this.nome = "bichinho";
        } else {
            this.nome = nome;
        }
    }
}

class IO{

    nasceu():tama{
        write("Dê um nome para a criança!");
        let nome=input();
        write(nome+ " Que nome bonito mds :)");
        let pet=new tama(20,20,20,nome);
        return pet;
    }

    help(){

        write("Comandos:\n");
        write("  init <nome> <maxsaciedade>: cria um novo pet\n");
        write("  show: mostra o pet\n");
        write("  play: faz o pet brincar\n");
        write("  eat: faz o pet comer\n");
        write("  faz o Pet tomar banho\n");
        write("  end: sai do programa\n");
    }
    shell() {
        let pet = new tama(0, 0,0,"");//this.create_pet();
        this.help();
        while (true) {
            write("$ ");
            let line = input();
            let words = line.split(" ");
            if (words[0] == "end") {
                break;
            } else if (words[0] == "help") {
                this.help();
            } else if (words[0] == "show") {
                write("" + pet + "\n");
            } else if (words[0] == "eat") {
                pet.eat();
            } else if (words[0] == "play") {
                pet.brincar();
            } else if (words[0] == "init") {
                let nome = words[1];
                let sacMax = +words[2];
                pet = new Pet(nome, sacMax);
            } else {
                console.log("Comando inválido");
            }
        }
}
class jogo{
    taminha:tama;
    max:tama;
    live:boolean;

    constructor(taminha:tama){
        this.taminha=taminha;
        this.max=taminha;
        this.live=true;

        let id:number
    }
    play(){
        if (this.live==true){
        this.taminha.energy=this.taminha.energy-2;
        this.taminha.saciedade=this.taminha.saciedade-1;
        this.taminha.limpeza=this.taminha.limpeza-3;
        this.taminha.diamante=this.taminha.diamante+1;
        this.taminha.idade=this.taminha.idade+1;
        }
        if (this.taminha.energy<=0 || this.taminha.saciedade<=0 || this.taminha.limpeza<=0){

            this.live=false;
        }
        this.toString();

    }

    
    eat(){
        if (this.live==true){

        this.taminha.energy=this.taminha.energy-1;
        this.taminha.saciedade=this.taminha.saciedade+4;
        this.taminha.limpeza=this.taminha.limpeza-2;
        this.taminha.idade=this.taminha.idade+1;
        }

        if (this.taminha.energy<=0 || this.taminha.saciedade<=0 || this.taminha.limpeza<=0){

            this.live=false;
        }
        this.toString();
    }
    sleep(){
        if (this.live==true){
            if(this.taminha.energy==this.taminha.energy-5){
                this.taminha.energy=this.max.energy;
                this.taminha.idade=this.taminha.idade+1;
        
    }
            else{
                console.log ("Fail : "+this.taminha.nome+" não está com sono");
            }
        }
        if (this.taminha.energy<=0 || this.taminha.saciedade<=0 || this.taminha.limpeza<=0){
            this.live=false;
        }
        this.toString();

    }
    clean(){
        this.taminha.energy=this.taminha.energy-1;
        this.taminha.saciedade=this.taminha.saciedade-1;
        this.taminha.limpeza=this.max.limpeza;
        this.taminha.idade=this.taminha.idade+2;
        this.toString();

    }

    public toString() {
        if (this.live==true){
        let result:string=this.taminha.nome+" => "+"Energia: "+this.taminha.energy+" | "+ "Saciedade: "+this.taminha.saciedade+" | "+"Limpeza: "+this.taminha.limpeza+" | "+"Idade: "+this.taminha.idade+" |";
        return result;
        }
        if (this.live==false){
        let ded:string=this.taminha.nome+pop;
        return ded
        }
    }

}

let a=new tama(20,20,20,"albertinho");
let b=new jogo(a);
console.log(""+b);
b.play();
b.play();
b.play();
b.play();
b.play();
b.play();
b.play();
b.play();

console.log(""+b);