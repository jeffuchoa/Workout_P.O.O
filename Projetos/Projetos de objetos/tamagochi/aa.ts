const readline = require('readline-sync');
let input = (): string => readline.question();
let write = (x : any) => process.stdout.write("" + x);

class Pet {
	private nome: string = "";
	private saciedade: number;
	private saciedadeMax: number;
    private isAlive: boolean = true;

	constructor(nome: string, saciedadeMax: number){
		this.setNome(nome);
		this.saciedade = saciedadeMax;
		this.saciedadeMax = saciedadeMax;
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

    public getSaciedade(): number {
        return this.saciedade;
    }

    public setSaciedade(saciedade: number) {
        if (saciedade < 0) {
            this.saciedade = 0;
            this.isAlive = false;
            write("passou fome até morrer\n");
        } else if (saciedade > this.saciedadeMax) {
            this.saciedade = this.saciedadeMax;
            this.isAlive = false;
            write("comeu até explodir!\n");
        } else {
            this.saciedade = saciedade;
        }
    }

    public brincar(): void {
        if(!this.isAlive) {
            write("Pet morto não brinca\n");
            return;
        }
        this.setSaciedade(this.saciedade - 1);
    }

    public comer(): void {
        if(!this.isAlive) {
            write("Pet morto não come\n");
            return;
        }
        this.setSaciedade(this.saciedade + 1);
    }

	public toString() {
		if (this.isAlive)
            return this.nome + ":" + this.saciedade + "/" + this.saciedadeMax;
        return "RIP";
	}
}

class IO {
    create_pet(): Pet {
        write("Digite o nome do seu pet: ");
        let nome = input();
        write("Digite o max de saciedade: ");
        let saciedadeMax = +input();
        let pet = new Pet(nome, saciedadeMax);
        return pet
    }

    mostrar_help() {
        write("Comandos:\n");
        write("  init <nome> <maxsaciedade>: cria um novo pet\n");
        write("  show: mostra o pet\n");
        write("  play: faz o pet brincar\n");
        write("  eat: faz o pet comer\n");
        write("  end: sai do programa\n");
    }

    shell() {
        let pet = new Pet("", 0);//this.create_pet();
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
            } else if (words[0] == "init") {
                let nome = words[1];
                let sacMax = +words[2];
                pet = new Pet(nome, sacMax);
            } else {
                console.log("Comando inválido");
            }
        }
    }
}

let io = new IO();
io.shell();