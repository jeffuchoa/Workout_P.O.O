const readline = require('readline-sync');
let input = (): any => readline.question();
let write = (x : any) => process.stdout.write("" + x);

class Fone {
    constructor(private number: string, private label: string,private name:string) { 
        this.number=number;
        this.label=label;
        this.name=name;
    }
    public toString(): string {
        return this.number;
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
    getnam(){
        return this.name
    }

    getla(){
        return this.label
    }
    getfo(){
        return this.number
    }

    public isValid() {

    
    }
}

class Contato {
    //private fones: Array<Fone>;
    private nome: string;
    private fones: Map<string,Fone>;
    constructor(nome: string,fon: Map<string,Fone>) {
        this.nome = nome;
        this.fones = new Map<string,Fone>();
            this.addFone(fon);
    }

    getna(){
        return this.nome;
    }

    getla(x:number){
        return this.fones[x].getla();
    }

    getfone(){
        return this.fones

    }
    getfon(){
        return this.fones.get("").getfo();

    }
    getle(){
        return this.fones[0].getla();

    }
    getme(){
        return this.fones[0].getnam();
    }
    
    public toString(): string {
        let str:string =""
        for(let i=0;i<this.fones.size;i++) {
        str+="["+i.toString()+":"+this.fones[i]+"] "
        }
        return "-"+this.nome + ": "+str
    }

    addFone(fone:Map <string,Fone>):void {
        if (fone.get("a").validate()==true){
            this.fones.set(fone.get("a").getnam(),(new Fone(fone.get("a").getfo(),fone.get("a").getla(),fone.get("a").getnam())));
        }
        else{
            console.log("Numero inválido")
        }
    }
    
    removeFone(index: string) {
            this.fones.delete(index);
    }

}

class agen{
    private contatos:Map<string,Contato>
    constructor(){
        this.contatos =new Map<string,Contato>();

    }

    busca(x:string):any{
        let str:string=""
        if (this.contatos.has(x) || this.contatos.get(x).getfone().has(x)){
            str+=this.contatos[x]+"\n"
        }
            
        
        console.log(str) 
    }
    

    add(x:Contato){
        
        if (!this.contatos.has(x.getna())){
            this.contatos.set(x.getna(),x);
        }
        
        else{
            this.contatos.get(x.getna()).addFone(x.getfone())
        }
            
        
    }

    remofo(x:string,y:number){
        this.contatos.get(x).getfone().delete(y.toString());
    }

    remo(x:string){
        this.contatos.delete(x)
    }

    public toString(): any {
        let str:string =""
        for(let i of this.contatos.keys()) {
            str+="-"
            str+=i
            for(let o of this.contatos.get(i).getfone()) {
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
                this.agen.add(new Contato(words[1],words[1]([new Fone(words[3],words[2],words[1])])));
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