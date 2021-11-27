const readline = require('readline-sync');
let input = (): string => readline.question();
let write = (x : any) => process.stdout.write("" + x);

class Pet {
	private nome: string = "";
	private energy:number;
    private saciedade:number;
    private limpeza:number;
    private idade:number=0;
    private diamante:number=0;
    private isAlive: boolean = true;
    private max:Pet;

	constructor(nome: string, energy:number,saciedade:number,limpeza:number){
		this.setNome(nome);
		this.energy=energy;
        this.saciedade=saciedade;
        this.limpeza=limpeza;
        this.diamante=0;

		this.max=new Pet(this.getNome(),this.energy,this.saciedade,this.limpeza)
	}

    public setNome(nome: string) {
        if (nome.length == 0) {
            this.nome = "bichinho";
        } else {
            this.nome = nome;
        }
    }

    public getNome(): string {
        return this.nome;
    }

    public getidade(): number {
        return this.idade;
    }

    public setSaciedade(saciedade: number) {
        if (saciedade == 0) {
            this.saciedade = 0;
            this.isAlive = false;
            write(this.getNome()+" Teve uma overdose de ar ---MORREU---\n");
        } else if (saciedade > this.max.saciedade) {
            this.saciedade = this.max.saciedade;
            write(this.getNome()+" Está saciado!\n");
        } else {
            this.saciedade = saciedade;
        }
    }

    public setEnergy(energy: number) {
        if(energy==0){
            this.energy = 0;
            this.isAlive=false;
            write(this.getNome()+" Ficou com tanto sono que caiu no sono eterno ---MORREU--- \n");
        }
        else if(energy>0){
            this.energy=this.max.energy
            write(this.getNome()+" Dormiu que nem um bebê");
            
        }
        
    }

    public setClean(clean: number) {
        if(clean==0){
            this.limpeza = 0;
            this.isAlive=false;
            write(this.getNome()+"Sentiu seu cheiro e morreu de desgosto ---MORREU--- \n");
        }
        else if(clean>0){
            if (this.limpeza <this.max.limpeza-5){
            this.limpeza=this.max.limpeza;
            write(this.getNome()+"Ficou limpinho e cheiroso")
            }
            if(this.limpeza>=this.max.limpeza-5){
                write("Fail: Pet está muito energético para dormir")
            }
            
        }

    }    
    public clean(): void {
        if(!this.isAlive) {
            write("Pet morreu por conta do seu própio cheiro \n");
            return;
        }
        this.setClean(this.limpeza)
        this.setSaciedade(this.saciedade - 1);
        this.setEnergy(this.energy - 3);
        this.idade=this.idade+2;
    }

    public brincar(): void {
        if(!this.isAlive) {
            write("Pet morto não brinca\n");
            return;
        }
        this.setSaciedade(this.saciedade - 1);
        this.setEnergy(this.energy - 2);
        this.setClean(this.limpeza-3);
        this.diamante=this.diamante+1;
        this.idade+=1;
    }

    public comer(): void {
        if(!this.isAlive) {
            write("Pet morto não come\n");
            return;
        }
        this.setSaciedade(this.saciedade + 4);
        this.setEnergy(this.energy-1);
        this.setClean(this.limpeza-2);
        this.idade+=1;
    }

	public toString() {
		if (this.isAlive)
            return this.getNome() + ": " +"Energia |"  + this.energy + "/" + this.max.energy+"|  Saciedade |"+this.saciedade+"/"+this.max.saciedade+"|  Limpeza |"+this.limpeza+"/"+this.max.limpeza+"|  Idade |"+this.idade+"/"+this.idade+"|  Diamantes|"+this.diamante+"/"+this.max.diamante+"|";
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
        write("  new (crie e dê um novo nome para seu Pet");
        write("  show: mostra o pet\n");
        write("  play: faz o pet brincar\n");
        write("  eat: faz o pet comer\n");
        write("  end: sai do programa\n");
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
            } else if (words[0] == "new") {
                let nome = words[1];
                pet = new Pet(nome,20,20,20);
            } else {
                console.log("Comando inválido");
            }
        }
    }
}

let io = new IO();
io.shell();