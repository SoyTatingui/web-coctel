document.addEventListener('DOMContentLoaded', function() {
    var languageSelector = document.querySelector('.language-selector');
    var dropdownContent = document.querySelector('.dropdown-content');
    var currentFlag = document.getElementById('current-flag');
    var langEnglish = document.getElementById('lang-english');
    var langSpanish = document.getElementById('lang-spanish');

    languageSelector.addEventListener('click', function(event) {
        event.stopPropagation();
        dropdownContent.classList.toggle('show');
    });

    window.addEventListener('click', function(event) {
        if (!event.target.closest('.language-selector')) {
            dropdownContent.classList.remove('show');
        }
    });

    // Función para cambiar el idioma
    function changeLanguage(flagSrc, flagAlt, text) {
        currentFlag.src = flagSrc;
        currentFlag.alt = flagAlt;
        document.querySelector('.dropdown-content').innerHTML = `
            <a href="#" id="lang-${text.toLowerCase()}">
                <img src="${flagSrc}" alt="${flagAlt}"> ${text}
            </a>`;
    }

    // Manejo de clic en el dropdown
    langEnglish.addEventListener('click', function(event) {
        event.preventDefault();
        changeLanguage('Imagenes/Flag_of_USA.png', 'USA', 'English');
        dropdownContent.classList.remove('show');
        window.location.href = 'index-en.html'; // Redirige a la versión en inglés
    });

    langSpanish.addEventListener('click', function(event) {
        event.preventDefault();
        changeLanguage('Imagenes/Flag_of_Argentina.png', 'Argentina', 'Español');
        dropdownContent.classList.remove('show');
        window.location.href = 'index.html'; // Redirige a la versión en español
    });
});

