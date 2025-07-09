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
    private fones: Array<Fone>;
    constructor(nome: string,fon: Array<Fone>) {
        this.nome = nome;
        this.fones = new Array<Fone>();
        for (let fone of fon) {
            this.addFone(fone);
    
        }
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
        return this.fones[0].getfo();

    }
    getle(){
        return this.fones[0].getla();

    }
    getme(){
        return this.fones[0].getnam();
    }
    
    public toString(): string {
        let str:string =""
        for(let i=0;i<this.fones.length;i++) {
        str+="["+i.toString()+":"+this.fones[i]+"] "
        }
        return "-"+this.nome + ": "+str
    }
    seto(x:Fone){
        this.addFone(x);

    }

    addFone(fone: Fone):void {
        if (fone.validate()==true){
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
    constructor(){
        this.contatos =new Array<Contato>();

    }
    find(x:string):any{

        if (this.contatos.length==0){
            return -1;
        }

        else if (this.contatos.length>0){

        for (let i = 0; i < this.contatos.length; i++) {

            for (let o = 0; i < this.contatos[i].getfone().length; i++) {

                if ((this.contatos[i].getna().indexOf(x))==-1) {
                    return -1;
                        
                    }
                else{
                    return (this.contatos[i].getna().indexOf(x)) ;

                }
            }
        }
    }
    }

    busca(x:string):any{
        let str:string=""

        for (let i = 0; i < this.contatos.length; i++) {

            if ((this.contatos[i].getna().indexOf(x))!=-1){
                str+=this.contatos[i]+"\n"
            }
            for (let o = 0; o < this.contatos[i].getfone().length; o++) {
                if((this.contatos[i].getfon().indexOf(x))!=-1 ) {
                    str+=this.contatos[i]+"\n"              
                }
            }
        }
        console.log(str) 
    }
    

    add(x:Contato){
        
        if (this.find(x.getna())==-1){
            this.contatos.push(x);
            this.contatos.sort()
        }
        
        else if(this.find(x.getna())!=-1){
            this.contatos[this.find(x.getna())].addFone(new Fone(x.getfon(),x.getle(),x.getme()))
        }
            
        
    }

    remofo(x:string,y:number){
        this.contatos[this.find(x)].removeFone(y);

    }

    remo(x:string){
        this.contatos.splice(this.find(x))
    }

    public toString(): any {
        let str:string =""
        for(let i=0;i<this.contatos.length;i++) {
            str+="-"
            str+=this.contatos[i].getna();
            for(let o=0;o<this.contatos[i].getfone().length;o++){
                str+=" ["+o.toString()+":"+this.contatos[i].getla(o)+":"+this.contatos[i].getfone()[o]+"] "
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
                this.agen.add(new Contato(words[1],[new Fone(words[3],words[2],words[1])]));
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