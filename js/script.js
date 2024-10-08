const pjs = document.querySelector("#pjs");
const rol = document.querySelector("#rol");

// Función para barajar un array usando el algoritmo de Fisher-Yates
function barajar(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

let listaPersonajes = barajar(personajes);
let listaRoleadores = barajar(roleadores);

// Personajes
function mostrarPersonajes() {
  rol.innerHTML = ""; // Limpiar el contenedor de rol
  pjs.innerHTML = ""; // Limpiar el contenedor de personajes

  listaPersonajes.forEach((personaje) => {
    // Crear artículo contenedor para el personaje
    const articleContainer = document.createElement("article");
    articleContainer.className = "containerPjs";

    // Imagen del personaje
    const divImgWrapper = document.createElement("div");
    divImgWrapper.className = "imgWrapper";
    const imgPersonaje = document.createElement("img");
    imgPersonaje.src = `img/img${personaje.nombre}.jpg`; // Usar la propiedad imagen del objeto
    imgPersonaje.alt = personaje.nombre;
    imgPersonaje.className = "imgPjs";
    divImgWrapper.appendChild(imgPersonaje);

    // Texto del personaje
    const divTextWrapper = document.createElement("div");
    divTextWrapper.className = "textWrapper";
    const h3Personaje = document.createElement("h3");
    h3Personaje.textContent = personaje.nombre;
    divTextWrapper.appendChild(h3Personaje);
    const pPersonaje = document.createElement("p");
    pPersonaje.textContent = personaje.rol;
    divTextWrapper.appendChild(pPersonaje);

    // Evento de clic
    articleContainer.addEventListener("click", () => {
      window.location.href = `pj.html?nombre=${encodeURIComponent(
        personaje.nombre
      )}`;
    });

    // Agregar elementos al artículo contenedor
    articleContainer.appendChild(divImgWrapper);
    articleContainer.appendChild(divTextWrapper);

    // Agregar artículo contenedor al contenedor principal de personajes
    pjs.appendChild(articleContainer);
  });
}

// Llamar a la función para mostrar los personajes
mostrarPersonajes();

// Roleadores
function mostrarRoleadores() {
  pjs.innerHTML = ""; // Limpiar el contenedor de personajes
  rol.innerHTML = ""; // Limpiar el contenedor de rol

  listaRoleadores.forEach((roleador) => {
    // Crear artículo contenedor para el roleador
    const articleContainer = document.createElement("article");
    articleContainer.className = "containerPjs";

    // Imagen del roleador
    const divImgWrapper = document.createElement("div");
    divImgWrapper.className = "imgWrapper";
    const imgRoleador = document.createElement("img");
    imgRoleador.src = `img/img${roleador.nombre}.jpg`; // Usar la propiedad imagen del objeto
    imgRoleador.alt = roleador.nombre;
    imgRoleador.className = "imgPjs";
    divImgWrapper.appendChild(imgRoleador);

    // Texto del roleador
    const divTextWrapper = document.createElement("div");
    divTextWrapper.className = "textWrapper";
    const h3Roleador = document.createElement("h3");
    h3Roleador.textContent = roleador.nombre;
    divTextWrapper.appendChild(h3Roleador);

    // Evento de clic
    articleContainer.addEventListener("click", () => {
      window.location.href = `rol.html?nombre=${encodeURIComponent(
        roleador.nombre
      )}`;
    });

    // Agregar elementos al artículo contenedor
    articleContainer.appendChild(divImgWrapper);
    articleContainer.appendChild(divTextWrapper);

    // Agregar artículo contenedor al contenedor principal de personajes
    rol.appendChild(articleContainer);
  });
}

// Llamar a la funciones
const buttonPjs = document.querySelector("#buttonPjs");
const buttonRol = document.querySelector("#buttonRol");
buttonPjs.addEventListener("click", mostrarPersonajes);
buttonRol.addEventListener("click", mostrarRoleadores);

// Dark Mode

document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.getElementById("darkModeToggle");
  const currentMode = localStorage.getItem("colorMode");

  // Aplica la preferencia guardada
  if (currentMode) {
    document.body.classList.add(currentMode);
  } else {
    // Detecta preferencia del sistema y establece la clase por defecto
    const prefersDarkScheme = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    document.body.classList.add(prefersDarkScheme ? "dark-mode" : "light-mode");
  }

  // Alterna el modo al hacer clic en el botón
  toggleButton.addEventListener("click", () => {
    if (document.body.classList.contains("dark-mode")) {
      document.body.classList.remove("dark-mode");
      document.body.classList.add("light-mode");
      localStorage.setItem("colorMode", "light-mode");
    } else {
      document.body.classList.remove("light-mode");
      document.body.classList.add("dark-mode");
      localStorage.setItem("colorMode", "dark-mode");
    }
  });
});
