const readline = require('readline-sync');
let input = (): any => readline.question();
let write = (x : any) => process.stdout.write("" + x);

class cliente {
    nome:string;
    id:number;
    tele:number;
    idd:number;

    constructor(id:number, tele:number,nome:string,idd:number) {
        this.id = id; //acento
        this.tele = tele;
        this.nome = nome;
        this.idd=idd;
    }
    
    public toString():string{
        return this.nome +" : "+this.idd;
    }

}

class cinema{
    acent:Array <cliente| null>;
    

    constructor(){
        this.acent =[]
    }

    sala(x:number){
        if(this.acent.length > 0){
            this.acent=[]
        }
        for (var i=0; i<x;i++){
            this.acent.push(null);
        }

    }

    reserv(x:cliente){
        if(this.acent.length <x.id){
            console.log("Cadeira inválida");
        }


        if(this.acent[(x.id)-1]==null){
           this.acent[(x.id)-1]=x;
        }

        else if (this.acent[(x.id)-1]!= null){
            console.log (this.acent[(x.id)-1]+" Já está no lugar, Infelizmente você não pode sentar no colo desse cliente :(");
        }
    }

    cancelar(x:number){

        for(let id of this.acent){
            if(id==null){
                
            }

            else if(x==id.idd){
                console.log(id.nome+" Foi cancelada, não volte mais ")
                this.acent[(id.id)-1]=null;
            }
        }
    }



    public toString() {
        let str = "cadeiras: | ";
        for (let i = 0; i < this.acent.length; i++) {
            let pessoa = this.acent[i];
            str += (i+1) + ": ";
            if (pessoa == null) {
                str += "----";
            } else {
                str += pessoa.toString();
            }
            str += " |";
        }

        return str;
    }
}




class IO {
    cine:cinema;

    constructor(cine:cinema){
        this.cine=cine;
    }
    cliente(){
        write("Digite seu nome ");
        let nome = input();
        write("Digite seu telefone ");
        let telefone=input();
        write("Digite a cadeira que deseja reservar ");
        let id=input();
        write("Digite seu ID ");
        let idd=input();
        let cliento = new cliente(id,telefone,nome,idd);
        this.cine.reserv(cliento);
        
    }

    mostrar_help() {
        write("Comandos:\n");
        write("  new  : Nova sala de cinema \n");
        write("  res  : Reservar cadeira no cinema \n");
        write("  cance: Cancelar reserva com ID\n");
        write("  show : Mostrar sala de cinema \n");
    }

    shell() {
        this.mostrar_help();
        while (true) {
            write("$ ");
            let line = input();
            let words = line.split(" ");
            if (words[0] == "end") {
                break;
            } else if (words[0] == "help") { 
                this.mostrar_help();
            } else if (words[0] == "show") { 
                write("" + this.cine + "\n");
            } else if (words[0] == "new") { 
                write("Digite quantas cadeiras hávera no cinema ")
                let cad=input();
                this.cine.sala(cad);
            } else if (words[0] == "res") { 
                this.cliente();
            } else if (words[0] == "cance") { 
                write("Digite o ID do cancelamento ")
                let ii=input();
                this.cine.cancelar(ii);
            } else {
                console.log("Comando inválido");
            }
        }
    }

}
let a:cinema = new cinema();
let io = new IO(a);
io.shell();