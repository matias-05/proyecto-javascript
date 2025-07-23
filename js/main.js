//#region Productos en Stock
let productos = [ ];
//#endregion

async function cargarProductos() {
    const respuesta = await fetch('./data/productos.json');
    productos = await respuesta.json();
    iniciarPrograma();
}

//#region Clase Carrito
class Carrito {

    constructor() {
        this.cantidad = 0;
        this.productosCarrito = [];
    }

    agregarProducto(id) {

        const productoEcontrado = productos.find(p => p.id === id);

        if (productoEcontrado.stock > 0) { 

            this.productosCarrito.push({ producto: productoEcontrado});
            this.cantidad++;
            let cantidadCarrito = document.getElementById("cantidadCarrito");
            cantidadCarrito.textContent = this.cantidad;
            productoEcontrado.stock--;
            return true;

        } else {

            return false;

        }
    }

}
//#endregion

function iniciarPrograma() {
    //#region Programa Principal
    const carrito = new Carrito();

    const botonesAgregar = document.querySelectorAll("#btnAgregar");
    botonesAgregar.forEach(boton => {
        boton.addEventListener("click", () => {
            const id = parseInt(boton.getAttribute("data-id"));
            if (!carrito.agregarProducto(id)) {
                alert("No hay stock disponible.");
            }
            guardarCarrito();
        });
    });

    document.querySelector("#carritoBtn").addEventListener("click", function () {
        window.location.href = "./pages/carrito.html";
    });
    //#endregion

    //#region Local Storage
    function guardarCarrito() {
        localStorage.setItem("carrito", JSON.stringify(carrito.productosCarrito));
    }

    function cargarCarrito() {
        const datos = localStorage.getItem("carrito");
        if (datos) {
            const items = JSON.parse(datos);
            items.forEach(item => {
                const productoEnStock = productos.find(p => p.id === item.producto.id);
                if (productoEnStock) carrito.agregarProducto(productoEnStock.id);
            });
        }
    }
    cargarCarrito();
    //#endregion
}

cargarProductos();



