// Obtener producto del localStorage
const producto = JSON.parse(localStorage.getItem('productoSeleccionado'));

// Mostrar datos del producto
document.getElementById('nombre-producto').textContent = producto.nombre;
document.getElementById('imagen-producto').src = producto.imagen[0]; // Primera imagen por defecto
document.getElementById('descripcion-producto').textContent = producto.descripcion;
document.getElementById('etiquetas-producto').textContent = `Etiquetas: ${producto.etiquetas.join(', ')}`;
document.getElementById('stock-producto').textContent = `Stock: ${producto.stock}`;
document.getElementById('precio-producto').textContent = `$${producto.precio}`;

// Si el producto tiene colores, agregarlos a la sección de detalles
if (producto.colores && producto.colores.length > 0) {
    const coloresDiv = document.getElementById('colores-producto');

    producto.colores.forEach((color, index) => {
        const colorCircle = document.createElement('div');
        colorCircle.classList.add('color-circle');
        colorCircle.style.backgroundColor = color;
        colorCircle.dataset.color = color;

        if (index === 0) {
            colorCircle.classList.add('color-seleccionado'); // Primer color seleccionado por defecto
        }

        colorCircle.addEventListener('click', () => {
            document.getElementById('imagen-producto').src = producto.imagen[index];

            document.querySelectorAll('.color-circle').forEach(c => c.classList.remove('color-seleccionado'));
            colorCircle.classList.add('color-seleccionado');
        });

        coloresDiv.appendChild(colorCircle);
    });
}

// Obtener todos los botones de talle y preseleccionar "M"
const botonesTalle = document.querySelectorAll('.boton-talle');

botonesTalle.forEach(boton => {
    // Preseleccionar "M" si existe un botón con ese valor
    if (boton.textContent.trim() === 'M') {
        boton.classList.add('active'); // Marcar como activo
    }

    boton.addEventListener('click', function () {
        botonesTalle.forEach(b => b.classList.remove('active'));
        boton.classList.add('active');
    });
});

// Configuración de cantidad y stock
const stock = producto.stock;
const cantidadSpan = document.getElementById('cantidad');
const btnIncrementar = document.getElementById('incrementar');
const btnDecrementar = document.getElementById('decrementar');

btnIncrementar.addEventListener('click', () => {
    let cantidadActual = parseInt(cantidadSpan.textContent);
    if (cantidadActual < stock) {
        cantidadSpan.textContent = cantidadActual + 1;
    }
});

btnDecrementar.addEventListener('click', () => {
    let cantidadActual = parseInt(cantidadSpan.textContent);
    if (cantidadActual > 1) {
        cantidadSpan.textContent = cantidadActual - 1;
    }
});

// Espera a que el DOM esté cargado para asignar eventos
document.addEventListener('DOMContentLoaded', function () {
    const botonComprar = document.getElementById('boton-comprar');
    botonComprar.addEventListener('click', añadirAlCarrito);
});

// Función para añadir al carrito
function añadirAlCarrito() {
    const carrito = JSON.parse(localStorage.getItem('carrito')) || [];
    const producto = JSON.parse(localStorage.getItem('productoSeleccionado'));
    const cantidad = parseInt(cantidadSpan.textContent);

    // Obtener el color seleccionado (o el primero por defecto)
    const colorSeleccionado = document.querySelector('.color-circle.color-seleccionado') ||
                              document.querySelector('.color-circle');
    const color = colorSeleccionado.dataset.color;

    // Obtener la imagen correspondiente al color
    const indiceColor = Array.from(document.querySelectorAll('.color-circle')).indexOf(colorSeleccionado);
    const imagenColor = producto.imagen[indiceColor];

    // Obtener el talle seleccionado (o "M" por defecto)
    const talleSeleccionado = document.querySelector('.boton-talle.active')?.textContent.trim() || 'M';

    // Agregar producto al carrito
    carrito.push({
        nombre: producto.nombre,
        descripcion: producto.descripcion,
        precio: producto.precio,
        imagen: imagenColor,
        cantidad: cantidad,
        color: color,
        talle: talleSeleccionado // Añadir el talle seleccionado
    });

    localStorage.setItem('carrito', JSON.stringify(carrito));
}


function mostrarPopup() {
    const popup = document.getElementById('popup');
    popup.classList.add('show'); // Añade la clase para mostrar el popup
  
    // Ocultar el popup después de 3 segundos
    setTimeout(() => {
      popup.classList.remove('show');
    }, 3000);
  }
  
  // Ejemplo de uso: llamamos a la función al añadir al carrito
  document.querySelector('.add-to-cart').addEventListener('click', (e) => {
    e.preventDefault(); // Evitar que recargue la página, si es un link
    mostrarPopup(); // Muestra el popup
  });
  