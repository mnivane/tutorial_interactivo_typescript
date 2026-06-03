class Estudiante {
    readonly codigo: string;
    public nombre: string;
    private notas: number[]; 

    constructor(codigo: string, nombre: string) {
        this.codigo = codigo;
        this.nombre = nombre;
        this.notas = []; 
    }

    public agregarNota(n: number): void {
        if (n >= 0 && n <= 5.0) {
            this.notas.push(n);
            console.log(`Nota ${n} agregada correctamente a ${this.nombre}.`);
        } else {
            console.log("La nota debe estar en el rango de 0.0 a 5.0");
        }
    }

    public promedio(): number {
        if (this.notas.length === 0) return 0;
        const suma = this.notas.reduce((acc, nota) => acc + nota, 0);
        return suma / this.notas.length;
    }

    public aprobado(): boolean {
        return this.promedio() >= 3.0;
    }

    public mostrarHistorial(): void {
        console.log(`\nEstudiante: ${this.nombre} [Código: ${this.codigo}]`);
        console.log(`Notas registradas: [${this.notas.join(", ")}]`);
        console.log(`Promedio Final: ${this.promedio().toFixed(2)}`);
        console.log(`Estado: ${this.aprobado() ? "✅ APROBADO" : "❌ REPROBADO"}`);
    }
}

const alumno = new Estudiante("20261002", "Vane Carrillo");

alumno.agregarNota(4.2);
alumno.agregarNota(2.5);
alumno.agregarNota(3.8);
alumno.agregarNota(4.5);
alumno.agregarNota(3.0);

console.log("---------------------------------");
alumno.mostrarHistorial();