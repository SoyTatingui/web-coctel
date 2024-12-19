// Obtener elementos del formulario y del resumen del carrito
document.getElementById('checkout-form').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevenir recarga de página al enviar el formulario

    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const telefono = document.getElementById('telefono').value;
    const direccion = document.getElementById('direccion').value;
    const ciudad = document.getElementById('ciudad').value;
    const provincia = document.getElementById('provincia').value;
    const codigoPostal = document.getElementById('codigo-postal').value;

    const productosCarrito = JSON.parse(localStorage.getItem('carrito')) || [];

    if (productosCarrito.length === 0) {
        alert('Tu carrito está vacío. Añadí productos antes de continuar con la compra.');
        window.location.href = 'productos.html';
        return;
    }

    const datosCompra = {
        nombre,
        email,
        telefono,
        direccion,
        ciudad,
        provincia,
        codigoPostal,
        productos: productosCarrito,
    };

    // Guardar datos en el localStorage como ejemplo (en un entorno real se enviaría al backend)
    localStorage.setItem('datosCompra', JSON.stringify(datosCompra));

    alert('¡Compra realizada con éxito! Gracias por tu pedido.');
    localStorage.removeItem('carrito'); // Limpiar el carrito después de la compra
    window.location.href = 'index.html'; // Redirigir a la página principal
});

// Mostrar resumen del carrito en el checkout
const resumenCarrito = document.getElementById('resumen-carrito');
const totalElement = document.getElementById('total');

// Obtener carrito desde localStorage
const carrito = JSON.parse(localStorage.getItem('carrito')) || [];

// Función para mostrar productos en el sidebar del checkout
function mostrarResumenCarrito() {
    resumenCarrito.innerHTML = ''; // Limpiar contenido previo
    let total = 0;

    carrito.forEach(producto => {
        const { nombre, precio, imagen } = producto;

        // Crear un contenedor para cada producto
        const divProducto = document.createElement('div');
        divProducto.classList.add('producto-resumen');

        divProducto.innerHTML = `
        <img src="${imagen}" alt="${nombre}">
        <span class="producto-nombre">${nombre}</span>
        <span class="producto-precio">$${precio.toLocaleString()}</span>
        `;

        resumenCarrito.appendChild(divProducto);
        total += precio; // Sumar el precio al total
    });

    totalElement.textContent = `$${total.toLocaleString()}`; // Esto asegurará que el total esté en formato de moneda

}

// Ejecutar la función al cargar la página
mostrarResumenCarrito();

// Variables de mapa y marcador
let map, marker;

function initMap() {
    // Inicializar el mapa
    map = L.map('map').setView([-34.6037, -58.3816], 13);  // Ubicación inicial: Buenos Aires

    // Cargar los mosaicos de OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    // Inicializar el marcador
    marker = L.marker([-34.6037, -58.3816], { draggable: true }).addTo(map);

    // Evento al soltar el marcador para actualizar dirección
    marker.on('dragend', function (e) {
        const position = marker.getLatLng();
        getAddress(position.lat, position.lng);
    });
}

// Obtener la dirección usando Nominatim API
function getAddress(lat, lng) {
    const url = `https://nominatim.openstreetmap.org/reverse?lat=${lat}&lon=${lng}&format=json`;
    
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const address = data.display_name;
            document.getElementById("direccion").value = address;
        })
        .catch(error => console.log("Error al obtener la dirección:", error));
}

// Evento al cambiar la dirección para actualizar el marcador
document.getElementById("direccion").addEventListener("change", () => {
    const address = document.getElementById("direccion").value;
    const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(address)}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data && data.length > 0) {
                const location = data[0];
                const lat = parseFloat(location.lat);
                const lng = parseFloat(location.lon);

                map.setView([lat, lng], 13);
                marker.setLatLng([lat, lng]);
            }
        })
        .catch(error => console.log("Error al buscar la dirección:", error));
});

// Inicializar el mapa al cargar la página
document.addEventListener("DOMContentLoaded", initMap);
