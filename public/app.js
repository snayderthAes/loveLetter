// Agrega un event listener para detectar el inicio del deslizamiento
let startX = 0;
let isDragging = false;
let currentIndex = 0;

document.getElementById('slider').addEventListener('pointerdown', (e) => {
    isDragging = true;
    startX = e.pageX;
});

// Agrega event listeners para detectar el deslizamiento
document.addEventListener('pointermove', (e) => {
    if (!isDragging) return;
    e.preventDefault();

    const x = e.pageX;
    const move = x - startX;
    const slider = document.querySelector('.wrapper-holder');

    // Calcula la nueva posición del slider
    const newPosition = -(currentIndex * slider.offsetWidth) + move;

    // Limita la nueva posición dentro de los límites de las imágenes
    const minPosition = 0;
    const maxPosition = -(slider.offsetWidth * (document.querySelectorAll('.slide').length - 1));
    const boundedPosition = Math.min(Math.max(newPosition, maxPosition), minPosition);

    // Actualiza la posición del slider
    slider.style.transform = `translateX(${boundedPosition}px)`;
});

// Agrega un event listener para detectar el final del deslizamiento
document.addEventListener('pointerup', () => {
    if (!isDragging) return;
    isDragging = false;

    const slider = document.querySelector('.wrapper-holder');

    // Calcula el índice de la imagen más cercana
    const newPosition = slider.getBoundingClientRect().left - document.querySelector('.container').getBoundingClientRect().left;
    let newIndex = Math.round(-newPosition / slider.offsetWidth);

    // Limita el índice dentro de los límites de las imágenes
    newIndex = Math.min(Math.max(newIndex, 0), document.querySelectorAll('.slide').length - 1);

    // Mueve el slider hacia la imagen más cercana
    currentIndex = newIndex;
    const targetPosition = -(currentIndex * slider.offsetWidth);
    slider.style.transform = `translateX(${targetPosition}px)`;
});

// audio
// Función para reproducir el audio
function reproducirAudio() {
    var audio = document.getElementById('miAudio');
    audio.play();
    // Eliminar el evento click después de la primera reproducción
    document.removeEventListener('click', reproducirAudio);
}

// Agregar un evento click a toda la página
document.addEventListener('click', reproducirAudio);

// Función para reproducir el audio nuevamente cuando termine la reproducción
function reproducirNuevamente() {
    var audio = document.getElementById('miAudio');
    // Volver a reproducir el audio
    audio.play();
}

// Agregar un evento para detectar cuando el audio haya terminado de reproducirse
document.getElementById('miAudio').addEventListener('ended', reproducirNuevamente);


// TEXTO ESCRIBIENDO

// Array de mensajes
var mensajes = [
    "Eres lo más bonito que me ha pasado en la vida, eres mi gran amor. ♡",
    "Tienes unos ojitos y una sonrisa que le dan sentido a mi vida. 💗",
    "Un poema para ti:",
    "La luna es lo más bello de la noche, el sol es lo más bello del día y tú eres lo más hermoso de mi vida. 💘🥰",
    "Cualquier momento a tu lado es perfecto para ser feliz, por que no es el tiempo ni el lugar, eres tú. ❤️‍🩹💫"
    // Agrega aquí más mensajes si deseas
];

// Velocidad de escritura en milisegundos
var velocidadEscritura = 80;

// Función para mostrar un mensaje con animación de escritura y borrado
function mostrarMensajeConAnimacion(index) {
    var mensaje = mensajes[index];
    var mensajeElemento = document.getElementById('mensaje');
    
    // Animación de escritura
    mensajeElemento.textContent = '';
    var i = 0;
    var intervalo = setInterval(function() {
        mensajeElemento.textContent += mensaje[i];
        i++;
        if (i === mensaje.length) {
            clearInterval(intervalo);
            // Llamar a la función de borrado después de un tiempo
            setTimeout(function() {
                borrarMensajeConAnimacion(index);
            }, 1000); // Tiempo de espera antes de borrar el mensaje (1000ms = 1 segundo)
        }
    }, velocidadEscritura);
}

// Función para borrar un mensaje con animación
function borrarMensajeConAnimacion(index) {
    var mensajeElemento = document.getElementById('mensaje');
    // Animación de borrado
    mensajeElemento.style.animation = 'borrando 1s forwards';
    // Llamar a la función de mostrar el siguiente mensaje después de que se complete la animación de borrado
    setTimeout(function() {
        // Incrementar el índice o volver al primero si llegamos al final del array
        var siguienteIndex = (index + 1) % mensajes.length;
        // Llamar a la función para mostrar el siguiente mensaje
        mostrarMensajeConAnimacion(siguienteIndex);
        // Restaurar la animación de escritura
        mensajeElemento.style.animation = '';
    }, 2000); // Tiempo de espera después de la animación de borrado (1000ms = 1 segundo)
}

// Llamar a la función para mostrar el primer mensaje
mostrarMensajeConAnimacion(0);

// notificacion

document.addEventListener("DOMContentLoaded", function() {
    var okayButton = document.getElementById("okayButton");
    var notification = document.getElementById("notification");

    okayButton.addEventListener("click", function() {
        notification.classList.add("hidden");
    });
});
