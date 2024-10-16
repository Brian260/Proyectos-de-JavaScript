const campoBatalla = document.getElementById("campo-batalla");
const msjBatalla = document.getElementById("msj-batalla");
const ataqueJugador = document.getElementById("img-ataque-jugador");
const ataquePc = document.getElementById("img-ataque-pc");
const btnPiedra = document.getElementById("btn-piedra");
const btnPapel = document.getElementById("btn-papel");
const btnTijera = document.getElementById("btn-tijeras");

let opcionJugador;
let opcionPC;
let imgJugador;
let imgPC;

const imagenes = [
  {
    name: "Piedra",
    url: "Piedra.png",
  },
  {
    name: "Papel",
    url: "Papel.png",
  },
  {
    name: "Tijeras",
    url: "Tijeras.png",
  },
];

// Metodo para cuando cargue la web se borre el campo de batalla:

function iniciar() {
  campoBatalla.style.display = "none";
}

window.addEventListener("load", iniciar());

// Metodo para los botones:

btnPiedra.addEventListener("click", () => {
  opcionJugador = "Piedra";
  opPC();
});

btnPapel.addEventListener("click", () => {
  opcionJugador = "Papel";
  opPC();
});

btnTijera.addEventListener("click", () => {
  opcionJugador = "Tijeras";
  opPC();
});

const opPC = () => {
  let aleatorio = nAleatorio();
  console.log(aleatorio);
  if (aleatorio == "0") {
    opcionPC = "Piedra";
  } else if (aleatorio == "1") {
    opcionPC = "Papel";
  }
  if (aleatorio == "2") {
    opcionPC = "Tijeras";
  }
  batalla();
};

const batalla = () => {
  if (opcionJugador == opcionPC) {
    msjBatalla.innerHTML = "Has Empatado";
  } else if (opcionJugador == "Papel" && opcionPC == "Piedra") {
    msjBatalla.innerHTML = "Has Ganado";
  } else if (opcionJugador == "Piedra" && opcionPC == "Tijeras") {
    msjBatalla.innerHTML = "Has Ganado";
  } else if (opcionJugador == "Tijeras" && opcionPC == "Papel") {
    msjBatalla.innerHTML = "Has Ganado";
  } else {
    msjBatalla.innerHTML = "Has Perdido";
  }
  addImagenes();
};

const nAleatorio = () => {
  let n = Math.floor(Math.random() * 3);
  return n;
};

function addImagenes() {
  for (let i = 0; i < imagenes.length; i++) {
    if (opcionJugador == imagenes[i].name) {
      imgJugador = imagenes[i].url;
      var inserta = ` <img class="img-batalla" src=${imgJugador} alt="imagen-ataque" />
      `;
      ataqueJugador.innerHTML = inserta;
    }
    if (opcionPC == imagenes[i].name) {
      imgPC = imagenes[i].url;
      var inserta = ` <img class="img-batalla" src=${imgPC} alt="imagen-ataque" />`;
      ataquePc.innerHTML = inserta;
    }
  }
  campoBatalla.style.display = `flex`;
}
