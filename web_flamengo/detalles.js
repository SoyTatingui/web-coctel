// Datos de los productos
const productos = {
    "manton-negro": {
        nombre: "Manton negro",
        descripcion: "Manton elegante de color negro.",
        precio: "60€",
        img:"imagenes/shop+/Manton3.jpeg"
    },
    "manton-rojo": {
        nombre: "Manton rojo",
        descripcion: "Manton vibrante de color rojo.",
        precio: "60€",
        img:"imagenes/shop+/Manton2.jpeg"
    },
    "manton-blanco": {
        nombre: "Manton blanco",
        descripcion: "Manton clásico de color blanco.",
        precio: "60€",
        img:"imagenes/shop+/Manton.jpeg"
    },
    "rosa-negra": {
        nombre: "Rosa negra",
        descripcion: "Rosa elegante de color negro.",
        precio: "9.05 €",
        img:"imagenes/shop+/Rosa3.jpeg"
    },
    "rosa-roja": {
        nombre: "Rosa roja",
        descripcion: "Rosa romántica de color rojo.",
        precio: "9.05 €",
        img:"imagenes/shop+/Rosa1.jpeg"
    },
    "rosa-blanca": {
        nombre: "Rosa blanca",
        descripcion: "Rosa pura de color blanco.",
        precio: "9.05 €",
        img:"imagenes/shop+/Rosa2.jpeg"
    }
};

// Obtener parámetros de la URL
const params = new URLSearchParams(window.location.search);
const producto = params.get("producto");

if (producto && productos[producto]) {
    // Mostrar los detalles del producto seleccionado
    document.getElementById("img").src = productos[producto].img;
    document.getElementById("product-title").innerText = productos[producto].nombre;
    document.getElementById("product-description").innerText = productos[producto].descripcion;
    document.getElementById("product-price").innerText = `$${productos[producto].precio.toLocaleString()}`;
}

// Funciones para manejar cantidad
function increaseQuantity() {
    const quantityInput = document.getElementById("quantity");
    quantityInput.value = parseInt(quantityInput.value) + 1;
}

function decreaseQuantity() {
    const quantityInput = document.getElementById("quantity");
    if (quantityInput.value > 1) {
        quantityInput.value = parseInt(quantityInput.value) - 1;
    }
}

// Manejo del botón de compra
document.getElementById("buy-button").addEventListener("click", function() {
    const quantity = document.getElementById("quantity").value;
    alert(`¡Has añadido ${quantity} ${productos[producto].nombre} al carrito!`);
    document.getElementById("confirmation-message").style.display = "block";
});
