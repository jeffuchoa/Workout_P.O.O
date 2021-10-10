// Lista sem tipagens em JS:

let li= [1,2,3];
console.log(li);


// Listas Tipadas em TS:

let li2:number[]=[1,2,3,4];
console.log(li2);


// Lista de nomes:

let li3:string[]= ["jefferson", "bunny", "ladybug"];
console.log(li3);


// Interação com a lista:

for (let i=0; i<li2.length; i++){
    console.log(i,li2[i])
}


//Operações sobre lista :

let lista:number[]= [10,20,30,40];
lista.push(50);   // push serve para adicionar um elemento a lista
console.log(lista)

lista.splice(2,3) // splice serve para retirar elementos da lista o primeiro espaço a localização do primeiro item a ser deletado e o segundo espaço quantos elementos vc quer retirar a frente)
 