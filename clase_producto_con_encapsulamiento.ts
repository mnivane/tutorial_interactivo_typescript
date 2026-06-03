class Producto {
    readonly id: number;
    public nombre: string;
    private precio: number;
    private stock: number;

    constructor(id: number, nombre: string, precio: number, stock: number) {
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock;
    }

    public aumentarPrecio(porcentaje: number): void {
        if (porcentaje > 0) {
            this.precio += this.precio * (porcentaje / 100);
            console.log(`El precio de ${this.nombre} aumentó un ${porcentaje}%. Nuevo precio: $${this.precio.toFixed(2)}`);
        }
    }

    public reducirStock(cantidad: number): void {
        if (cantidad <= 0) {
            console.log("La cantidad a retirar debe ser mayor a 0.");
        } else if (cantidad > this.stock) {
            console.log(`No hay suficiente stock. Intentaste retirar ${cantidad} unidades, pero solo quedan ${this.stock}.`);
        } else {
            this.stock -= cantidad;
            console.log(`Venta realizada: Se retiraron ${cantidad} unidades de ${this.nombre}.`);
        }
    }

    public mostrarFicha(): void {
        console.log(`[ID: ${this.id}] Producto: ${this.nombre} | Precio: $${this.precio.toFixed(2)} | Stock: ${this.stock} uds.`);
    }
}

const miProducto = new Producto(101, "Teclado Mecánico RGB", 250000, 15);

miProducto.mostrarFicha();
miProducto.aumentarPrecio(10);
miProducto.reducirStock(3);
miProducto.mostrarFicha();