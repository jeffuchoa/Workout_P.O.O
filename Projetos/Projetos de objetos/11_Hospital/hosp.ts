class Paciente{
    public nome:string
    dodoi:string
    med:Map<string,Medico>
    medname:Array<string>

    constructor(nome:string,dodoi:string){
        this.nome=nome
        this.dodoi=dodoi
        this.med=new Map<string,Medico>()
        this.medname=[]
    }

    public toString():string{
        let str:string="Paciente: "+this.nome+ " | Diagnóstico: "+this.dodoi+" | Médicos: "+this.medname
        return str
    }

    getname(){
        return this.nome
    }
    getmed(){
        return this.med;
    }
}
class Medico{
    nome:string;
    esp:string;
    pac:Map<string,Paciente>
    pacname:Array<string>

    constructor(nome:string,esp:string){

        this.nome=nome;
        this.esp=esp;
        this.pac=new Map<string,Paciente>()
        this.pacname=[]
        
    }
    
    public toString():string{
        let str:string="Médico: "+this.nome+ " | Especialidade "+this.esp+"| Pacientes: "+this.pacname
        return str
    }

    getpac(){
        return this.pac
    }
    getname(){
        return this.nome
    }
    getespeci(){
        return this.esp
    }
}

class Hospital{
    Medicos: Map<string,Medico>
    Pacientes: Map<string,Paciente>

        constructor(){
            this.Medicos=new Map<string, Medico>();
            this.Pacientes=new Map<string, Paciente>();
        }

    addm(x:string,y:string){
        var z=new Medico(x,y);
        this.Medicos.set(z.nome,z);
    
    }
    addp(x:string,y:string){
        var z=new Paciente(x,y);
        this.Pacientes.set(z.nome,z);

    }
    laco(x:string,y:string){
        let validate:boolean=true

        for(let i of this.Pacientes.get(y)!.getmed()){
            if(i[1].getname()!=x && i[1].getespeci()==this.Medicos.get(x)!.esp){
                console.log("ERROR: "+this.Pacientes.get(y)!.getname()+" já tem um(a) "+i[1].esp)
                validate=false;
            } 
        }
        for(let i of this.Medicos.get(x)!.getpac()){
            if(i[1].getname()==y){
                console.log("ERROR: "+y+" Já é paciente desse médico")
                validate=false
            }
        }
        if(validate==true && this.Medicos.has(x) && this.Pacientes.has(y)){
            this.Pacientes.get(y)!.med.set(x,this.Medicos.get(x)!)
            this.Medicos.get(x)!.pac.set(y,this.Pacientes.get(y)!)
            
            this.Pacientes.get(y)!.medname.push(x)
            this.Medicos.get(x)!.pacname.push(y)
        }    
    }

    public toString(){
        let str:string=""
        for(let i of this.Pacientes){
        str+=""+i[1]
        str+="\n"
        }
        for(let i of this.Medicos){
            str+=""+i[1]
            str+="\n"
        }
        return str
    }
}


var a=new Hospital();

a.addm("Carlinha","Psicologo");
a.addp("Aninha","Olho quebrado");
a.laco("Carlinha","Aninha")

console.log(""+a)

a.addm("Doidin","Psicologo");
a.laco("Doidin","Aninha")

console.log(""+a)

a.laco("Carlinha","Aninha")

console.log(""+a)