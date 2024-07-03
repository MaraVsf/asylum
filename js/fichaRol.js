// Obtener el parámetro 'nombre' de la URL
function obtenerParametroURL(nombre) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(nombre);
}

// Encontrar el personaje por nombre
function encontrarRoleador(nombre) {
  return roleadores.find((roleador) => roleador.nombre === nombre);
}

// Ficha Rol .containerCab
function crearFichaRol(roleador) {
  const fichaRol = document.querySelector("#fichaRol");
  fichaRol.innerHTML = ""; // Limpiar contenido previo

  //* Crear elementos para la ficha
  const articleHeader = document.createElement("article");
  articleHeader.className = "containerCab";

  // Cambiar la imagen de fondo de 'containerCab'
  articleHeader.style.backgroundImage = `url('img/img${roleador.nombre}.jpg')`;

  const h1 = document.createElement("h1");
  h1.textContent = roleador.nombre;

  articleHeader.appendChild(h1);
  //*

  // Personajes
  const h2Pers = document.createElement("h2");
  h2Pers.textContent = "Personajes";
  const articlePers = document.createElement("article");
  articlePers.className = "contentRol pjsRol";

  roleador.personajes.forEach((personaje) => {
    const divContainer = document.createElement("div");
    divContainer.className = "containerPjs";

    const divImgWrapper = document.createElement("div");
    divImgWrapper.className = "imgWrapper";
    const imgPersonaje = document.createElement("img");
    imgPersonaje.src = `img/img${personaje}.jpg`; // Ajustar la ruta según sea necesario
    imgPersonaje.alt = personaje;
    imgPersonaje.className = "imgPjs";
    divImgWrapper.appendChild(imgPersonaje);

    const divTextWrapper = document.createElement("div");
    divTextWrapper.className = "textWrapper";
    const h3Personaje = document.createElement("h3");
    h3Personaje.textContent = personaje;
    divTextWrapper.appendChild(h3Personaje);

    // Evento de clic
    divContainer.addEventListener("click", () => {
      window.location.href = `pj.html?nombre=${encodeURIComponent(personaje)}`;
    });

    divContainer.appendChild(divImgWrapper);
    divContainer.appendChild(divTextWrapper);
    articlePers.appendChild(divContainer);
  });

  // Agregar los artículos al contenedor principal
  fichaRol.appendChild(articleHeader);
  fichaRol.appendChild(h2Pers);
  fichaRol.appendChild(articlePers);
}

// Obtener el nombre del personaje de la URL
const nombreRoleador = obtenerParametroURL("nombre");

// Encontrar y mostrar el personaje
const roleadorSeleccionado = encontrarRoleador(nombreRoleador);

if (roleadorSeleccionado) {
  crearFichaRol(roleadorSeleccionado);
} else {
  console.error("Roleador no encontrado" + roleadorSeleccionado);
}
