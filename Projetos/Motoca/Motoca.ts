
class Pessoa{
    nome:string;
    idade:number;
    
    constructor(nome:string, idade:number){
        this.nome = nome;
        this.idade = idade;
    }
    toString():string {
      return 'Pessoa ${this.nome} ${this.idade}';
    }
}

let aqui:boolean = false;
class moto{
    pessoa:Pessoa;
    pot:number; //buzina
    tempo:number; //tempo gastado
    compra:number; //tempo comprado

    constructor(pessoa:Pessoa,pot:number,tempo:number,compra:number){
        this.pessoa = pessoa;
        this.pot = pot;
        this.tempo = tempo;
        this.compra = compra;

    }
    bibi(){
        let pe:string=" ";
        for(var i = 0; i<this.pot;i++){
            pe +="e";
        }
        return this.pot;
        console.log(this.pot);
        
    }
    In(){
        if (aqui==false){
            let crianca=new Pessoa("lala",1)
            aqui = true;
        }
        else{
            console.log("Já tem criança meu anjo, espere sua vez");
        }
        
    }
    out(){
        if (aqui==false){
            console.log( "Não tem criança pra expulsar da motoca");
        }
        else{
            aqui = false;
        }

    }
    show(){

    }
}

let crianca=new Pessoa("aninha",1);
let anda= new moto(crianca,2,2,3);

console.log(anda.bibi);
console.log("socorro");
