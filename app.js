
// Mensaje en la consola
console.log("¡Bienvenido al portafolio de Samuel David!");

// Animación de aparición de las secciones
const secciones = document.querySelectorAll(
    ".hero-content, .sobre-mi, .habilidades"
);

const observador = new IntersectionObserver((entradas) => {
    entradas.forEach((entrada) => {
        if (entrada.isIntersecting) {
            entrada.target.classList.add("visible");
        }
    });
}, {
    threshold: 0.15
});

secciones.forEach((seccion) => {
    seccion.classList.add("aparecer");
    observador.observe(seccion);
});
