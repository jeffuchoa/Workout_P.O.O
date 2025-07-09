const readline = require('readline-sync');
let input = (): any => readline.question();
let write = (x : any) => process.stdout.write("" + x);

class crianço{
    nome:string;
    idade:number;

    constructor(nome:string,idade:number){
        this.nome = nome;
        this.idade = idade;
    }
    public toString(){
        return this.nome;
    }
}

class pulapula{
    fila :Array<crianço | null>;
    tem:Array <crianço | null>;

    constructor(){
        this.fila=[];
        this.tem=[null];
    }

    filinha(x:crianço){
        this.fila.push(x);
    }

    entra(){
        if(this.tem[0]==null){
            this.tem[0]=this.fila[0];
            console.log(this.fila[0]+" Entrou no Pula-Pula, aproveite seus ultimos momentos");
            this.fila.shift();
        }
        
        else if (this.tem[0]!=null){
            console.log("Não cabe mais criança, tu não vai entrar não "+this.fila[0]);
        }
    }
    sai(){
        if(this.tem[0]!=null){
            console.log(this.tem[0].nome+" Pulou tão alto que saiu do Pula-Pula :o")
            this.fila.push(this.tem[0]);
            this.tem[0]=null;
        }

        else{
            console.log("Não tem ninguém no Pula-Pula seu maluco")
        }

    }
    public toString(){
        let str = "No Pula-pula :"+this.tem[0]+" | Na fila: "+this.fila;
        return str;

    }
}

class IO {
    pua:pulapula;

    constructor(pulapul:pulapula){
        this.pua=pulapul;
    }
    criança(){
        write("Digite o nome da criança ");
        let nome = input();
        write("Digite a idade da criança ");
        let idade=input();
        let criança = new crianço(nome,idade);
        this.pua.filinha(criança)
        console.log(criança.nome+" Entrou na fila da alegria :D");
    }

    mostrar_help() {
        write("Comandos:\n");
        write("  new : Adicionar criança na fila");
        write("  show: Mostrar a fila e quem está no Pula-pula \n");
        write("  next: Colocar a primeira criança da fila dentro do Pula-pula\n");
        write("  out : Retirar a criança dentro do pula-pula\n");
        write("  show: Mostrar a fila e quem está no Pula-pula \n");
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
                write("" + this.pua + "\n");
            } else if (words[0] == "new") { 
                this.criança();
            } else if (words[0] == "next") { 
                this.pua.entra();
            } else if (words[0] == "out") { 
                this.pua.sai();
            } else {
                console.log("Comando inválido");
            }
        }
    }

    public toString(){

    }
}
let a:pulapula = new pulapula();
let io = new IO(a);
io.shell();