abstract class Animal {
    public nombre: string;

    constructor(nombre: string) {
        this.nombre = nombre;
    }

    abstract hacerSonido(): void;

    public comer(): void {
        console.log(`${this.nombre} está comiendo deliciosamente.`);
    }
}

class Perro extends Animal {
    constructor(nombre: string) {
        super(nombre);
    }

    hacerSonido(): void {
        console.log(`${this.nombre} dice: ¡Guau! ¡Guau!`);
    }
}

class Gato extends Animal {
    constructor(nombre: string) {
        super(nombre);
    }

    hacerSonido(): void {
        console.log(`${this.nombre} dice: ¡Miau!`);
    }
}

class Vaca extends Animal {
    constructor(nombre: string) {
        super(nombre);
    }

    hacerSonido(): void {
        console.log(`${this.nombre} dice: ¡Muuu!`);
    }
}

const miPerro = new Perro("Firulais");
const miGato = new Gato("Michi");
const miVaca = new Vaca("Lola");

miPerro.comer();
miPerro.hacerSonido();

console.log("-----------------------------------------");

miGato.comer();
miGato.hacerSonido();

console.log("-----------------------------------------");

miVaca.comer();
miVaca.hacerSonido();