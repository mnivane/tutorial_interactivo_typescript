class Cuenta {
    private _saldo: number;
    private _titular: string;

    constructor(titular: string, saldoInicial: number = 0) {
        this._saldo = saldoInicial;
        this._titular = titular.trim() !== "" ? titular : "Titular por defecto";
    }

    public get saldo(): number {
        return this._saldo;
    }

    public get titular(): string {
        return this._titular;
    }

    public set titular(nuevoTitular: string) {
        if (nuevoTitular.trim() === "") {
            console.log("Error: El nombre del titular no puede estar vacío.");
        } else {
            this._titular = nuevoTitular;
            console.log(`Titular actualizado con éxito: ${this._titular}`);
        }
    }

    public depositar(monto: number): void {
        if (monto > 0) {
            this._saldo += monto;
            console.log(`Depósito exitoso de $${monto}. Saldo actual: $${this._saldo}`);
        } else {
            console.log(`Error: El monto a depositar ($${monto}) debe ser positivo.`);
        }
    }
}

const miCuenta = new Cuenta("Vane Carrillo", 100000);

console.log(`Cuenta de: ${miCuenta.titular} | Saldo: $${miCuenta.saldo}`);

miCuenta.depositar(50000);   
miCuenta.depositar(-20000);  
miCuenta.depositar(0);        

miCuenta.titular = "";               
miCuenta.titular = "Vanessa Carrillo";     