let medidas:number[]=[142,	167.5,		161,	156.5,		178,	161,	157,	154,	166	,		148,	169.7,	163,	173.5,			167,	142,		155];
let faxa:number[]=[142 , 149.2,	149.3 , 156.5,	156.6 , 163.8,	163.9 , 171.1	,171.2 , 178];
let result:number[]=[0,0,0,0,0]
let cont:number=0;


for (let i=0;i<(medidas.length);i++){
    cont=0;
    for (let x=0;x<(faxa.length-1);x++){
        if (medidas[i]>=faxa[x] && medidas[i]<=faxa[x+1]){
            result[cont]=result[cont]+1;

        }
        cont=cont+1
        x=x+1
    }

}

console.log(medidas.length)
console.log(result);