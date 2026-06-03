class Libro {
    titulo: string;
    autor: string;
    paginas: number;
    prestado: boolean;

    constructor(titulo: string, autor: string, paginas: number) {
        this.titulo = titulo;
        this.autor = autor;
        this.paginas = paginas;
        this.prestado = false; 
    }

    prestar(): void {
        if (!this.prestado) {
            this.prestado = true;
            console.log(`El libro "${this.titulo}" ha sido prestado con éxito.`);
        } else {
            console.log(`El libro "${this.titulo}" ya está prestado actualmente.`);
        }
    }

    devolver(): void {
        if (this.prestado) {
            this.prestado = false;
            console.log(`El libro "${this.titulo}" ha sido devuelto.`);
        } else {
            console.log(`El libro "${this.titulo}" ya estaba en la biblioteca.`);
        }
    }

    estado(): void {
        const estadoActual = this.prestado ? "Prestado ❌" : "Disponible En Sala ✅";
        console.log(`Libro: ${this.titulo} | Autor: ${this.autor} | Páginas: ${this.paginas} | Estado: ${estadoActual}`);
    }
}

const libroA = new Libro("Cien años de soledad", "Gabriel García Márquez", 432);
const libroB = new Libro("Don Quijote de la Mancha", "Miguel de Cervantes", 860);

libroA.estado();
libroA.prestar();
libroA.estado();
libroA.prestar();
libroA.devolver();
libroA.estado();

console.log("--------------------");
libroB.estado();