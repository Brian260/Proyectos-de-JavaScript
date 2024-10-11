let cadena = prompt("Diga la palabra a invertir: "); 

let inversion,array = [];


for(let i=0;i<cadena.length;i++){
    array.push(cadena[i]);
}

inversion = array.reverse();
let resultado = inversion.join("");

document.write(`La palabra digitada es ${cadena}. <br> La palabra invertida es ${resultado}.`)