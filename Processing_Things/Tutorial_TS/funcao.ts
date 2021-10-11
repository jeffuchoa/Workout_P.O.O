// Função em JS :

//function add(a,b){
//    return a+b
//}


//Funções em TS:

function add(a:number,b:number):number{
    return a+b;
}
console.log(add(2,3));


//Função anônima: função que "não tem nome", função colocada dentro de uma variável

let add1=function (a:number,b:number):number{
    return a+b;
}
console.log(add1(3,4));


//Arrow Function (=>) :

let add2=(a:number,b:number):number => {
       return a+b;
}
console.log(add2(4,5));

// Função mais simples em Arrow Function :

let add3=(a:number,b:number):number => (a+b);
console.log(add(5,6));