const pantalla = document.querySelector(".pantalla");
const botones = document.querySelectorAll(".btn");

botones.forEach((boton) => {
  boton.addEventListener("click", () => {
    const botonApretado = boton.textContent;
    // Funcion de borrar todo:
    if (boton.id === "c") {
      pantalla.textContent = "0";
      return;
    }
    // Funcion de borrar el ultimo numero:
    if (boton.id === "borrar") {
      if (
        pantalla.textContent.length === 1 ||
        pantalla.textContent === "Error!"
      ) {
        pantalla.textContent = "0";
      } else {
        pantalla.textContent = pantalla.textContent.slice(0, -1);
      }
      return;
    }
    // Funcion de igual:
    if (boton.id === "igual") {
      try {
        pantalla.textContent = eval(pantalla.textContent);
      } catch {
        pantalla.textContent = "Error!";
      }
      return;
    }

    // Funcion de añadir numeros:
    if (pantalla.textContent === "0" || pantalla.textContent === "Error!") {
      pantalla.textContent = botonApretado;
    } else {
      pantalla.textContent += botonApretado;
    }
  });
});
