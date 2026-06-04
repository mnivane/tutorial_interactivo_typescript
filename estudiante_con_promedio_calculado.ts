class Estudiante {
    private _notas: number[];

    constructor(notasIniciales: number[] = []) {
        this._notas = [];
        this.notas = notasIniciales;
    }

    public get notas(): number[] {
        return [...this._notas];
    }

    public set notas(nuevasNotas: number[]) {
        const todasValidas = nuevasNotas.every(nota => nota >= 0 && nota <= 5);

        if (todasValidas) {
            this._notas = [...nuevasNotas];
            console.log("Notas actualizadas correctamente.");
        } else {
            console.log("Error: Todas las notas deben estar en el rango de 0 a 5. No se realizaron cambios.");
        }
    }

    public get promedio(): number {
        if (this._notas.length === 0) return 0;
        const suma = this._notas.reduce((acc, nota) => acc + nota, 0);
        return suma / this._notas.length;
    }

    public get estado(): "APROBADO" | "REPROBADO" {
        return this.promedio >= 3.0 ? "APROBADO" : "REPROBADO";
    }
}

const estudiante = new Estudiante();

estudiante.notas = [4.5, 3.2, 5.5, -1.0, 2.8];
estudiante.notas = [4.2, 3.5, 4.8, 2.5]; 

console.log("Notas del estudiante:", estudiante.notas);
console.log(`Promedio calculado: ${estudiante.promedio.toFixed(2)}`);
console.log(`Estado final: ${estudiante.estado}`);