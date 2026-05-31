function potencia(base: number, exponente: number): number {
    if (exponente === 0) {
        return 1;
    }

    return base * potencia(base, exponente - 1);
}

console.log("2 elevado a la 3 es: " + potencia(2, 3));
console.log("5 elevado a la 2 es: " + potencia(5, 2));
console.log("3 elevado a la 4 es: " + potencia(3, 4));