const carrito: string[] = [];

carrito.push("Laptop", "Mouse", "Teclado");
carrito.unshift("Monitor");
carrito.pop(); 

const tieneMouse = carrito.includes("Mouse");
console.log(`¿El carrito tiene un Mouse?: ${tieneMouse ? "Sí" : "No"}`);

console.log(`Productos actuales en el carrito: ${carrito}`);
console.log(`Total de productos: ${carrito.length}`);