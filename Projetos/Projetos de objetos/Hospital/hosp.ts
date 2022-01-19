class paciente{
    nome:string
    dodoi:string
    med:Map<string,medico>;

    constructor(nome:string,dodoi:string){
        this.nome=nome
        this.dodoi=dodoi
        this.med
    }

}
class medico{
    nome:string;
    esp:string;
    pac:Map<string,paciente>;

    constructor(nome:string,esp:string){
        this.nome=nome;
        this.esp=esp;
        this.pac
    }

}

class hospital{
    medicos: Map<string,medico>
    pacientes: Map<string,paciente>

        constructor(medicos: Map<string,medico>,pacientes: Map<string,paciente>){
            this.medicos=medicos;
            this.pacientes=pacientes;
        }

    addm(x,y){
        var z=new medico(x,y);
        this.medicos.set(z.nome,z);
    }
    addp(x,y){
        var z=new paciente(x,y);
        this.pacientes.set(z.nome,z);
    }
    laco(x:medico,y:paciente){
        y.med.set(x.nome,x)
        x.pac.set(y.nome,y)
    }

}