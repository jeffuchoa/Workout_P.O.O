
class Fone {
    constructor(private number: string, private label: string) { 
        this.number=number;
        this.label=label;
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
    constructor(nome: string, fones:Array<Fone>) {
        this.nome = nome;
        this.fones = new Array<Fone>();
        for (let fone of fones) {
            this.addFone(fone);
        }
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
let fon=new Fone("123456","tim")
let cont=new Contato ("aninha",[fon])

cont.addFone(new Fone("666","cap"))
cont.addFone(new Fone("333","Claro"))

cont.removeFone(1)

console.log(""+cont)