class Controler {
    private nextTweet: number
    private usuarios: Map<string, Usuario>;
    private tweets: Map<number, Tweet>;
    constructor() {
        this.usuarios = new Map<string, Usuario>();
        this.tweets = new Map<number, Tweet>();
        this.nextTweet = 1;
    }

    addUser(nome: string) {
        this.usuarios.set(nome, (new Usuario(nome)));
    }

    getUser(nome:string) {
        return this.usuarios.get(nome)!;
    }

    getTweets(){
        return this.tweets;
    }

    criarTweet(sender: string, msg: string) {
        if (this.usuarios.has(sender)){
            let tweet = new Tweet(sender,msg,this.nextTweet);
            this.tweets.set(this.nextTweet,tweet)
            this.nextTweet += 1;
            this.getUser(sender)!.getInbox().tweets.set(tweet.getId(),tweet);
            this.enviarTweet();
        } else {
            console.log("Fail: Usuário não existe")
        }
    }
    
    enviarTweet() {
        for (let user of this.usuarios){
            user[1]!.getInbox().clean();
            for (let tweet of this.tweets){  
                if (user[1].getSeguindo().has(tweet[1]!.getUser()) || tweet[1]!.getUser()==user[0]) {
                    this.getUser(user[0])!.getInbox().timeline.set(tweet[0],tweet[1]);
                }
            }
        }
    }

    removeUser(nome: string) {
        if (this.usuarios.has(nome)){
            this.usuarios.delete(nome)
        } else {
            console.log("Fail: Usuário não encontrado")
        }
    }

    rt(sender: string, msg: string, id: number) {
        let tweet = new Tweet(sender,msg,this.nextTweet);
        tweet.setRt(id);
        this.tweets.set(this.nextTweet,tweet)
        this.nextTweet += 1;
        this.getUser(sender)!.getInbox().tweets.set(tweet.getId(),tweet);
        this.enviarTweet();
    }


    public toString() {
        let str: string = "";
        for (let usuario of this.usuarios.values()) {
            str += usuario;
            str += "\n";
        }
        return str;

    }
}

class Usuario {
    private nome: string;
    private inbox: Inbox;
    private seguidores: Map<string, Usuario>;
    private seguindo: Map<string, Usuario>;
    constructor(nome: string){
        this.nome = nome;
        this.seguidores = new Map<string, Usuario>();
        this.seguindo = new Map<string, Usuario>();
        this.inbox = new Inbox;
    }

    darLike(id: number) {
        if (twitter.getTweets().has(id)){
            twitter.getTweets().get(id)!.like(this.nome);
            twitter.enviarTweet();
        } else {
            console.log("Fail: Tweet não encontrado");
        }
    }

    unfollow(usuario: string) {
        if (twitter.getUser(usuario)){
            this.seguindo.delete(usuario);
            twitter.enviarTweet();
        } else {
            console.log("Fail: Usuario não encontrado")
        }

    }

    twetar(msg: string) {
        twitter.criarTweet(this.nome,msg);
    }

    rt(indice: number, msg: string) {
        twitter.rt(this.nome, msg, indice);
    }


    seguirUsuario(usuario: string) {
        if (twitter.getUser(usuario)){
            this.seguindo.set(usuario, twitter.getUser(usuario)!);
            twitter.getUser(usuario)!.seguidores.set(this.nome,twitter.getUser(this.nome)!);
        } else {
            console.log("Fail: Usuario não encontrado")
        }
    }

    getTimeline() {
        twitter.enviarTweet();
        console.log("" + this.inbox);
    }

    getSeguindo() {
        return this.seguindo;
    }

    getInbox() {
        return this.inbox;
    }

    toString() {
        let str: string = this.nome + "\n" + "  " + "Seguidores ";
        let seguidores: Array<string>=[];
        let seguindo: Array<string>=[];
        for (let resultados of this.seguidores.keys()) {
            seguidores.push(resultados);
        }
        str += "[" + seguidores + "]" + "\n" + "  " + "Seguindo ";
        for (let resultado of this.seguindo.keys()) {
            seguindo.push(resultado);
        }
        str += "[" + seguindo + "]";
        str += "\n";
        return str;
    }
}

class Inbox {
    timeline: Map<number, Tweet>;
    tweets: Map<number, Tweet>;
    constructor(){
        this.timeline = new Map<number, Tweet>();
        this.tweets =  new Map<number, Tweet>();
    }

    clean(){
        this.timeline = new Map<number, Tweet>();
    }

    toString():string {
        let str: string = "";
        for (let twet of this.timeline.values()) {
            str += twet + "\n";
        }
        return str;

    }
}

class Tweet {
    private id: number;
    private user: string;
    private msg: string;
    private likes: Array<string>;
    private rt:Tweet|boolean;
    constructor(user: string, msg: string, id: number) {
        this.msg = msg;
        this.user = user;
        this.id = id
        this.likes = [];
        this.rt = false
    }

    setRt(indice:number){
        let rt:Tweet;
        rt=twitter.getTweets().get(indice)!
        this.rt=rt
    }

    like(nome: string) {
        this.likes.push(nome)
    }

    getId() {
        return this.id;
    }

    getUser() {
        return this.user;
    }

    getMsg() {
        return this.msg;
    }

    getLikes() {
        return this.likes;
    }

    toString() {
        let tweet: string = this.id + ":" + this.user + " ( " + this.msg + " )" + " "+ this.likes;
        if (this.rt != false) {
            tweet += "\n" +"     " + "" + this.rt
        }

        return tweet;
    }
}

let twitter = new Controler

twitter.addUser("aninha");
twitter.addUser("joao")
twitter.addUser("carlinha")

twitter.getUser("aninha").seguirUsuario("joao");
twitter.getUser("carlinha").seguirUsuario("joao");
twitter.getUser("joao").seguirUsuario("aninha");
twitter.getUser("joao").seguirUsuario("carlinha");

console.log("" + twitter);

twitter.criarTweet("joao","Mds do céu roubar o banco cansa :(");
twitter.getUser("aninha").darLike(1);
twitter.getUser("joao").getTimeline();

twitter.criarTweet("aninha","joao ladrao roubou meu coração <3");
twitter.getUser("joao").getTimeline();

twitter.criarTweet("carlinha","aninha mlhr se valoriza");
twitter.getUser("joao").getTimeline();

twitter.getUser("joao").darLike(3);
twitter.getUser("joao").getTimeline();

twitter.getUser("joao").unfollow("carlinha");
twitter.getUser("joao").getTimeline();
twitter.getUser("aninha").seguirUsuario("carlinha");
twitter.getUser("carlinha").darLike(3);
twitter.getUser("aninha").darLike(3);
twitter.getUser("aninha").getTimeline();

twitter.getUser("aninha").rt(3,"maldita deixa eu amar ele >:(");
twitter.getUser("aninha").getTimeline();

twitter.getUser("aninha").seguirUsuario("batatinha");