class Usuario{
    nome:string;
    inbox:Inbox
    seguidores:Map<string,Usuario>
    seguindo:Map<string,Usuario>

    constructor(nome:string){
        this.nome=nome
    }

    toString(){

    }
}

class Inbox{
    timeline:Map<number,Tweet>
    tweets:Map<number,Tweet>

}

class Tweet{
    id:number;
    user:string;
    likes
}

class Twitter{
    
}