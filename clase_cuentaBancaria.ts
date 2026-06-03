class CuentaBancaria {
    titular: string;
    numero: string;
    saldo: number;

    constructor(titular: string, numero: string) {
        this.titular = titular;
        this.numero = numero;
        this.saldo = 0; 
    }

    depositar(monto: number): void {
        if (monto > 0) {
            this.saldo += monto;
            console.log(`Depósito exitoso de $${monto}. Nuevo saldo: $${this.saldo}`);
        } else {
            console.log("El monto a depositar debe ser mayor a 0.");
        }
    }

    retirar(monto: number): void {
        if (monto <= 0) {
            console.log("El monto a retirar debe ser mayor a 0.");
        } else if (monto > this.saldo) {
            console.log(`Fondos insuficientes. Intentaste retirar $${monto} pero tu saldo es $${this.saldo}`);
        } else {
            this.saldo -= monto;
            console.log(`Retiro exitoso de $${monto}. Nuevo saldo: $${this.saldo}`);
        }
    }

    consultarSaldo(): void {
        console.log(`Cuenta #${this.numero} | Titular: ${this.titular} | Saldo Actual: $${this.saldo}`);
    }
}

const miCuenta = new CuentaBancaria("Vanessa Carrillo", "1023456789");

miCuenta.consultarSaldo();
miCuenta.depositar(50000);
miCuenta.depositar(120000);
miCuenta.retirar(30000);

console.log("--- Resumen Final ---");
miCuenta.consultarSaldo();