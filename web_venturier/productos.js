const productos = [
    {
        nombre: "Abrigo plumifero",
        precio: 64000,
        imagen: ['public/Tienda_productos/Abrigo-1-modelo-1.png','public/Tienda_productos/Abrigo-1-modelo-2.png','public/Tienda_productos/Abrigo-1-modelo-3.png'],
        descripcion: "Abrigo de nylon relleno de plumas de Hombre.",
        etiquetas: ["RopaSuperior","Abrigo", "Hombre", "Gris", "Marron", "Negro"],
        stock: 5,
        colores: ['#747474', '#c57d1f','#131313']
    },
    {
        nombre: "Parka acolchada",
        precio: 96000,
        imagen: ['public/Tienda_productos/Abrigo-2-modelo-1.png','public/Tienda_productos/Abrigo-2-modelo-2.png','public/Tienda_productos/Abrigo-2-modelo-3.png'],
        descripcion: "Parka acolchada con tecnologia puffertech de Mujer.",
        etiquetas: ["RopaSuperior","Abrigo", "Mujer", "Negro","Blanco","Marron"],
        stock: 5,
        colores: ['#131313','#ffffff','#c57d1f']
    },
    {
        nombre: "Chaleco a cuadros",
        precio: 39000,
        imagen: ['public/Tienda_productos/Abrigo-3-modelo-3.png','public/Tienda_productos/Abrigo-3-modelo-1.png','public/Tienda_productos/Abrigo-3-modelo-2.png'],
        descripcion: "Chaleco a cuadros para Niños ultraligero.",
        etiquetas: ["RopaSuperior","Abrigo", "Niños", "Rojo","Beige","Azul"],
        stock: 5,
        colores: ['#00568f','#c20d00','#ffdfc5']
    },
    {
        nombre: "Parca sin costuras",
        precio: 72000,
        imagen: ['public/Tienda_productos/Abrigo-4.png'],
        descripcion: "Parca negra con capucha de poliester para Hombres.",
        etiquetas: ["RopaSuperior","Abrigo", "Hombre", "Negro"],
        stock: 5,
        colores: ['#131313']
    },
    {
        nombre: "Parca larga",
        precio: 69000,
        imagen: ['public/Tienda_productos/Abrigo-5.png'],
        descripcion: "Parca larga con cierre ultraliviana para Mujeres.",
        etiquetas: ["RopaSuperior","Abrigo", "Mujer", "Negro"],
        stock: 5,
        colores: ['#131313']
    },
    {
        nombre: "Camiseta tipo tortuga",
        precio: 43000,
        imagen: ['public/Tienda_productos/camisetas-1.png'],
        descripcion: "Camiseta con cuello de tortuga manga larga para Hombres.",
        etiquetas: ["RopaSuperior","Camisetas", "Hombre", "Negro"],
        stock: 5,
        colores: ['#131313']
    },
    {
        nombre: "Camiseta de lana",
        precio: 42000,
        imagen: ['public/Tienda_productos/camisetas-2.png'],
        descripcion: "Camiseta de lana manga larga para Mujeres.",
        etiquetas: ["RopaSuperior","Camisetas", "Mujer", "Blanco"],
        stock: 5,
        colores: ['#ffffff']
    },
    {
        nombre: "Camiseta con costuras",
        precio: 26000,
        imagen: ['public/Tienda_productos/camisetas-3.png'],
        descripcion: "Camiseta de fibra sintetica manga larga para Niños.",
        etiquetas: ["RopaSuperior","Camisetas", "Niños", "Cyan"],
        stock: 5,
        colores: ['#b6ebdd']
    },
    {
        nombre: "Pantalon formal",
        precio: 55000,
        imagen: ['public/Tienda_productos/pantalon-1.png'],
        descripcion: "Pantalon formal de tela de poliester para Mujer.",
        etiquetas: ["RopaInferior","Pantalon", "Mujer", "Negro"],
        stock: 5,
        colores: ['#131313']
    },
    {
        nombre: "Jean",
        precio: 51000,
        imagen: ['public/Tienda_productos/pantalon-2.png'],
        descripcion: "Jean Azul denim 100% algodon para Hombre.",
        etiquetas: ["RopaInferior","Pantalon", "Hombre", "Azul"],
        stock: 5,
        colores: ['#00568f']
    },
    {
        nombre: "Vaqueros",
        precio: 32000,
        imagen: ['public/Tienda_productos/pantalon-3.png'],
        descripcion: "Vaqueros Negros de algodon reciclado para Niños.",
        etiquetas: ["RopaInferior","Pantalon", "Niños", "Negro"],
        stock: 5,
        colores: ['#131313']
    },
    {
        nombre: "Shorts holgados",
        precio: 42000,
        imagen: ['public/Tienda_productos/shorts-1.png'],
        descripcion: "Shorts holgados con elastico para Mujer.",
        etiquetas: ["RopaInferior","Shorts", "Mujer", "Beige"],
        stock: 5,
        colores: ['#ffdfc5']
    },
    {
        nombre: "Shorts cortos",
        precio: 45000,
        imagen: ['public/Tienda_productos/shorts-2.png'],
        descripcion: "Shorts cortos de poliester para Mujer sin costura.",
        etiquetas: ["RopaInferior","Shorts", "Mujer", "Gris"],
        stock: 5,
        colores: ['#747474']
    },
    {
        nombre: "Shorts elastico",
        precio: 45000,
        imagen: ['public/Tienda_productos/shorts-3.png'],
        descripcion: "Shorts holgados con elastico para Hombre.",
        etiquetas: ["RopaInferior","Shorts", "Hombre", "Gris"],
        stock: 5,
        colores: ['#747474']
    },
    {
        nombre: "Gorro termico de lana",
        precio: 19000,
        imagen: ['public/Tienda_productos/accesorio-1.png'],
        descripcion: "Gorrito de lana termico para todo el mundo.",
        etiquetas: ["Ropa","Accesorio", "Hombre","Mujer","Niños","Blanco"],
        stock: 5,
        colores: ['#ffffff']
    },
    {
        nombre: "Guantes termicos de montaña",
        precio: 32000,
        imagen: ['public/Tienda_productos/accesorio-2.png'],
        descripcion: "Guantes termicos de montaña con ajuste para todo el mundo.",
        etiquetas: ["Ropa","Accesorio", "Hombre","Mujer","Niños","Negro"],
        stock: 5,
        colores: ['#131313']
    },
    {
        nombre: "Riñonera poliester",
        precio: 24000,
        imagen: ['public/Tienda_productos/riñoneras-1.png'],
        descripcion: "Riñonera negra de poliester.",
        etiquetas: ["Viaje","Ropa","Accesorio","Bolsos","Equipo", "Hombre","Mujer","Niños","Negro"],
        stock: 5,
        colores: ['#131313']
    },
    {
        nombre: "Riñonera fibra",
        precio: 26000,
        imagen: ['public/Tienda_productos/riñoneras-2.png'],
        descripcion: "Riñonera verde de fibra sintetica.",
        etiquetas: ["Viaje","Ropa","Accesorio","Bolsos","Equipo", "Hombre","Mujer","Niños","Verde"],
        stock: 5,
        colores: ['#A6BF11']
    },
    {
        nombre: "Botas Roca",
        precio: 130000,
        imagen: ['public/Tienda_productos/botas-1.png'],
        descripcion: "Botas modelo Roca para nieve.",
        etiquetas: ["Viaje","Ropa","Botas", "Hombre","Mujer","Niños","Negro"],
        stock: 5,
        colores: ['#131313']
    },
    {
        nombre: "Botas Moreno",
        precio: 125000,
        imagen: ['public/Tienda_productos/botas-2.png'],
        descripcion: "Botas modelo Moreno para trekking.",
        etiquetas: ["Viaje","Ropa","Botas", "Hombre","Mujer","Niños","Negro"],
        stock: 5,
        colores: ['#131313']
    },
    {
        nombre: "Botas San Martin",
        precio: 135000,
        imagen: ['public/Tienda_productos/botas-3.png'],
        descripcion: "Botas modelo Moreno para montaña.",
        etiquetas: ["Viaje","Ropa","Botas", "Hombre","Mujer","Niños","Negro"],
        stock: 5,
        colores: ['#131313']
    },
    {
        nombre: "Mochila compacta",
        precio: 70000,
        imagen: ['public/Tienda_productos/mochilas-1.png'],
        descripcion: "Mochila compacta para caminatas con aspecto urbano.",
        etiquetas: ["Viaje","Equipo","Bolsos","Mochilas","Blanco"],
        stock: 5,
        colores: ['#ffffff']
    },
    {
        nombre: "Mochila de senderismo",
        precio: 195000,
        imagen: ['public/Tienda_productos/mochilas-2.png'],
        descripcion: "Mochila alta de senderismo para acampada.",
        etiquetas: ["Viaje","Equipo","Bolsos","Mochilas","Rojo","Negro"],
        stock: 5,
        colores: ['#131313']
    },
    {
        nombre: "Bolsa de dormir cuadrada",
        precio: 45000,
        imagen: ['public/Tienda_productos/bolsa-de-dormir-1.png'],
        descripcion: "Bolsa de dormir cuadrada ideal para acampar.",
        etiquetas: ["Camping","Equipo","Bolsa de dormir","Verde"],
        stock: 5,
        colores: ['#A6BF11']
    },
    {
        nombre: "Bolsa de dormir ergonomica",
        precio: 48000,
        imagen: ['public/Tienda_productos/bolsa-de-dormir-2.png'],
        descripcion: "Bolsa de dormir ergonomica que se adapta al cuerpo.",
        etiquetas: ["Camping","Equipo","Bolsa de dormir","Rojo"],
        stock: 5,
        colores: ['#c20d00']
    },
    {
        nombre: "Carpa basica",
        precio: 90000,
        imagen: ['public/Tienda_productos/Carpa-1.png'],
        descripcion: "Carpa basica para expediciones basicas.",
        etiquetas: ["Camping","Equipo","Carpa","Rojo"],
        stock: 5,
        colores: ['#c20d00']
    },
    {
        nombre: "Carpa moderada",
        precio: 150000,
        imagen: ['public/Tienda_productos/Carpa-2.png'],
        descripcion: "Carpa moderada resistente al agua para expediciones medianas.",
        etiquetas: ["Camping","Equipo","Carpa","Azul"],
        stock: 5,
        colores: ['#00568f']
    },
    {
        nombre: "Carpa profesional",
        precio: 200000,
        imagen: ['public/Tienda_productos/Carpa-3.png'],
        descripcion: "Carpa profesional aprueba de todo para expediciones largas.",
        etiquetas: ["Camping","Equipo","Carpa","Verde"],
        stock: 5,
        colores: ['#b6ebdd']
    },
];

const params = new URLSearchParams(window.location.search);
const etiquetasSeleccionadas = params.get('etiquetas')?.split(',') || []; // Leer las etiquetas desde la URL

// Función para aplicar el filtro automáticamente
function aplicarFiltroInicial(etiquetas) {
    etiquetas.forEach(etiqueta => {
        const checkbox = document.querySelector(`input[value="${etiqueta}"]`);
        if (checkbox) {
            checkbox.checked = true; // Marcar la casilla correspondiente
        }
    });
    cargarProductos(etiquetas); // Cargar los productos con las etiquetas seleccionadas
}

// Función para cargar los productos en la galería
function cargarProductos(filtros = []) {
    const galeria = document.getElementById('product-gallery');
    galeria.innerHTML = ''; // Limpiar la galería

    console.log("Filtros aplicados:", filtros);

    // Filtrar productos según las etiquetas seleccionadas
    const productosFiltrados = filtros.length > 0
        ? productos.filter(producto =>
            filtros.every(filtro => producto.etiquetas.includes(filtro))
        )
        : productos;

    console.log("Productos filtrados:", productosFiltrados);

    // Comprobar si hay productos para mostrar
    if (productosFiltrados.length === 0) {
        const mensaje = document.createElement('div');
        mensaje.textContent = 'No se encontraron productos.';
        galeria.appendChild(mensaje);
        return; // Salir de la función si no hay productos
    }

    productosFiltrados.forEach(producto => {
        console.log("Producto:", producto); // Ver qué producto se está cargando

        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        const img = document.createElement('img');
        if (Array.isArray(producto.imagen) && producto.imagen.length > 0) {
            img.src = producto.imagen[0]; // Mostrar la primera imagen por defecto
        } else {
            img.src = producto.imagen[0]; // Si no hay imágenes, usar la imagen por defecto
        }
        img.alt = producto.nombre;
        img.onerror = function () {
            this.src = producto.imagen[0]; // Imagen por defecto si no se encuentra la imagen original
        };
        productCard.appendChild(img);

        const nombre = document.createElement('div');
        nombre.classList.add('product-name');
        nombre.textContent = producto.nombre;
        productCard.appendChild(nombre);

        if (producto.colores && producto.colores.length > 0) {
            const coloresDiv = document.createElement('div');
            coloresDiv.classList.add('product-colors');
            producto.colores.forEach((color, index) => {
                const colorCircle = document.createElement('div');
                colorCircle.classList.add('color-circle');
                colorCircle.style.backgroundColor = color;

                // Agregar el evento de clic al círculo de color
                colorCircle.addEventListener('click', (event) => {
                    event.stopPropagation(); // Detener la propagación del evento
                    // Cambiar la imagen al color correspondiente solo si la imagen no es la misma
                    if (Array.isArray(producto.imagen) && producto.imagen[index]) {
                        if (img.src !== producto.imagen[index]) {
                            img.src = producto.imagen[index]; // Cambiar la imagen al color correspondiente
                        }
                    }
                });
                coloresDiv.appendChild(colorCircle);
            });
            productCard.appendChild(coloresDiv);
        }


        const precio = document.createElement('div');
        precio.classList.add('product-price');
        precio.textContent = `$${producto.precio}`;
        productCard.appendChild(precio);


        // Redirigir al hacer clic en el producto
        productCard.addEventListener('click', () => {
            localStorage.setItem('productoSeleccionado', JSON.stringify(producto));
            window.location.href = 'detalles_producto.html'; // Redirigir a la página de detalles
        });


        const descripcion = document.createElement('div');
        descripcion.classList.add('product-description');
        descripcion.textContent = producto.descripcion;
        productCard.appendChild(descripcion);

        // Mostrar los colores como círculos

        galeria.appendChild(productCard);
    });
}

// Función para cargar los filtros de etiquetas
function cargarFiltros() {
    const tagFilters = document.getElementById('tag-filters');
    const etiquetas = new Set(); // Usar un Set para evitar etiquetas duplicadas

    // Agregar el subtítulo de Género
    const generoSubtitle = document.createElement('h4');
    generoSubtitle.textContent = 'GÉNERO';
    tagFilters.appendChild(generoSubtitle);

    const generoLabels = ['Hombre', 'Mujer', 'Niños'];
    generoLabels.forEach(label => {
        const filterItem = document.createElement('div');
        filterItem.classList.add('filter-item');

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.value = label;
        checkbox.id = label; // Asignar el id a la etiqueta

        const labelElement = document.createElement('label');
        labelElement.htmlFor = label;
        labelElement.textContent = label;

        checkbox.addEventListener('change', () => {
            const filtrosSeleccionados = Array.from(tagFilters.querySelectorAll('input:checked'))
                .map(input => input.value);
            console.log(filtrosSeleccionados); // Para depurar
            cargarProductos(filtrosSeleccionados); // Filtrar los productos
        });

        filterItem.appendChild(checkbox);
        filterItem.appendChild(labelElement);
        tagFilters.appendChild(filterItem);
    });

    // Agregar el subtítulo de Ropa
    const ropaSubtitle = document.createElement('h4');
    ropaSubtitle.textContent = 'ROPA';
    tagFilters.appendChild(ropaSubtitle);

    const ropaLabels = ['Abrigo', 'Camisetas', 'Pantalon', 'Shorts', 'Botas','Accesorio'];
    ropaLabels.forEach(label => {
        const filterItem = document.createElement('div');
        filterItem.classList.add('filter-item');

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.value = label;
        checkbox.id = label; // Asignar el id a la etiqueta

        const labelElement = document.createElement('label');
        labelElement.htmlFor = label;
        labelElement.textContent = label;

        checkbox.addEventListener('change', () => {
            const filtrosSeleccionados = Array.from(tagFilters.querySelectorAll('input:checked'))
                .map(input => input.value);
            console.log(filtrosSeleccionados); // Para depurar
            cargarProductos(filtrosSeleccionados); // Filtrar los productos
        });

        filterItem.appendChild(checkbox);
        filterItem.appendChild(labelElement);
        tagFilters.appendChild(filterItem);
    });

    // Agregar el subtítulo de Equipo
    const equipoSubtitle = document.createElement('h4');
    equipoSubtitle.textContent = 'EQUIPO';
    tagFilters.appendChild(equipoSubtitle);

    const equipoLabels = ['Mochilas', 'Bolsa de dormir', 'Carpa'];
    equipoLabels.forEach(label => {
        const filterItem = document.createElement('div');
        filterItem.classList.add('filter-item');

        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.value = label;
        checkbox.id = label; // Asignar el id a la etiqueta

        const labelElement = document.createElement('label');
        labelElement.htmlFor = label;
        labelElement.textContent = label;

        checkbox.addEventListener('change', () => {
            const filtrosSeleccionados = Array.from(tagFilters.querySelectorAll('input:checked'))
                .map(input => input.value);
            console.log(filtrosSeleccionados); // Para depurar
            cargarProductos(filtrosSeleccionados); // Filtrar los productos
        });

        filterItem.appendChild(checkbox);
        filterItem.appendChild(labelElement);
        tagFilters.appendChild(filterItem);
    });

  
}

// Inicializar la carga de productos y filtros al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    cargarFiltros(); // Cargar los filtros
    if (etiquetasSeleccionadas.length > 0) {
        aplicarFiltroInicial(etiquetasSeleccionadas); // Aplicar los filtros automáticamente
    } else {
        cargarProductos(); // Cargar todos los productos inicialmente si no hay filtros
    }
});
