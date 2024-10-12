const img = document.querySelector(".img");

let url = prompt("Diga la url para buscar su fichero: ")

let peticion = fetch(url);

peticion
        .then(res=> res.blob())
        .then(imag=>{
            img.src = URL.createObjectURL(imag);
        });

img.addEventListener("load",()=>{
        alert(`La imagen tiene: Ancho: ${img.width}px   Largo: ${img.height}px`);
});