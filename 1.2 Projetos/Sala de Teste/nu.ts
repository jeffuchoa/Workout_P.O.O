let cadeiras = new Map<number, string>();
 
cadeiras.set(3, "fco");
cadeiras.set(5, "ana");
cadeiras.set(1, "fabio");

cadeiras.has(1); //sim

//1. Iterate over map keys


for (let key of cadeiras.keys()) {
    console.log(key);
}

function compare_to_int(a: number, b: number) {
    return a - b;
}

let keys = [...cadeiras.keys()].sort(compare_to_int);                                                                                                         

for (let key of cadeiras.keys()) {
    console.log(key);                   
}

//2. Iterate over map values
for (let value of cadeiras.values()) {
    console.log(value);                 //37 35 40
}

//3. Iterate over map entries
for (let entry of cadeiras.entries()) {
    console.log(entry[0], entry[1]);    //"Lokesh" 37 "Raj" 35 "John" 40
}

//4. Using object destructuring
for (let [key, value] of cadeiras) {
    console.log(key, value);            //"Lokesh" 37 "Raj" 35 "John" 40
}

console.log("ola pessoal");