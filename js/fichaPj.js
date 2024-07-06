// Obtener el parámetro 'nombre' de la URL
function obtenerParametroURL(nombre) {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get(nombre);
}

// Encontrar el personaje por nombre
function encontrarPersonaje(nombre) {
  return personajes.find((personaje) => personaje.nombre === nombre);
}

// Ficha Pjs
function crearFichaPj(personaje) {
  const fichaPj = document.querySelector("#fichaPj");
  fichaPj.innerHTML = "";

  // Crear elementos para la ficha
  const articleHeader = document.createElement("article");
  articleHeader.className = "containerCab";

  // Cambiar la imagen de fondo de 'containerCab'
  articleHeader.style.backgroundImage = `url('img/img${personaje.nombre}.jpg')`;

  const h1 = document.createElement("h1");
  h1.textContent = personaje.nombre;
  const pRol = document.createElement("p");
  pRol.textContent = personaje.rol;

  articleHeader.appendChild(h1);
  articleHeader.appendChild(pRol);

  // Biografía
  const articleBio = document.createElement("article");
  articleBio.className = "contentPj bio";
  const h2Bio = document.createElement("h2");
  h2Bio.textContent = "Biografía";
  const pBio = document.createElement("p");
  pBio.textContent = personaje.biografia;
  articleBio.appendChild(h2Bio);
  articleBio.appendChild(pBio);

  const pOcupacion = document.createElement("p");
  pOcupacion.innerHTML = `<span class="resalt">Ocupación: </span>${personaje.ocupacion}`;
  articleBio.appendChild(pOcupacion);

  const pFamilia = document.createElement("p");
  pFamilia.innerHTML = `<span class="resalt">Familia: </span>${personaje.familia}`;
  articleBio.appendChild(pFamilia);

  const pAmigos = document.createElement("p");
  pAmigos.innerHTML = `<span class="resalt">Amigos: </span>${personaje.amigos}`;
  articleBio.appendChild(pAmigos);

  // Historia
  const articleHist = document.createElement("article");
  articleHist.className = "contentPj hist";
  const h2Hist = document.createElement("h2");
  h2Hist.textContent = "Historia";
  articleHist.appendChild(h2Hist);

  personaje.historia.forEach((parrafo) => {
    const pHist = document.createElement("p");
    pHist.textContent = parrafo;
    articleHist.appendChild(pHist);
  });

  // Curiosidades
  const articleCurio = document.createElement("article");
  articleCurio.className = "contentPj curio";
  const h2Curio = document.createElement("h2");
  h2Curio.textContent = "Curiosidades";
  articleCurio.appendChild(h2Curio);

  const ulCurio = document.createElement("ul");
  personaje.curiosidades.forEach((curiosidad) => {
    const liCurio = document.createElement("li");
    liCurio.textContent = curiosidad;
    ulCurio.appendChild(liCurio);
  });
  articleCurio.appendChild(ulCurio);

  // Identificación
  const articleIden = document.createElement("article");
  articleIden.className = "contentPj";
  const h2Iden = document.createElement("h2");
  h2Iden.textContent = "Identificación";
  articleIden.appendChild(h2Iden);

  const imgIden = document.createElement("img");
  imgIden.src = `img/id${personaje.nombre}.jpg`;
  imgIden.alt = personaje.nombre;
  imgIden.className = "idPjs";
  articleIden.appendChild(imgIden);

  // Recomendaciones
  const articleRecomend = document.createElement("article");
  articleRecomend.className = "contentPj recomend";
  const h2Recomend = document.createElement("h2");
  h2Recomend.textContent = "Recomendaciones";
  h2Recomend.className = "contentPj recom";

  personaje.recomendados.forEach((recomendado) => {
    const divContainer = document.createElement("div");
    divContainer.className = "containerPjs";

    const divImgWrapper = document.createElement("div");
    divImgWrapper.className = "imgWrapper";
    const imgRecomendado = document.createElement("img");
    imgRecomendado.src = `img/img${recomendado}.jpg`; // Ajustar la ruta según sea necesario
    imgRecomendado.alt = recomendado;
    imgRecomendado.className = "imgPjs";
    divImgWrapper.appendChild(imgRecomendado);

    const divTextWrapper = document.createElement("div");
    divTextWrapper.className = "textWrapper";
    const h3Recomendado = document.createElement("h3");
    h3Recomendado.textContent = recomendado;
    divTextWrapper.appendChild(h3Recomendado);

    // Evento de clic
    divContainer.addEventListener("click", () => {
      window.location.href = `pj.html?nombre=${encodeURIComponent(
        recomendado
      )}`;
    });

    divContainer.appendChild(divImgWrapper);
    divContainer.appendChild(divTextWrapper);
    articleRecomend.appendChild(divContainer);
  });

  // Agregar los artículos al contenedor principal
  fichaPj.appendChild(articleHeader);
  fichaPj.appendChild(articleBio);
  fichaPj.appendChild(articleHist);
  fichaPj.appendChild(articleCurio);
  fichaPj.appendChild(articleIden);
  fichaPj.appendChild(h2Recomend);
  fichaPj.appendChild(articleRecomend);
}

// Obtener el nombre del personaje de la URL
const nombrePersonaje = obtenerParametroURL("nombre");

// Encontrar y mostrar el personaje
const personajeSeleccionado = encontrarPersonaje(nombrePersonaje);

if (personajeSeleccionado) {
  crearFichaPj(personajeSeleccionado);
} else {
  console.error("Personaje no encontrado");
}
