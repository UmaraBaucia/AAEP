// Busca en el HTML el input donde el usuario escribe el texto de busqueda.
const entradaBusqueda = document.getElementById("entrada-busqueda");

// Quita acentos para que "condor" tambien encuentre "condor" o "condor" escrito con acento.
function quitarAcentos(texto) {
  return texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

// Filtra las tarjetas de animales segun el texto escrito por el usuario.
function filtroAnimalRaza() {
  // Captura el texto del input, lo pasa a minuscula, quita espacios extra y elimina acentos.
  const textoBusqueda = quitarAcentos(entradaBusqueda.value.toLowerCase().trim());

  // Selecciona todos los botones que tienen el atributo data-animal y los convierte en array.
  const botonesAnimales = Array.from(document.querySelectorAll("[data-animal]"));

  // filter crea una lista solo con los botones que coinciden con la busqueda.
  const botonesFiltrados = botonesAnimales.filter((boton) => {
    const animal = quitarAcentos(boton.dataset.animal.toLowerCase());
    return animal.includes(textoBusqueda);
  });

  // Primero oculta todas las tarjetas.
  botonesAnimales.forEach((boton) => {
    const tarjeta = boton.closest(".tarjeta");
    tarjeta.style.display = "none";
  });

  // Despues muestra solamente las tarjetas cuyos botones quedaron en botonesFiltrados.
  botonesFiltrados.forEach((boton) => {
    const tarjeta = boton.closest(".tarjeta");
    tarjeta.style.display = "";
  });
}

// Funcion principal que se ejecuta cada vez que cambia el campo de busqueda.
function filtroBusqueda() {
  filtroAnimalRaza();
}

// Activa el filtro en tiempo real mientras el usuario escribe.
entradaBusqueda.addEventListener("input", filtroBusqueda);
