function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "💕";
    document.body.appendChild(heart);

    // Posición aleatoria en el ancho de la pantalla
    const randomX = Math.random() * window.innerWidth;
    heart.style.left = `${randomX}px`;

    // Tamaño aleatorio del corazón
    const size = Math.random() * 20 + 10; // Entre 10px y 30px
    heart.style.fontSize = `${size}px`;

    // Duración de la animación aleatoria
    const duration = Math.random() * 3 + 2; // Entre 2s y 5s
    heart.style.animationDuration = `${duration}s`;

    // Eliminar el corazón cuando termine la animación
    setTimeout(() => {
        heart.remove();
    }, duration * 1000);
}

// Crear corazones continuamente
setInterval(createHeart, 300);