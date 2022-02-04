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
    dentro:Array <Criança >;

    constructor(){
        this.fila=[];
        this.dentro=[];
    }

    entrarFila(x:Criança){
        this.fila.push(x);
    }

    entra(){
        this.dentro.push(this.fila[0])
        console.log(this.fila[0]+" Entrou no Pula-Pula");
        this.fila.shift();
    }

    sair(){
        console.log(this.dentro[0].nome+" Pulou tão alto que saiu do Pula-Pula :o")
        this.fila.push(this.dentro[0]);
        this.dentro.shift()
    }

    remover(crianca:string){

        for(let i=0;i<this.dentro.length;i++){
            if (this.dentro[i].nome==crianca){
                console.log(this.dentro[i]!.nome+" Sua mãe veio te buscar, Até a próxima")
                delete this.dentro[i]
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

pulapul.entra(); //entrou no pula pula
pulapul.entra(); 

pulapul.sair(); // Retirar do pula pula
pulapul.sair(); 

pulapul.entra();
pulapul.sair();
pulapul.entra();
pulapul.sair();
pulapul.entra(); //aninha pulou pela segunda vez
pulapul.sair();

pulapul.remover("aninha");