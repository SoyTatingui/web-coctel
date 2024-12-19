document.addEventListener('DOMContentLoaded', function() {
    // Selecciona el título de la sección
    const sectionTitle = document.querySelector('.section-title');

    // Crea una instancia de IntersectionObserver
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Añade la clase para activar la animación
                sectionTitle.classList.add('animated');
                // Deja de observar una vez que se ha activado la animación
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 }); // Observa cuando el 50% del elemento es visible

    // Empieza a observar el elemento
    observer.observe(sectionTitle);
});

document.addEventListener('DOMContentLoaded', () => {
    const titles = document.querySelectorAll('.section-title');
    titles.forEach(title => {
        title.classList.add('animated');
    });
});