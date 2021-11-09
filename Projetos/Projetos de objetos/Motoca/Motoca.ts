
class Pessoa{
    nome:string;
    idade:number;
    
    constructor(nome:string, idade:number){
        this.nome = nome;
        this.idade = idade;
    }
    toString():string {
      return '${this.nome} tem ${this.idade} anos';
    }
}

let aqui:boolean = false;
class moto{
    pessoa:Pessoa | null
    pot:number; //buzina
    tempo:number; //tempo gastado
    compra:number=0 //tempo comprado

    constructor(pot:number){
        this.pessoa = null;
        this.pot = pot;
        this.tempo=0;
        

    }
    toString():string {
        
        let nome:string="Não tem criança :(";
        if (this.pessoa != null){
            nome=this.pessoa.nome;
        }
        return '[${nome}]';

      }
    bibi(pot:number) {
        let pe:string="";
        for(var i = 0; i<pot;i++){
            pe +="e";
        }
        
        console.log ("P"+pe+"m");
        
    }

    buy(valo:number):void{
        this.tempo+=valo
    }

    dirigi(quero:number):boolean{
        if(this.tempo<quero){
            console.log("tempo insuficiente");
            return false;
        }
        this.tempo-=quero;
        return true

    }
    In(pessoa:Pessoa):any{

        if(pessoa.idade>13){
            console.log (pessoa.nome+" Ta vei, pode entrar não");

        }
        else if (this.pessoa==null){
            this.pessoa =pessoa;
            return true;
        }
        
        else {
            console.log("Já tem criança meu anjo, espere sua vez");
            return false;
        }
        
    }
    out():any{
        if (this.pessoa==null){
            console.log( "Não tem criança pra expulsar da motoca");
            return false;
        }
        else{
            console.log(this.pessoa.nome+" foi chutada(o) para fora da motoca :)");
            this.pessoa==null;
        }

    }
}

let crianca=new Pessoa("aninha",1);
let crianca2=new Pessoa("Claudinho",100);
let anda= new  moto(5);

anda.out();
anda.In(crianca);
anda.In(crianca);
anda.out();
anda.In(crianca2);
anda.bibi(anda.pot);
anda.buy(20);
anda.dirigi(30);
