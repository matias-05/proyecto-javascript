const datos = localStorage.getItem("carrito");
const contenedorCarrito = document.getElementById("contenedorCarrito");

// Verifica si hay datos en el localStorage
if (datos) {
    let items = JSON.parse(datos);

    items.forEach((item, index) => {

        const li = document.createElement("li");
        li.textContent = `${item.producto.nombre} - $${item.producto.precio} `;
        const btnEliminar = document.createElement("button");
        btnEliminar.textContent = "Eliminar";
        btnEliminar.className = "btn btn-danger btn-sm ms-2";
        btnEliminar.addEventListener("click", () => {
            items.splice(index, 1);
            localStorage.setItem("carrito", JSON.stringify(items));
            location.reload();

        });

        li.appendChild(btnEliminar);
        contenedorCarrito.appendChild(li);
    });

    const liTotal = document.createElement("li");
    liTotal.textContent = `Total: $${items.reduce((total, item) => total + item.producto.precio, 0)}`;
    contenedorCarrito.appendChild(liTotal);
} 