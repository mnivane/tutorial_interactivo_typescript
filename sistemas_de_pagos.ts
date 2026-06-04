interface MedioPago {
    usuario: string;
    pagar(monto: number): void;
}

class PagoTarjeta implements MedioPago {
    usuario: string;

    constructor(usuario: string) {
        this.usuario = usuario;
    }

    pagar(monto: number): void {
        console.log(`[Tarjeta] ${this.usuario} pagó $${monto}. Procesando transacción bancaria segura...`);
    }
}

class PagoEfectivo implements MedioPago {
    usuario: string;

    constructor(usuario: string) {
        this.usuario = usuario;
    }

    pagar(monto: number): void {
        console.log(`[Efectivo] ${this.usuario} pagó $${monto}. Pago registrado en caja física.`);
    }
}

class PagoTransferencia implements MedioPago {
    usuario: string;

    constructor(usuario: string) {
        this.usuario = usuario;
    }

    pagar(monto: number): void {
        console.log(`[Transferencia] ${this.usuario} pagó $${monto}. Verificando comprobante de depósito...`);
    }
}

const pasarelaPagos: MedioPago[] = [
    new PagoTarjeta("Juan Pérez"),
    new PagoEfectivo("María López"),
    new PagoTransferencia("Carlos Gómez")
];

pasarelaPagos.forEach(medio => {
    medio.pagar(150000);
});