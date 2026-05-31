function cuentaRegresiva(n: number): void {
    if (n === 0) {
        console.log("¡Despegue!");
        return;
    }
    console.log(n);
    cuentaRegresiva(n - 1);
}

console.log("\n === Cuenta regresiva ===");
cuentaRegresiva(10);