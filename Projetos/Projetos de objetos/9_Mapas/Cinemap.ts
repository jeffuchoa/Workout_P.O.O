class cliente {
    nome:string;
    id:number;
    tele:number;
    idd:number;

    constructor(id:number, tele:number,nome:string,idd:number) {
        this.id = id;
        this.tele = tele;
        this.nome = nome;
        this.idd=idd;
    }
    
    public toString():string{
        return this.nome +":"+this.idd;
    }

}
class cinema{
    acent: Map <number, cliente>;
    cad:number;
    

    constructor(){
        this.acent = new Map <number, cliente>();
        this.cad=0;
    }

    sala(x:number){
        this.cad=x;
    }

    reserv(x:cliente){
        if(this.acent.has(x.id)){
            console.log ("A cadeira já está ocupada, Infelizmente você não pode sentar no colo desse cliente :(");
        }

        else{
            this.acent.set(x.id,x);
        }
    }

    cancelar(x:number){
        this.acent.delete(x)
    }
    



    public toString() {
        let str = "cadeiras: | ";
        for (let i = 0; i < this.cad; i++) {
            let pessoa = this.acent.get(i);
            str += (i) + ": ";
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
let cine=new cinema();
cine.sala(3);
console.log(""+cine);
cine.reserv(new cliente(1,223,"aninha",666));
console.log(""+cine);
cine.cancelar(1);
console.log(""+cine);
cine.reserv(new cliente(2,243,"kikito",123));
cine.reserv(new cliente(1,223,"aninha",666));
cine.reserv(new cliente(0,901,"Pikachu",2020));
console.log(""+cine);