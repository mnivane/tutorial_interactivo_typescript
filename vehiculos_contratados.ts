interface Conducible {
    velocidadMax: number;
    arrancar(): void;
    detener(): void;
}

class Auto implements Conducible {
    velocidadMax: number;

    constructor() {
        this.velocidadMax = 180; 
    }

    arrancar(): void {
        console.log(`El Auto encendió el motor. Listo para acelerar hasta ${this.velocidadMax} km/h.`);
    }

    detener(): void {
        console.log("El Auto aplicó los frenos ABS y se detuvo por completo.");
    }
}

class Moto implements Conducible {
    velocidadMax: number;

    constructor() {
        this.velocidadMax = 120;
    }

    arrancar(): void {
        console.log(`La Moto rugió. Arrancando en dos ruedas con tope de ${this.velocidadMax} km/h.`);
    }

    detener(): void {
        console.log("La Moto redujo marchas y se detuvo a un lado del camino.");
    }
}

class Bicicleta implements Conducible {
    velocidadMax: number;

    constructor() {
        this.velocidadMax = 35; 
    }

    arrancar(): void {
        console.log(`La Bicicleta empezó a avanzar. ¡A pedalear! Velocidad máxima estimada: ${this.velocidadMax} km/h.`);
    }

    detener(): void {
        console.log("La Bicicleta usó los frenos de mano y se detuvo.");
    }
}

const miAuto = new Auto();
const miMoto = new Moto();
const miBici = new Bicicleta();

miAuto.arrancar();
miAuto.detener();

console.log("---------------------------------------");

miMoto.arrancar();
miMoto.detener();

console.log("---------------------------------------");

miBici.arrancar();
miBici.detener();