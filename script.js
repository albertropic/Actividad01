// ANIMACIÓN DEL COCHE
const coche = document.querySelector(".coche");
const carretera = document.querySelector(".carretera");
const articulos = document.querySelectorAll("article");

function moverCoche() {

    // Buscamos el artículo más cercano al centro de la pantalla
    let articuloActual = articulos[0];
    let distanciaMinima = Infinity;

    articulos.forEach(function(articulo) {
        let rectangulo = articulo.getBoundingClientRect();
        let centro = rectangulo.top + rectangulo.height / 2;
        let distancia = Math.abs(centro - window.innerHeight / 2);

        if (distancia < distanciaMinima) {
            distanciaMinima = distancia;
            articuloActual = articulo;
        }
    });

    // Calculamos la posición del artículo respecto a la carretera
    let posicion = articuloActual.getBoundingClientRect().top
                 - carretera.getBoundingClientRect().top
                 + articuloActual.offsetHeight / 2
                 - coche.offsetHeight / 2;

    // Evitamos que el coche se salga de la carretera
    let maximo = carretera.clientHeight - coche.offsetHeight;

    coche.style.top = Math.max(0, Math.min(posicion, maximo)) + "px";
}

// Ejecutamos la función al desplazarnos
window.addEventListener("scroll", moverCoche);

// También al cargar la página
window.addEventListener("load", moverCoche);

//ANIMACIÓN DE LA BANDERA

const bandera = document.querySelector(".bandera");

bandera.addEventListener("click", function() {
    bandera.style.animationPlayState =
        bandera.style.animationPlayState === "paused"
        ? "running"
        : "paused";
});
