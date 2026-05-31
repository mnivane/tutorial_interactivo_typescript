interface Producto {
    id: number;
    nombre: string;
    precio: number;
    descuento?: number;
    descripcion?: string;
}

const productoCompleto: Producto = {
    id: 1,
    nombre: "Laptop",
    precio: 3500000,
    descuento: 10,
    descripcion: "Laptop de alta gama con procesador Intel i7"
};

const productoBasico: Producto = {
    id: 2,
    nombre: "Mouse",
    precio: 250000
};

console.log(`Producto: ${productoCompleto.nombre} - Precio: $${productoCompleto.precio} - Descuento: ${productoCompleto.descuento ? productoCompleto.descuento + "%" : "No tiene descuento"} - Descripción: ${productoCompleto.descripcion ?? "No tiene descripción"}`);
console.log(`Producto: ${productoBasico.nombre} - Precio: $${productoBasico.precio} - Descuento: ${productoBasico.descuento ? productoBasico.descuento + "%" : "No tiene descuento"} - Descripción: ${productoBasico.descripcion ?? "No tiene descripción"}`);