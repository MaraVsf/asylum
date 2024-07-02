// Obtener el parámetro 'nombre' de la URL
function obtenerParametroURL(nombre) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(nombre);
}

// Encontrar el personaje por nombre
function encontrarRoleador(nombre) {
  return roleadores.find((roleador) => roleador.nombre === nombre);
}

// Ficha Rol
function crearFichaRol(roleador) {
  const fichaRol = document.querySelector("#fichaRol");
  fichaRol.innerHTML = ""; // Limpiar contenido previo

  // Crear elementos para la ficha
  const articleHeader = document.createElement("article");
  articleHeader.className = "headerPj";

  // Imagen del roleador
  const imgDiv = document.createElement("div");
  imgDiv.className = "imgDiv";
  const imgPersonaje = document.createElement("img");
  imgPersonaje.src = imgPersonaje.src = `img/img${roleador.nombre}.jpg`;
  imgPersonaje.alt = roleador.nombre;
  imgPersonaje.className = "imgPjs";
  imgDiv.appendChild(imgPersonaje);

  const descriptionDiv = document.createElement("div");
  descriptionDiv.className = "descriptionPj";
  const h1 = document.createElement("h1");
  h1.textContent = roleador.nombre;

  descriptionDiv.appendChild(h1);
  articleHeader.appendChild(imgDiv);
  articleHeader.appendChild(descriptionDiv);

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
