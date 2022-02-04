

let destino:string[]=["Céu","Inferno"];
class pessoa{
    nome:string;

    constructor(nome:string){
        this.nome = nome;
    }
    public toString(){
        return this.nome;
    }
}

class purgatorio{
    fila: Array<pessoa | null>;
    caixa: Array<pessoa | null>;

    constructor(Qcaixas:number){
        this.caixa=[];
        this.fila=[];
        for (let i=0;i<Qcaixas;i++){
            this.caixa.push(null)
        }

    }

    
    

    entrar(pessoa:pessoa){
        this.fila.push(pessoa);
    }

    suavez(){
        let conf:number=0;
        for (let i=0;i<=2;i++){
            if (this.caixa[i]==null){
                this.caixa[i]=this.fila[0];
                console.log(this.caixa[i]+" Está no caixa "+i);
                this.fila.shift();
                conf+=1;
            }
        if(conf==this.caixa.length){
            console.log(this.fila[0]+" Não pode entrar nos caixas, estão cheios :(")
        }
        }       
    }

    atendido(x:number){
        
        if (this.caixa[x]!=null){
            console.log(this.caixa[x]+" Foi para o "+destino[1])
            this.caixa[x] =null;
        }

        else if(this.caixa[x]==null){
            console.log("Tem ninguém aqui não doido >:c")
        }

    }

    public toString() {
        let str="Caixas | ";
        for (let i=0; i<this.fila.length;i++){
            let pessoa:any| null=this.caixa[i];str+=i+": ";
            str+=i+": ";

            if(pessoa==null){
                str+="vazio"
            }
            else if (pessoa!=null){
                str+=pessoa.toString();
            }

            str+=" |";
        }

            str += "\nespera: ";
            for (let pessoa of this.fila) {
                if(pessoa!=null){
                str += pessoa.toString() + " ";
            }
        }
            return str;
        

        }


}

let purg=new purgatorio(3);
purg.entrar(new pessoa("aninha"));
purg.entrar(new pessoa("Kirigiri"));
purg.entrar(new pessoa("Alfredo"));
purg.entrar(new pessoa("Marina")); // Marina tentara entrar no caixa, mas não vai não
purg.suavez();
purg.suavez();

purg.atendido(2);
purg.atendido(2); // esse caixa está vazio, não tem ninguém pra atender

purg.suavez(); // Marina é a próxima no caixa 2


