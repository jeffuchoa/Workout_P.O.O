class Criança{
    nome:string;
    idade:number;

    constructor(nome:string,idade:number){
        this.nome = nome;
        this.idade=idade;
    }
    public toString(){
        return this.nome;
    }
}

class PulaPula{
    fila :Array<Criança >;
    dentroPulapula:Array <Criança >;

    constructor(){
        this.fila=[];
        this.dentroPulapula=[];
    }

    entrarFila(x:Criança){
        this.fila.push(x);
    }

    entrarPulapula(){
        this.dentroPulapula.push(this.fila[0])
        console.log(this.fila[0]+" Entrou no Pula-Pula");
        this.fila.shift();
    }

    sair(){
        console.log(this.dentroPulapula[0].nome+" Pulou tão alto que saiu do Pula-Pula :o")
        this.fila.push(this.dentroPulapula[0]);
        this.dentroPulapula.shift()
    }

    remover(crianca:string){

        for(let i=0;i<this.dentroPulapula.length;i++){
            if (this.dentroPulapula[i].nome==crianca){
                console.log(this.dentroPulapula[i]!.nome+" Sua mãe veio te buscar, Até a próxima")
                delete this.dentroPulapula[i]
            }

        }

        for(let i=0;i<this.fila.length;i++){
            if (this.fila[i].nome==crianca){
                console.log(this.fila[i]!.nome+" Sua mãe veio te buscar, Até a próxima")
                delete this.fila[i]
            }

        }

    }
}

let pulapul=new PulaPula();
pulapul.entrarFila(new Criança("aninha",-1));
pulapul.entrarFila(new Criança("Juquinho",10));
pulapul.entrarFila(new Criança("Kikito",40));

pulapul.entrarPulapula(); //entrou no pula pula
pulapul.entrarPulapula(); 

pulapul.sair(); // Retirar do pula pula
pulapul.sair(); 

pulapul.entrarPulapula();
pulapul.sair();
pulapul.entrarPulapula();
pulapul.sair();
pulapul.entrarPulapula(); //aninha pulou pela segunda vez
pulapul.sair();

pulapul.remover("aninha");