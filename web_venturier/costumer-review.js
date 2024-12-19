document.addEventListener("DOMContentLoaded", () => {
    // Obtiene los elementos relevantes del carrusel
    const reviewsContainer = document.querySelector('.carousel-wrapper');
    const reviews = document.querySelectorAll('.carousel-wrapper .review-item');
    const prevButton = document.querySelector('.carousel-prev');
    const nextButton = document.querySelector('.carousel-next');

    let currentIndex = 0; // Índice de la review que se está mostrando actualmente
    const totalReviews = reviews.length;

    // Función para actualizar la posición del carrusel
    function updateReviewPosition() {
        // Mueve el contenedor del carrusel a la posición de la review actual
        reviewsContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    // Función para mostrar la review anterior
    function showPreviousReview() {
        currentIndex = (currentIndex === 0) ? totalReviews - 1 : currentIndex - 1;
        updateReviewPosition();
    }

    // Función para mostrar la siguiente review
    function showNextReview() {
        currentIndex = (currentIndex === totalReviews - 1) ? 0 : currentIndex + 1;
        updateReviewPosition();
    }

    // Escucha los clics en los botones de navegación
    prevButton.addEventListener('click', showPreviousReview);
    nextButton.addEventListener('click', showNextReview);

    // Auto reproducción del carrusel (opcional)
    let autoPlay = setInterval(showNextReview, 5000); // Cambia cada 5 segundos

    // Detener el auto play cuando se pasa el mouse por el carrusel
    reviewsContainer.addEventListener('mouseenter', () => {
        clearInterval(autoPlay);
    });

    // Reiniciar el auto play cuando se mueve el mouse fuera del carrusel
    reviewsContainer.addEventListener('mouseleave', () => {
        autoPlay = setInterval(showNextReview, 5000);
    });
});
