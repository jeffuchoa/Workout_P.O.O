let a:number[]=[-1,0,2,1,7,4,8];

a.sort((a,b)=>b-a); // separar numeros em ordem decrescente
a.sort((a,b)=>a-b); // separar numeros pela ordem cescente
a.sort((a,b)=>b-b); // separar numeros pelos lados decrescente
a.sort((a,b)=>a-a); // separar numeros pelos lados crescente

Math.abs // pegar numero absoluto (-5) => 5

console.log(a);


let b:string[]=["Aninha","Albertinho","Patricia","Pablita"];

b.sort(); // Separar por ordem alfabética
b.sort((a,b)=>-a.localeCompare(b)); // Separar em ordem alfabética alcontrário

console.log(b);


class pessoa{

    constructor(public nome:string,public idade:number){
        this.nome = nome;
        this.idade = idade;
    }

    public toString():string {
        return this.nome+" : "+this.idade
    }

}

let pessoas:Array<pessoa> = [new pessoa("Aninha",1),new pessoa("Claudinha",10),new pessoa("Baianinha",50)];

pessoas.sort(); // Separar pessoas por ordem alfabética
pessoas.sort((a,b)=>a.nome.localeCompare(b.nome)); // Ordem alfabética (True)
pessoas.sort((a,b)=>a.idade-b.idade);

console.log(pessoas)
