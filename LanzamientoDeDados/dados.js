const caja = document.querySelector(".caja");

const boton = document.querySelector(".boton");

const dado1 = document.querySelector(".dado1");
const dado2 = document.querySelector(".dado2");
const dado3 = document.querySelector(".dado3");
const dado4 = document.querySelector(".dado4");
const dado5 = document.querySelector(".dado5");
const dado6 = document.querySelector(".dado6");


const tirarDado = ()=>{
    let numero = Math.round((Math.random() * 5)+1);
    if(numero == 1){
        dado1.style.background = "#46a";
        dado2.style.background = "transparent";
        dado3.style.background = "transparent";
        dado4.style.background = "transparent";
        dado5.style.background = "transparent";
        dado6.style.background = "transparent";
    }
    else if(numero == 2){
        dado1.style.background = "#46a";
        dado2.style.background = "#46a";
        dado3.style.background = "transparent";
        dado4.style.background = "transparent";
        dado5.style.background = "transparent";
        dado6.style.background = "transparent";
    }
    else if(numero == 3){
        dado1.style.background = "#46a";
        dado2.style.background = "#46a";
        dado3.style.background = "#46a";
        dado4.style.background = "transparent";
        dado5.style.background = "transparent";
        dado6.style.background = "transparent";
    }
    else if(numero == 4){
        dado1.style.background = "#46a";
        dado2.style.background = "#46a";
        dado3.style.background = "#46a";
        dado4.style.background = "#46a";
        dado5.style.background = "transparent";
        dado6.style.background = "transparent";
    }
    else if(numero == 5){
        dado1.style.background = "#46a";
        dado2.style.background = "#46a";
        dado3.style.background = "#46a";
        dado4.style.background = "#46a";
        dado5.style.background = "#46a";
        dado6.style.background = "transparent";
    }
    else if(numero == 6){
        dado1.style.background = "#46a";
        dado2.style.background = "#46a";
        dado3.style.background = "#46a";
        dado4.style.background = "#46a";
        dado5.style.background = "#46a";
        dado6.style.background = "#46a";
    }
}

boton.addEventListener("click", tirarDado);

