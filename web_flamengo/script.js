// tipografia monserrat o roboto
//banderas en los selects
//lecciones que lleve al formulario



// Traducciones para los diferentes idiomas
const translations = {
    it: {
        Reserva:"",
        PrincipiantesTitulo:"Principianti",
        IntermedioTitulo:"Intermedio",
        AvanzadosTitulo:"Avanzato",
        NiñosTitulo :"Bambini",
        SeniorTitulo:"Senior",
        Principiantes:"Scopri il mondo emozionante del flamenco da zero! Le nostre lezioni per principianti sono pensate per farti imparare i movimenti di base, il ritmo e la passione che caratterizzano quest'arte, indipendentemente dalla tua esperienza. Immergiti nell'essenza del flamenco, senti ogni battito e lasciati trasportare dalla musica. Osare fare i tuoi primi passi con noi!",
        Intermedio:"Conosci già i passi base e vuoi portare la tua danza al livello successivo? Le lezioni intermedie di flamenco sono pensate per coloro che desiderano perfezionare la propria tecnica, imparare nuove coreografie e approfondire gli stili più complessi del flamenco. Esprimi la tua creatività e il tuo stile mentre affini la tua espressività e presenza scenica. È il momento di metterti alla prova e continuare a crescere come ballerino o ballerina!",
        Avanzados:"Per i veri appassionati che vivono e respirano flamenco. Le nostre lezioni avanzate sono un viaggio intenso attraverso la tecnica, la precisione e la più pura espressione della danza flamenca. Progettate per ballerini esperti, queste sessioni ti aiuteranno a perfezionare la tua arte, esplorando nuovi stili e sequenze coreografiche che ti porteranno al culmine del tuo potenziale artistico. Osare vivere il flamenco nella sua massima espressione!",
        Niños :"Che anche i più piccoli si lascino incantare dal fascino del flamenco! Le lezioni di flamenco per bambini sono pensate per far imparare i movimenti di base, il ritmo e la grazia della danza, divertendosi in un ambiente sicuro e gioioso. Promuoviamo l'espressione corporea, la coordinazione e la fiducia in se stessi attraverso la musica e la danza. Un'esperienza che non dimenticheranno mai!",
        Senior:"Riscopri la passione, la forza e l'eleganza del flamenco con le nostre lezioni progettate appositamente per adulti. Non importa se è la tua prima volta o se hai già esperienza, queste lezioni offrono uno spazio per imparare, divertirsi e connettersi con il ritmo e l'energia del flamenco. Non c'è limite di età per sentire la magia del flamenco. Vieni e dimostra la tua passione ad ogni passo!",
        
        
        Inicio:"Home",
        Clases: "Clases",
        biografia: "Biografia",
        spettacoli: "Spettacoli",
        galleria: "Galleria",
        contatto: "Contatto",
        lezioniTitle: "Lezioni",
        lezioniText: "Offro lezioni di flamenco per tutti i livelli, dai principianti agli avanzati.",
        biografiaTitle: "Biografia",
        biografiaText: "Valeria Flores è una bailaora appassionata e versatile, conosciuta per la sua gioia, eleganza e forza sul palco. Con anni di esperienza e formazione, ha perfezionato la sua arte, combinando tecnica impeccabile ed espressione autentica. Il suo stile si caratterizza per l'energia vibrante e la profondità emotiva che trasmette in ogni interpretazione, connettendo con il pubblico attraverso il ritmo e il compás del flamenco. Valeria non solo padroneggia la tradizione, ma aggiunge anche il suo tocco personale, creando un marchio unico che la distingue come una vera ambasciatrice di quest'arte. <a  href='imagenes/Valeria Flores Flamenco CV.pdf' download>vedi CV qui</a>.",
        spettacoliTitle: "Spettacoli",
        spettacoliText: "Disponibile per spettacoli in eventi, workshops, festival e masterclass.",
        contattoTitle: "Contatto",
        address: "via Verdi 36, Empoli Firenze Italia",
        name: "Nome:",
        email: "Email:",
        message: "Messaggio:",
        submit: "Invia",
        rights: "Tutti i diritti riservati."
    },
    es: {
        Reserva:"",
        PrincipiantesTitulo:"Principiantes",
        IntermedioTitulo:"Intermedio",
        AvanzadosTitulo:"Avanzados",
        NiñosTitulo :"Niños",
        SeniorTitulo:"Senior",
        Principiantes:"¡Descubre el apasionante mundo del flamenco desde cero! Nuestras clases para principiantes están diseñadas para que, sin importar tu experiencia, puedas aprender los movimientos básicos, el ritmo y la pasión que caracteriza a este arte. Sumérgete en la esencia del flamenco, siente cada compás y déjate llevar por la música. ¡Atrévete a dar tus primeros pasos con nosotros!",
        Intermedio:"¿Ya conoces los pasos básicos y quieres llevar tu baile al siguiente nivel? Las clases intermedias de flamenco están pensadas para quienes desean perfeccionar su técnica, aprender nuevas coreografías y adentrarse en los estilos más complejos del flamenco. Pulsa tu creatividad y estilo mientras refinas tu expresión y presencia escénica. ¡Es hora de desafiarte y seguir creciendo como bailaor o bailaora!",
        Avanzados:"Para los verdaderos apasionados que viven y respiran flamenco. Nuestras clases avanzadas son un viaje intenso por la técnica, la precisión y la expresión más pura del baile flamenco. Diseñadas para bailarines experimentados, estas sesiones te ayudarán a perfeccionar tu arte, explorando nuevos estilos y secuencias coreográficas que te llevarán a la cúspide de tu potencial artístico. ¡Atrévete a vivir el flamenco en su máxima expresión!",
        Niños :"¡Que los más pequeños también se dejen llevar por el encanto del flamenco! Las clases de flamenco para niños están pensadas para que aprendan los movimientos básicos, el ritmo y la gracia del baile, mientras se divierten en un ambiente seguro y alegre. Fomentamos la expresión corporal, la coordinación y la confianza en sí mismos a través de la música y el baile. ¡Una experiencia que nunca olvidarán!",
        Senior:"Redescubre la pasión, la fuerza y la elegancia del flamenco con nuestras clases diseñadas especialmente para adultos. Sin importar si es tu primera vez o si ya tienes experiencia, estas clases ofrecen un espacio para aprender, disfrutar y conectar con el ritmo y la energía del flamenco. No hay límite de edad para sentir la magia del flamenco. ¡Ven y demuestra tu pasión a cada paso!",
        Inicio:"Inicio",
        Clases: "Lecciones",
        biografia: "Biografía",
        spettacoli: "Espectáculos",
        galleria: "Galería",
        contatto: "Contacto",
        lezioniTitle: "Lecciones",
        lezioniText: "Ofrezco clases de flamenco para todos los niveles, desde principiantes hasta avanzados.",
        biografiaTitle: "Biografía",
        biografiaText: "Valeria Flores es una bailaora apasionada y versátil, reconocida por su alegría, elegancia y fuerza en el escenario. Con años de experiencia y formación, ha perfeccionado su arte, combinando técnica impecable y expresión auténtica. Su estilo se caracteriza por la energía vibrante y la profundidad emocional que transmite en cada interpretación, conectando con el público a través del ritmo y el compás del flamenco. Valeria no solo domina la tradición, sino que también aporta su toque personal, creando un sello único que la distingue como una verdadera embajadora de este arte.<a  href='imagenes/Valeria Flores Flamenco CV.pdf' download>ver CV aquí</a>.",
        spettacoliTitle: "Espectáculos",
        spettacoliText: "Disponible para espectáculos en eventos, talleres, festivales y masterclasses.",
        contattoTitle: "Contacto",
        address: "via Verdi 36, Empoli Florencia Italia",
        name: "Nombre:",
        email: "Correo electrónico:",
        message: "Mensaje:",
        submit: "Enviar",
        rights: "Todos los derechos reservados."
    },
    en: {
        Reserva:"",
        PrincipiantesTitulo:"Beginners",
        IntermedioTitulo:"Intermediate",
        AvanzadosTitulo:"Advanced",
        NiñosTitulo :"Kids ",
        SeniorTitulo:"Senior",
        Principiantes:"Discover the exciting world of flamenco from scratch! Our beginner classes are designed so that, regardless of your experience, you can learn the basic movements, rhythm, and passion that characterize this art form. Immerse yourself in the essence of flamenco, feel every beat, and let the music guide you. Dare to take your first steps with us!",
        Intermedio:"Do you already know the basic steps and want to take your dance to the next level? The intermediate flamenco classes are designed for those who want to perfect their technique, learn new choreographies, and delve into more complex styles of flamenco. Channel your creativity and style as you refine your expression and stage presence. It's time to challenge yourself and keep growing as a dancer!",
        Avanzados:"For true flamenco enthusiasts who live and breathe the art. Our advanced classes are an intense journey through technique, precision, and the purest expression of flamenco dance. Designed for experienced dancers, these sessions will help you perfect your craft, exploring new styles and choreographic sequences that will push your artistic potential to its peak. Dare to experience flamenco at its highest level!",
        Niños :"Let the little ones be enchanted by the magic of flamenco! Flamenco classes for children are designed so they can learn the basic movements, rhythm, and grace of the dance while having fun in a safe and joyful environment. We foster body expression, coordination, and self-confidence through music and dance. An experience they will never forget!",
        Senior:"Rediscover the passion, strength, and elegance of flamenco with our classes specially designed for adults. Whether it’s your first time or you already have experience, these classes offer a space to learn, enjoy, and connect with the rhythm and energy of flamenco. There is no age limit to feel the magic of flamenco. Come and show your passion with every step!",
        Inicio:"Home",
        Clases: "Lessons",
        biografia: "Biography",
        spettacoli: "Performances",
        galleria: "Gallery",
        contatto: "Contact",
        lezioniTitle: "Lessons",
        lezioniText: "I offer flamenco lessons for all levels, from beginners to advanced.",
        biografiaTitle: "Biography",
        biografiaText: "Valeria Flores is a passionate and versatile flamenco dancer, known for her joy, elegance, and strength on stage. With years of experience and training, she has perfected her art, combining impeccable technique with authentic expression. Her style is characterized by vibrant energy and the emotional depth she conveys in every performance, connecting with the audience through the rhythm and compás of flamenco. Valeria not only masters the tradition but also brings her personal touch, creating a unique signature that distinguishes her as a true ambassador of this art.<a  href='imagenes/Valeria Flores Flamenco CV.pdf' download>see CV here</a>.",
        spettacoliTitle: "Performances",
        spettacoliText: "Available for performances at events, workshops, festivals, and masterclasses.",
        contattoTitle: "Contact",
        address: "via Verdi 36, Empoli Florence Italy",
        name: "Name:",
        email: "Email:",
        message: "Message:",
        submit: "Send",
        rights: "All rights reserved."
    }
};

// Función para traducir la página
function translatePage(language) {
    document.querySelectorAll('[data-key]').forEach(element => {
        const key = element.getAttribute('data-key');
        element.innerHTML = translations[language][key] || element.innerHTML;
        

    });
}

// Ejecuta el código cuando el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    // const menuToggle = document.getElementById('menu-toggle');
    const menu = document.querySelector('.menu');
    // const hamburger = document.querySelector('#prueba');

    // // Maneja el clic en el icono del menú
    // hamburger.addEventListener('click', function() {
    //     if (menu.style.display === 'block') {
    //         menu.style.display = 'none';
    //     } else {
    //         menu.style.display = 'block';
    //     }
    // });

    // Maneja el clic fuera del menú para cerrarlo
    // document.addEventListener('click', function(event) {
    //     if (!hamburger.contains(event.target) && !menu.contains(event.target)) {
    //         menu.style.display = 'none';
    //     }
    // });

    // Maneja el clic en las fotos de info-sections
    // const infoBoxes = document.querySelectorAll('.info-box');
    // infoBoxes.forEach(box => {
    //     box.addEventListener('click', function() {
    //         const infoText = this.querySelector('.info-text');
    //         infoText.style.display = (infoText.style.display === 'block') ? 'none' : 'block';
    //     });
    // });

    // Maneja el cambio de idioma
    // document.getElementById('language-select').addEventListener('change', function() {
    //     const selectedLanguage = this.value;
    //     translatePage(selectedLanguage);
    // });

    // Establece el idioma por defecto
    translatePage('it');
});






