interface ProductoInventario {
    nombre: string;
    bodega: 'A' | 'B' | 'C';
    unidades: number;
}

const inventario: ProductoInventario[] = [
    { nombre: "Teclado", bodega: 'A', unidades: 15 },
    { nombre: "Mouse", bodega: 'B', unidades: 30 },
    { nombre: "Monitor", bodega: 'A', unidades: 8 },
    { nombre: "Audífonos", bodega: 'C', unidades: 25 },
    { nombre: "Laptop", bodega: 'B', unidades: 12 },
    { nombre: "Impresora", bodega: 'C', unidades: 5 }
];

const totalPorBodega = inventario.reduce((acumulador, producto) => {
    acumulador[producto.bodega] += producto.unidades;
    return acumulador;
}, { A: 0, B: 0, C: 0 }); 

console.log("Resultado del inventario:", totalPorBodega);