interface Producto {
    nombre: string;
    precio: number;
    descuento: number;
}

const productos: Producto[] = [
    { nombre: "Teclado Mecánico", precio: 250000, descuento: 15 },
    { nombre: "Monitor Gamer", precio: 1200000, descuento: 25 },
    { nombre: "Mouse Óptico", precio: 80000, descuento: 10 },
    { nombre: "Audífonos Bluetooth", precio: 300000, descuento: 30 }
];

const enOferta = productos.filter(p => p.descuento > 20);

enOferta.forEach(p => {
    const precioFinal = p.precio * (1 - p.descuento / 100);
    console.log(`- ${p.nombre}: Precio original: $${p.precio} | Descuento: ${p.descuento}% | Precio Final: $${precioFinal}`);
});