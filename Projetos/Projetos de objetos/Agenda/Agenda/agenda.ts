const readline = require('readline-sync');
let input = (): string => readline.question();
let write = (x : any) => process.stdout.write("" + x);
let b:number=1;


class contato{
    numeros:Array<number |string>

    constructor(private label:string,public numero:string,private nome:string){
        this.label=label;
        this.numero=numero;
        this.nome=nome;
        this.numeros=[]
    }

    getnumber():string{
        return this.numero;
    }

    getlabel():string{
        return this.label;
    }

    getname():string{
        return this.nome;
    }

    setNumeros(x:string){
        //this.numeros+=x;
    }

    

}

class agenda{
    private fone:string[]
    private contatos:string[]
    

    constructor(){
        this.fone=[]
        this.contatos=[]
    }
    
    valcont(x:contato):boolean{
        let val:string="123456789()"
        let cont:number=0;
        let vae:number=0;
        
        for(var i=0;i<x.getnumber().length;i++){
            for(var y=0;i<val.length;i++){
                if(x.numero[i]==val[y]){
                    cont+=1;
                    
                    
                }   
            }
        }
    if (cont==x.getnumber().length){
    return true
    }
    else{
        return false;
    }
    }

    addnum(x:contato){
        if(this.valcont(x)==true){
            let str:string="";
            str+=x.getname()+" ["+x.getlabel()+" : "+x.getnumber()+"]\n"
            //this.contatos.push(str);
            x.setNumeros(str);
            console.log( x.getname()+" Foi adicionado(a) na agenda")
        }

        else{
            console.log( "O contato inserido é inválido")
        }


    }
    public toString():string{
        return ""+this.contatos
    }
}



class IO {

    private agen:agenda;

    constructor(){
        this.agen=new agenda();
    }

    contato(){
        write("Digite o nome da pessoa ");
        let nome = input();
        write("Digite o telefone ");
        let telefone=input();
        write("Digite o Label ");
        let label=input();
        let conta =new contato(label,telefone,nome)
        this.agen.addnum(conta);
        
    }

    mostrar_help() {
        write("Comandos:\n");
        write("  new  : Novo Contato \n");
        write("  cance: Cancelar reserva com ID\n");
        write("  show : Mostrar sala de cinema \n");
    }

    shell() {
        this.mostrar_help();
        while (true) {
            write("$ ");
            let line = input();
            let words = line.split(" ");
            if (words[0] == "end") {
                break;
            } else if (words[0] == "help") { 
                this.mostrar_help();
            } else if (words[0] == "show") { 
                write("" +this.agen + "\n");
            } else if (words[0] == "new") { 
                this.contato();
            } else if (words[0] == "add") { 
            } else if (words[0] == "cance") { 
                write("Digite o ID do cancelamento ")
                let ii=input();
            } else {
                console.log("Comando inválido");
            }
        }
    }

}
let io=new IO();
io.shell();