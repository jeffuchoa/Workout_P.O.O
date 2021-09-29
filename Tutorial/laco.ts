// estrutura de repetição em TS :

for (let i=0; i<10; i++){
    console.log(i);
}

// Mesma estrutura acima só que Tipada:

for (let c:number=0; c<10; c++){
    console.log(c);
}

// for in :

for (let i in li2){
    console.log(i,li2[i])
}


// for off (precisamos dos valores da lista ou variável e etc, o off vai ser o numero exato do tamanho da lista e a váriável criada para ser o "i" ou o "e" nesse caso ira assumir o valor de cada uma) :

for (let ele of li2){
    console.log(ele)
}