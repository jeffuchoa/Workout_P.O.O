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
        return this.label + ":" + this.number;
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

    public isValid() {

    
    }
}

class Contato {
    //private fones: Array<Fone>;
    private nome: string;
    private fones: Array<Fone>;
    constructor(nome: string,fon: Array<Fone>) {
        this.nome = nome;
        this.fones = new Array<Fone>();
        for (let fone of this.fones) {
            this.addFone(fone);
        }
    }
    getna(){
        return this.nome;
    }

    setfone(x:Fone){

    }

    public toString(): string {
        let str:string =""
        for(let i=0;i<this.fones.length;i++) {
        str+="["+i.toString()+":"+this.fones[i]+"] "
        }
        return "-"+this.nome + ": "+str
    }

    addFone(fone: Fone) {
        if (fone.validate()==true){
            console.log("Numero adicionado a lista")
            this.fones.push(fone);
        }
        else{
            console.log("Numero inválido")
        }
    }
    
    removeFone(index: number) {
        if(index>this.fones.length-1){
            console.log("Index incorreto")
        }
        else{
            this.fones.splice(index, 1);
        }
    }

    setFones(fones: Array<Fone>) {
        this.fones = [];
        for(let fone of fones) {
            this.addFone(fone);
        }
    }
}

class agen{
    private contatos:Array<Contato>
    private a:string
    constructor(){
        this.contatos =new Array<Contato>();
        this.a=""

    }
    find(x:string):any{

        for (let i = 0; i < this.contatos.length; i++) {
            if (x.indexOf(this.contatos[i].getna()) != -1) {
                return i;
            }
            else{
                console.log("Contato Inexistente")
                return -1;

            }
        }
    }
    add(x:string,y:string,z:string){
        if(this.find(x)!=-1){
            this.contatos[this.find(x)].addFone(new Fone(y,z,x))
        }
        else if (this.find(x)==-1){
            let bip:Fone=new Fone(y,z,x)
            this.contatos.push(new Contato(x,[bip]));
            this.contatos.sort()
        }
    }

    aa(x:number | string){
        this.a+=x
    }
}


class IO {
    agen:agen;

    constructor(agen:agen) {
        this.agen=agen;
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
                write("" + this.agen + "\n");
            } else if (words[0] == "add") { 
                this.agen.aa(words[1]);
            } else if (words[0] == "res") { 
                
            } else if (words[0] == "cance") { 
                write("Digite o ID do cancelamento ")
                let ii=input();
                
            } else {
                console.log("Comando inválido");
            }
        }
    }

}
let a:agen = new agen();
let io = new IO(a);
io.shell();