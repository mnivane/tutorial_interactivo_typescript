function retirar(saldo: number, monto: number): number {
    if (monto <= 0) {
        throw new Error("El monto a retirar debe ser mayor que cero.");
    }
    if (monto > saldo) {
        throw new Error("Fondos insuficientes para realizar esta operación.");
    }
    
    return saldo - monto;
}

let miSaldo = 500;
console.log(`Saldo inicial: $${miSaldo}\n`);

try {
    console.log("Intentando retiro de $200...");
    miSaldo = retirar(miSaldo, 200);
    console.log(`Retiro exitoso. Nuevo saldo: $${miSaldo}\n`);
} catch (error: any) {
    console.error(`Error: ${error.message}\n`);
}

try {
    console.log("Intentando retiro de -$50...");
    miSaldo = retirar(miSaldo, -50);
    console.log(`Retiro exitoso. Nuevo saldo: $${miSaldo}\n`);
} catch (error: any) {
    console.error(`Error: ${error.message}\n`);
}

try {
    console.log("Intentando retiro de $600...");
    miSaldo = retirar(miSaldo, 600);
    console.log(`Retiro exitoso. Nuevo saldo: $${miSaldo}\n`);
} catch (error: any) {
    console.error(`Error: ${error.message}\n`);
}