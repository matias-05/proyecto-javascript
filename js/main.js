//#region Productos en Stock
const productos = [
    { id: 1, nombre: "Notebook Asus", precio: 1000, stock: 4 },
    { id: 2, nombre: "Auriculares Hyperx Cloud III Wireless", precio: 200, stock: 10 },
    { id: 3, nombre: "Silla Gamer", precio: 260, stock: 2 }, 
];
//#endregion

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

document.querySelector("#carritoBtn").addEventListener("click", function() {
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
                carrito.agregarProducto(productoEnStock.id);
        });
    }
}
cargarCarrito();
//#endregion



