// scripts.js

// Función para resaltar el enlace activo en el menú de navegación
function resaltarEnlaceActivo() {
    var enlaces = document.getElementsByTagName("a");
    var rutaActual = window.location.pathname;

    for (var i = 0; i < enlaces.length; i++) {
        if (enlaces[i].getAttribute("href") === rutaActual) {
            enlaces[i].classList.add("activo");
        }
    }
}

// Llamar a la función al cargar la página
window.onload = function() {
    resaltarEnlaceActivo();
};
