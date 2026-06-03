interface Venta {
    id: number;
    vendedor: string;
    monto: number;
    region: 'Norte' | 'Sur' | 'Centro';
}

const ventas: Venta[] = [
    { id: 1, vendedor: "Santiago", monto: 150000, region: "Norte" },
    { id: 2, vendedor: "Alejandro", monto: 320000, region: "Centro" },
    { id: 3, vendedor: "Nicolás", monto: 240000, region: "Sur" },
    { id: 4, vendedor: "Santiago", monto: 410000, region: "Centro" },
    { id: 5, vendedor: "Juan", monto: 180000, region: "Norte" },
    { id: 6, vendedor: "Alejandro", monto: 290000, region: "Sur" }
];

const ventaMayorMonto = [...ventas].sort((a, b) => b.monto - a.monto)[0];
console.log("Venta de mayor monto:", ventaMayorMonto);

const totalPorRegion = ventas.reduce((acc, v) => {
    acc[v.region] += v.monto;
    return acc;
}, { Norte: 0, Sur: 0, Centro: 0 });

console.log("Total de ventas por región:", totalPorRegion);

const vendedoresUnicos = [...new Set(ventas.map(v => v.vendedor))];
console.log("Vendedores únicos:", vendedoresUnicos.join(", "));