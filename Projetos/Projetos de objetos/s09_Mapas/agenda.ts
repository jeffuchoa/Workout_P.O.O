import { threadId } from "worker_threads";

const readline = require('readline-sync');
let input = (): any => readline.question();
let write = (x : any) => process.stdout.write("" + x);

class Fone {
    number:string
    label:string
    constructor(label:string,telefone:string) { 
        this.number=telefone;
        this.label=label;
    }
    
    public  validate(): boolean {
        let valid = "0123456789()-.";
        for (let i = 0; i < this.number.length; i++) {
            if (valid.indexOf(this.number[i]) == -1) {
                return false;
            }
        }
        return true;
    }
    

    getla(){
        return this.label
    }
    getfo(){
        return this.number
    }

    public toString(): string {
        return (this.label+":"+this.number);
    }
}

class Contato {

    private nome: string;
    private fones: Map<string,Fone>;
    constructor(nome: string) {
        this.nome = nome;
        this.fones = new Map<string,Fone>();
    }

    getna(){
        return this.nome;
    }

    getfone(){
        return this.fones

    }
    getfon(){
        return this.fones

    }
    
    public toString(): string {
        let str:string =""
        let cont=0
        for(let i of this.fones) {
        str+="["+cont+":"+i[1]+"] "
        cont+=1
        }
        return "-"+this.nome + ": "+str
    }

    addFone(fone: Fone):void {
        if (fone.validate()==true){
            this.fones.set(fone.number,fone);
        }
        else{
            console.log(fone)
            console.log("Numero inválido")
        }
    }

}

class agen{
    private contatos:Map<string,Contato>
    constructor(){
        this.contatos =new Map<string,Contato>();

    }

    busca(x:string):any{
        let str:string=""
        for(let contato of this.contatos){
            if(contato[0].indexOf(x)!=-1){
            str+=this.contatos.get(contato[0])+"\n"
            }
            for(let numeros of this.contatos.get(contato[0])!.getfon()){
                if(numeros[0].indexOf(x)!=-1){
                    str+=this.contatos.get(contato[0])+"\n"
                }
            }
        }
        
        console.log(str) 
    }
    

    add(x:Contato,y:Fone){
        
        if (!this.contatos.has(x.getna())){
            this.contatos.set(x.getna(),x)
            this.contatos.get(x.getna())!.addFone(y)
        }
        
        else{
            this.contatos.get(x.getna())!.addFone(y)
        }
            
        
    }

    remofo(x:string,y:number){
        let cont:number=0

        for(let j of this.contatos.get(x)!.getfon()){

            if (cont==y){
            this.contatos.get(x)!.getfon().delete(j[0])
            console.log(j[0]+"aninha")
            }
            cont+=1   
        }
    }

    remo(x:string){
        this.contatos.delete(x)
    }

    public toString(): any {
        let str:string =""
        for(let i of this.contatos.keys()) {
            
            for(let o of this.contatos.get(i)!.toString()){
                str+=o
            }

            str +="\n"
            str +="\n"
        }
    return str;
    }   

}
class IO {
    agen:agen;

    constructor(agen:agen) {
        this.agen=agen;
    }
    mostrar_help() {
        write("Comandos:\n");
        write("  add  : Adicionar nova pessoa ou numero a agenda \n");
        write("  remf : Remover telefone do contato \n");
        write("  remc : Remover contato da agenda \n");
        write("  busc : Buscar contato \n");
        write("  show : Mostrar a agenda \n");
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
                write("" + this.agen + "\n");
            } else if (words[0] == "add") { 
                let w:Array<string>=words[2].split(":")
                this.agen.add(new Contato(words[1]),(new Fone(w[0],w[1])))
            } else if (words[0] == "remf") {
                this.agen.remofo(words[1],words[2])      
            } else if (words[0] == "remc") { 
                this.agen.remo(words[1])
            } else if (words[0] == "busc") { 
                this.agen.busca(words[1])
            } else {
                console.log("Comando inválido");
            }
        }
    }

}




let a:agen = new agen();
let io = new IO(a);
io.shell();