let nombrePoligono = prompt("Diga el poligono para calcularle su area: ");

const calcularArea = (poligono)=>{
    let nombre =poligono.toLowerCase();
    let area;
    if(nombre === "triangulo" || nombre === "triángulo" || nombre === "cuadrado" || nombre === "rectangulo" || nombre === "rectángulo"){
        let base = prompt(`Escriba la longitud de la base del ${nombre} en cm: `)
        if(nombre === "triangulo" || nombre === "triángulo"){
            let altura = prompt(`Escriba la altura del ${nombre} en cm:`)
            area = (base * altura) /2;
        }else if(nombre === "cuadrado"){
            area = base * base;
        }else if(nombre === "rectangulo" || nombre === "rectángulo"){
            let altura = prompt(`Escriba la altura del ${nombre} en cm:`)
            area = (base * altura);
        }
    return document.write(`El área del ${nombre} es de `+area +"cm");
    } 
    else{
        alert(`El poligono digitado no existe o no se le puede calcular su área.`);
    }
}



calcularArea(nombrePoligono);
