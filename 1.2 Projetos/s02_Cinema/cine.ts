class Cliente {
    nome:string;
    telefone:number;

    constructor(nome:string,telefone:number) {
        this.telefone = telefone;
        this.nome = nome;
    }
    
    public toString():string{
        return this.nome +" : "+this.telefone;
    }

    getName(){
        return this.nome
    }

}

class Cinema{

    acentos:Array <Cliente| null>;
    sala:number;

    constructor(sala:number){
        this.acentos =[]
        this.sala=sala

        for (var i=0; i<this.sala;i++){
            
            this.acentos.push(null);
        }
    }

    reservar(cliente:Cliente,cadeira:number){
    
        for(var i=0;i<this.sala;i++){

            if(this.acentos[i]==null){
                break
            }
            else if(this.acentos[i]!=null && this.acentos[i]!.nome==cliente.nome){
                console.log("ERROR: "+this.acentos[i]!.nome+" Já está no cinema")
            }
        }

        if(this.acentos[cadeira]==null){
            console.log(cliente.nome+" Reservou a cadeira "+cadeira)
            this.acentos[cadeira]=cliente;
        }

        else if (this.acentos[cadeira]!= null){
            console.log ("ERROR : "+this.acentos[cadeira]+" Já está no lugar, Infelizmente você não pode sentar no colo desse Cliente :(");
        }

    }

    cancelar(cliente:string){

        for(var i=0;i<this.sala;i++){

            if(this.acentos[i]==null){
                break;
            }

            else if(this.acentos[i]!=null && cliente == this.acentos[i]!.nome){
                console.log(cliente+" Foi cancelada(o), Obrigado pela preferência")
                this.acentos[i]=null;
            }
        }

    }



    public toString() {
        let str = "cadeiras: | ";
        for (let i = 0; i < this.acentos.length; i++) {
            let pessoa = this.acentos[i];
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
let cine=new Cinema(3);
console.log(""+cine);
cine.reservar(new Cliente("Aninha",123),0);
console.log(""+cine);
cine.cancelar("Aninha");
console.log(""+cine);
cine.reservar(new Cliente("kikito",123),1);
cine.reservar(new Cliente("aninha",666),2);
cine.reservar(new Cliente("Pikachu",2020),0);
console.log(""+cine);



