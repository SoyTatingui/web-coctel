document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.carousel-images img');
    const dotsContainer = document.querySelector('.carousel-dots');
    let currentIndex = 0;
    let intervalId;

    // Crear los puntos de navegación
    function createDots() {
        slides.forEach((_, i) => {
            const dot = document.createElement('span');
            if (i === currentIndex) {
                dot.classList.add('active');
            }
            dot.addEventListener('click', () => goToSlide(i));
            dotsContainer.appendChild(dot);
        });
    }

    // Mostrar slide actual
    function showSlide(index) {
        if (index >= slides.length) currentIndex = 0;
        if (index < 0) currentIndex = slides.length - 1;

        const offset = -currentIndex * 100;
        document.querySelector('.carousel-images').style.transform = `translateX(${offset}%)`;

        // Actualizar puntos de navegación
        document.querySelectorAll('.carousel-dots span').forEach((dot, i) => {
            dot.classList.toggle('active', i === currentIndex);
        });
    }

    // Ir a slide específico
    function goToSlide(index) {
        currentIndex = index;
        showSlide(currentIndex);
        resetInterval();
    }

    // Siguiente slide
    function nextSlide() {
        goToSlide(currentIndex + 1);
    }

    // Anterior slide
    function prevSlide() {
        goToSlide(currentIndex - 1);
    }

    // Resetear intervalo
    function resetInterval() {
        clearInterval(intervalId);
        intervalId = setInterval(nextSlide, 2000); // Cambiar cada 2 segundos
    }

    // Inicialización
    createDots();
    showSlide(currentIndex);
    resetInterval();

    document.querySelector('.carousel-prev').addEventListener('click', prevSlide);
    document.querySelector('.carousel-next').addEventListener('click', nextSlide);

    // Asegurarse de que las imágenes se hayan cargado antes de mostrar el carrusel
    const images = document.querySelectorAll('.carousel-images img');
    let imagesLoaded = 0;

    function initializeCarousel() {
        showSlide(currentIndex); // Mostrar el primer slide
        resetInterval(); // Iniciar el intervalo de cambio automático
    }

    images.forEach(img => {
        img.addEventListener('load', () => {
            imagesLoaded++;
            img.classList.add('loaded');
            if (imagesLoaded === images.length) {
                initializeCarousel();
            }
        });

        img.addEventListener('error', () => {
            imagesLoaded++;
            if (imagesLoaded === images.length) {
                initializeCarousel();
            }
        });
    });

    if (images.length === 0) {
        initializeCarousel(); // Si no hay imágenes, inicializa el carrusel
    }
});
