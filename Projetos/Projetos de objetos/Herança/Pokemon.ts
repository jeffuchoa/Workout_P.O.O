class pokemon{
    tipo:string;
    alive:boolean

    constructor(tipo:string) {
        this.tipo=tipo
        this.alive=true
    }
}

class tipo extends pokemon{
    nome:string

    constructor(nome:string,tipo:string){
        super(tipo)
        this.nome=nome
    }
}

class Gotho extends tipo{
    apelido:string
    hp:number
    hpmax:number;
    atack:number;

    constructor(apelido:string){
        super(apelido,"psiquico")
        this.apelido=apelido
        this.hpmax=60;
        this.hp=60;
        this.atack=15;
    }

    batalhar(){
        if(this.alive==true){  
            console.log("Você encontrou um Ratata selvagem e começou uma batalha")
            this.hp-=10
            if(this.hp-10<0){
                this.alive=false;
                console.log("Gothorita acabou desmaiando em batalha")
            } 
        }
    }

    curar(){
        if(this.alive==true){
            console.log("Você usou uma max potion e curou completamente seu Pokemon")
        }

    }

    centropoke(){
        if(this.alive==false){
            console.log("Você levou seu pokemon para o centro pokemon e agora ele está novo em folha novamente")
            this.alive=true;
            this.hp=this.hpmax
        }
    }

    public toString(){
        return "Pokemon: "+this.apelido+" é uma Gothorita do tipo "+this.tipo+"  STATUS:  HP:"+this.hp
    }
}


class mawile extends tipo{
    apelido:string
    hp:number
    hpmax:number
    atack:number

    constructor(apelido:string){
        super("Mawile","Fada")
        this.apelido=apelido
        this.hpmax=50;
        this.atack=17;
    }

    batalhar(){
        if(this.alive==true){  
            console.log("Você encontrou um Ratata selvagem e começou uma batalha")
            this.hp-=10
            if(this.hp-10<0){
                this.alive=false;
                console.log("Mawile acabou desmaiando em batalha")
            } 
        }
    }

    curar(){
        if(this.alive==true){
            console.log("Você usou uma max potion e curou completamente seu Pokemon")
        }

    }

    centropoke(){
        if(this.alive==false){
            console.log("Você levou seu pokemon para o centro pokemon e agora ele está novo em folha novamente")
            this.alive=true;
            this.hp=this.hpmax
        }
    }

    public toString(){
        return "Pokemon: "+this.apelido+" é uma Mawile do tipo "+this.tipo+"  STATUS:  HP:"+this.hp
    }
}



let ameli= new Gotho("Amelie")

console.log(ameli.toString());

ameli.batalhar();
ameli.batalhar();
ameli.batalhar();
ameli.batalhar();
ameli.batalhar();

console.log(ameli.toString());

ameli.batalhar();

ameli.centropoke();

console.log(ameli.toString());