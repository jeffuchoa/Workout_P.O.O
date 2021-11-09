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
        return this.nome +" : "+this.idd;
    }

}

class cinema{
    acent:Array <cliente| null>;
    

    constructor(){
        this.acent =[]
    }

    sala(x:number){
        for (var i=0; i<x;i++){
            this.acent.push(null);
        }

    }

    reserv(x:cliente){
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
                break;
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
let cine=new cinema();
cine.sala(3);
console.log(""+cine);
cine.reserv(new cliente(1,223,"aninha",666));
console.log(""+cine);
cine.cancelar(666);
console.log(""+cine);
cine.reserv(new cliente(1,243,"kikito",123));
cine.reserv(new cliente(2,223,"aninha",666));
cine.reserv(new cliente(3,901,"Pikachu",2020));
console.log(""+cine);



