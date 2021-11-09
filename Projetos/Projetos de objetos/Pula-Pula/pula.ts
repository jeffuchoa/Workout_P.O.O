class crianço{
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

class pulapula{
    fila :Array<crianço | null>;
    tem:Array <crianço | null>;

    constructor(){
        this.fila=[];
        this.tem=[null];
    }

    filinha(x:crianço){
        this.fila.push(x);
    }

    entra(){
        if(this.tem[0]==null){
            this.tem[0]=this.fila[0];
            console.log(this.fila[0]+" Entrou no Pula-Pula, aproveite seus ultimos momentos");
            this.fila.shift();
        }
        
        else if (this.tem[0]!=null){
            console.log("Não cabe mais criança, tu não vai entrar não "+this.fila[0]);
        }
    }
    sai(){
        if(this.tem[0]!=null){
            console.log(this.tem[0].nome+" Pulou tão alto que saiu do Pula-Pula :o")
            this.fila.push(this.tem[0]);
            this.tem[0]=null;
        }

        else{
            console.log("Não tem ninguém no Pula-Pula seu maluco")
        }

    }
}

let pulapul=new pulapula();
pulapul.filinha(new crianço("aninha",-1));
pulapul.filinha(new crianço("Juquinho",10));
pulapul.filinha(new crianço("Kikito",40));

pulapul.entra(); //entrou no pula pula
pulapul.entra(); //Pula Pula cheio

pulapul.sai(); // Retirar do pula pula
pulapul.sai(); // não tem ninguém para tirar do Pula puala

pulapul.entra();
pulapul.sai();
pulapul.entra();
pulapul.sai();
pulapul.entra(); //aninha pulou pela segunda vez
pulapul.sai();