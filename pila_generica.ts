class Pila<T> {
    private elementos: T[] = [];

    public apilar(item: T): void {
        this.elementos.push(item);
    }

    public desapilar(): T | undefined {
        return this.elementos.pop();
    }

    public tope(): T | undefined {
        return this.elementos[this.elementos.length - 1];
    }

    public vacia(): boolean {
        return this.elementos.length === 0;
    }
}

console.log("--- Pila de Números ---");
const pilaNumeros = new Pila<number>();
pilaNumeros.apilar(10);
pilaNumeros.apilar(20);
pilaNumeros.apilar(30);

console.log("Tope de la pila:", pilaNumeros.tope()); 
console.log("Desapilando:", pilaNumeros.desapilar()); 
console.log("Nuevo tope:", pilaNumeros.tope()); 
console.log("¿Está vacía?:", pilaNumeros.vacia()); 

console.log("\n--- Pila de Strings ---");
const pilaStrings = new Pila<string>();
pilaStrings.apilar("TypeScript");
pilaStrings.apilar("Nuxt.js");
pilaStrings.apilar("Bun");

console.log("Tope de la pila:", pilaStrings.tope()); 
console.log("Desapilando:", pilaStrings.desapilar()); 
console.log("Nuevo tope:", pilaStrings.tope()); 