window.onload = function () {
    const productosCarrito = JSON.parse(localStorage.getItem('carrito')) || [];
    const listaProductos = document.getElementById('productos-lista');
    const carritoVacio = document.getElementById('carrito-vacio');
    const resumenPrecios = document.getElementById('resumen-precios');
    const totalPrecio = document.getElementById('total-precio');
    const comprarBtn = document.getElementById('comprar-btn');

    // Mostrar mensaje si el carrito está vacío
    if (productosCarrito.length === 0) {
        carritoVacio.style.display = 'block';
        comprarBtn.disabled = true; // Deshabilitar botón
    } else {
        carritoVacio.style.display = 'none';
        comprarBtn.disabled = false; // Habilitar botón
        let total = 0;

        // Renderizar cada producto en el carrito
        productosCarrito.forEach((producto, index) => {
            const item = document.createElement('div');
            item.className = 'producto-item';

            item.innerHTML = `
                <img src="${producto.imagen}" alt="${producto.nombre}">
                <div class="producto-info">
                    <h3>${producto.nombre}</h3>
                    <p>${producto.descripcion}</p>
                    <p><strong>Talle:</strong> ${producto.talle}</p> 
                </div>
                <div class="producto-precio">$${producto.precio}</div>
                <div class="producto-eliminar">
                    <img src="public/Imagenes/tacho.png" alt="Eliminar" onclick="eliminarProducto(${index})">
                </div>
            `;

            listaProductos.appendChild(item);
            total += producto.precio * producto.cantidad;
        });

        resumenPrecios.innerHTML = productosCarrito
            .map(p => `<div>${p.nombre} x${p.cantidad}: $${p.precio * p.cantidad}</div>`)
            .join('');

        totalPrecio.textContent = total.toFixed(2);
    }
};

// Función para eliminar un producto del carrito
function eliminarProducto(index) {
    let productosCarrito = JSON.parse(localStorage.getItem('carrito')) || [];
    productosCarrito.splice(index, 1);
    localStorage.setItem('carrito', JSON.stringify(productosCarrito));
    window.location.reload(); // Recargar para actualizar el carrito
}

const btnComprar = document.getElementById('comprar-btn');

btnComprar.addEventListener('click', () => {
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];

    if (carrito.length === 0) {
        alert('Tu carrito está vacío. Agregá productos antes de continuar.');
        return;
    }

    window.location.href = 'checkout.html'; // Redirigir al checkout
});
