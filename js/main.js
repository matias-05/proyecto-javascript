// Variables
const nombreTienda = "Compra Gaming Paraná";
let carrito = [];

//Declaración de funciones
function agregarAlCarrito(producto) {
    carrito.push(producto);
}


//Inicio del programa
alert(`¡Bienvenido a ${nombreTienda}!`);

let cantidad = prompt("Ingresa cantidad de productos que deseas agregar al carrito:");

for (let i = 0; i < cantidad; i++) {
    
    let producto = prompt("Ingresa el nombre del producto que deseas agregar al carrito ");

    if (producto != null) {
        agregarAlCarrito(producto);
    } else {
        alert(`El producto no es válido.`);
    }
}

console.log("Productos en el carrito:");
for (let i = 0; i < carrito.length; i++) {
    console.log(`Producto ${i + 1} - ${carrito[i]}`);
}




