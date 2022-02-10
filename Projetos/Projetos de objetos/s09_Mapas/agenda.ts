import { threadId } from "worker_threads";

const readline = require('readline-sync');
let input = (): any => readline.question();
let write = (x : any) => process.stdout.write("" + x);

class Fone {
    private number:string
    private label:string
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
    

    getLabel(){
        return this.label
    }
    getFone(){
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

    getName(){
        return this.nome;
    }

    getFone(){
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
            this.fones.set(fone.getFone(),fone);
        }
        else{
            console.log(fone)
            console.log("Numero inválido")
        }
    }

}

class Agenda{
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
            for(let numeros of this.contatos.get(contato[0])!.getFone()){
                if(numeros[0].indexOf(x)!=-1){
                    str+=this.contatos.get(contato[0])+"\n"
                }
            }
        }
        
        console.log(str) 
    }
    

    adicionar(x:Contato,y:Fone){
        
        if (!this.contatos.has(x.getName())){
            this.contatos.set(x.getName(),x)
            this.contatos.get(x.getName())!.addFone(y)
        }
        
        else{
            this.contatos.get(x.getName())!.addFone(y)
        }
            
        
    }

    removerFone(x:string,y:number){
        let cont:number=0

        for(let j of this.contatos.get(x)!.getFone()){

            if (cont==y){
            this.contatos.get(x)!.getFone().delete(j[0])
            console.log(j[0]+"aninha")
            }
            cont+=1   
        }
    }

    removerAgenda(x:string){
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
    Agenda:Agenda;

    constructor(Agenda:Agenda) {
        this.Agenda=Agenda;
    }
    mostrar_help() {
        write("Comandos:\n");
        write("  add  : Adicionar nova pessoa ou numero a Agendada \n");
        write("  remf : Remover telefone do contato \n");
        write("  remc : Remover contato da Agendada \n");
        write("  busc : Buscar contato \n");
        write("  show : Mostrar a Agendada \n");
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
                write("" + this.Agenda + "\n");
            } else if (words[0] == "add") { 
                let w:Array<string>=words[2].split(":")
                this.Agenda.adicionar(new Contato(words[1]),(new Fone(w[0],w[1])))
            } else if (words[0] == "remf") {
                this.Agenda.removerFone(words[1],words[2])      
            } else if (words[0] == "remc") { 
                this.Agenda.removerAgenda(words[1])
            } else if (words[0] == "busc") { 
                this.Agenda.busca(words[1])
            } else {
                console.log("Comando inválido");
            }
        }
    }

}

let a:Agenda = new Agenda();
let io = new IO(a);
io.shell();