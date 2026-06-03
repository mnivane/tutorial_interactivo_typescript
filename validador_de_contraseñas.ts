interface ProductoLote {
    nombre: string;
    dias_vencimiento: number;
}

const loteProductos: ProductoLote[] = [
    { nombre: "Leche Entera", dias_vencimiento: 5 },
    { nombre: "Arroz Integral", dias_vencimiento: 45 },
    { nombre: "Yogur Natural", dias_vencimiento: 12 },
    { nombre: "Lentejas", dias_vencimiento: 60 }
];

const hayCriticos = loteProductos.some(prod => prod.dias_vencimiento < 7);

const todosLargaVida = loteProductos.every(prod => prod.dias_vencimiento > 30);

console.log(`¿Alerta crítica? ¿Hay productos con menos de 7 días para vencer?: ${hayCriticos}`);
console.log(`¿Todo el lote es de larga vida (> 30 días)?: ${todosLargaVida}`);