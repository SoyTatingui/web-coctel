document.addEventListener('DOMContentLoaded', function() {
    const mainContent = document.getElementById('main-content');
    const loadingScreen = document.getElementById('loading-screen');

    // Función para verificar si todas las imágenes están cargadas
    function areImagesLoaded() {
        const images = document.querySelectorAll('img');
        for (let img of images) {
            if (!img.complete || img.naturalHeight === 0) {
                return false;
            }
        }
        return true;
    }

    // Función para mostrar el contenido principal
    function showContent() {
        loadingScreen.style.display = 'none';
        mainContent.style.display = 'block';
    }

    // Verificar si las imágenes están cargadas al cargar el contenido
    if (areImagesLoaded()) {
        showContent();
    } else {
        const images = document.querySelectorAll('img');
        let loadedImagesCount = 0;

        images.forEach(img => {
            img.addEventListener('load', () => {
                loadedImagesCount++;
                if (loadedImagesCount === images.length) {
                    showContent();
                }
            });

            img.addEventListener('error', () => {
                loadedImagesCount++;
                if (loadedImagesCount === images.length) {
                    showContent();
                }
            });
        });
    }
});
