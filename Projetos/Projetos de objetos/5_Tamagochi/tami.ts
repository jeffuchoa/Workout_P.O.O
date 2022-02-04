const readline = require('readline-sync');
let input = (): string => readline.question();
let write = (x : any) => process.stdout.write("" + x);


class Pet {
	private nome: string ;
	private energy:number;
    private saciedade:number;
    private limpeza:number;
    private idade:number;
    private diamante:number;
    private isAlive: boolean;
    private max:Array<number>;

	constructor(nome: string, energy:number,saciedade:number,limpeza:number){
		this.nome=nome
		this.energy=energy;
        this.saciedade=saciedade;
        this.limpeza=limpeza;
        this.idade=0;
        this.diamante=0;
        this.isAlive=true;
        this.max=[this.energy,this.saciedade,this.limpeza];

	}



    public setNome(nome: string):string {
        if (nome.length == 0) {
            return "bichinho";
        } else {
            return nome;
        }
    }

    public getNome(): string {
        return this.nome;
    }

    public getidade(): number {
        return this.idade;
    }

    public setSaciedade(saciedade: number) {
        if (saciedade<0){
        if (this.saciedade-saciedade <= 0) {
            this.saciedade = 0;
            this.isAlive = false;
            write(this.getNome()+" Teve uma overdose de ar ---MORREU---\n");
        }
    
        else if(saciedade<0){
            this.saciedade+=saciedade
        }
    }
         else if (saciedade >0) {
            if(saciedade+this.saciedade > this.max[1] ){
            this.saciedade = this.max[1];
            write(this.getNome()+" Está saciado!\n");
            }
            else if(saciedade >0){
                write("Comeu um pão com mortandela totozo\n")
                this.saciedade+=saciedade
            }
    }
        
    }

    public setEnergy(energy: number) {
        if(energy<0){
        if(this.energy-energy==0){
            this.energy = 0;
            this.isAlive=false;
            write(this.getNome()+" Ficou com tanto sono que caiu no sono eterno ---MORREU--- \n");
        }
        else if(energy<0){
            this.energy+=energy
        }
    }
        else if(energy>0 && energy<this.max[0]-5){
            this.energy=this.max[0]
            write(this.getNome()+" Dormiu que nem um bebê\n");
            
        }
        else{
            console.log("Fail: Pet está com muita energia para dormir :o\n");
            
        }
        
    }

    public setClean(clean: number) {
        if(clean<0){
        if(this.limpeza-clean<=0){
            this.limpeza = 0;
            this.isAlive=false;
            write(this.getNome()+" Sentiu seu cheiro e morreu de desgosto ---MORREU--- \n");
        }
        else if(clean<0){
            this.limpeza+=clean;
        }
    }
        else if(clean==0){
            this.limpeza=this.max[2];
            write(this.getNome()+" Ficou limpinho e cheiroso\n")
        }

    }    

    public sleep():void{

        if(!this.isAlive) {
            write("Pet Já esta no sono eterno ");
            return;
        }
        this.setEnergy(this.energy);
        this.idade+=1
    }

    public clean(): void {
        if(!this.isAlive) {
            write("Pet Morto não toma banho ");
            return;
        }
        this.setClean(0);
        this.setSaciedade(-1);
        this.setEnergy(-3);
        this.idade=this.idade+2;
    }

    public brincar(): void {
        if(!this.isAlive) {
            write("Pet morto não brinca");
            return;
        }
        console.log (this.nome+" Se divertiu muito!")
        this.setSaciedade(-1);
        this.setEnergy(-2);
        this.setClean(-3);
        this.diamante=this.diamante+1;
        this.idade+=1;
    }

    public comer(): void {
        if(!this.isAlive) {
            write("Pet morto não come\n");
            return;
        }
        this.setSaciedade(+4);
        this.setEnergy(-1);
        this.setClean(-2);
        this.idade+=1;
    }

	public toString() {
		if (this.isAlive)
            return this.getNome() + ": " +"Energia |"  + this.energy + "/" + this.max[0]+"|  Saciedade |"+this.saciedade+"/"+this.max[1]+"|  Limpeza |"+this.limpeza+"/"+this.max[2]+"|  Idade | "+this.idade+" |  Diamantes| "+this.diamante+" |"
        return "RIP";
	}
}

class IO {
    create_pet(): Pet {
        write("Digite o nome do seu pet: ");
        let nome = input();
        let pet = new Pet(nome,20,20,20);
        return pet
    }

    mostrar_help() {
        write("Comandos:\n");
        write("  new : Crie e dê um novo nome para seu Pet\n");
        write("  show: Mostra o pet\n");
        write("  play: Faz o pet brincar\n");
        write("  eat : Faz o pet comer\n");
        write("  bath: Faz o pet comer\n");
        write("  bed : Faz pet dormir\n");
        write("  end : sai do programa\n");
    }

    shell() {
        let pet = new Pet("", 0,0,0);//this.create_pet();
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
                write("" + pet + "\n");
            } else if (words[0] == "eat") {
                pet.comer();
            } else if (words[0] == "play") {
                pet.brincar();
            } else if (words[0] == "bath") {
                pet.clean();
            } else if (words[0] == "bed") {
                pet.sleep();
            } else if (words[0] == "new") {
                let nome = words[1];
                pet = new Pet(nome,20,20,20);
                console.log(pet.getNome()+" Nasceu !!");
            } else {
                console.log("Comando inválido");
            }
        }
    }
}

let io = new IO();
io.shell();