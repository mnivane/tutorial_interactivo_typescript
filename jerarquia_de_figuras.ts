abstract class Figura {
    abstract area(): number;
}

class Circulo extends Figura {
    private radio: number;

    constructor(radio: number) {
        super(); 
        this.radio = radio;
    }

    area(): number {
        return Math.PI * Math.pow(this.radio, 2);
    }
}

class Rectangulo extends Figura {
    private base: number;
    private altura: number;

    constructor(base: number, altura: number) {
        super();
        this.base = base;
        this.altura = altura;
    }

    area(): number {
        return this.base * this.altura;
    }
}

class Triangulo extends Figura {
    private base: number;
    private altura: number;

    constructor(base: number, altura: number) {
        super();
        this.base = base;
        this.altura = altura;
    }

    area(): number {
        return (this.base * this.altura) 
    }
}

const figuras: Figura[] = [
    new Circulo(5),     
    new Rectangulo(4, 6), 
    new Triangulo(3, 8)  
];

figuras.forEach((figura, index) => {
    console.log(`Figura ${index + 1} - Área: ${figura.area().toFixed(2)}`);
});