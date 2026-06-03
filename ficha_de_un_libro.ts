type Libro = {
    readonly isbn: string;
    titulo: string;
    autor: string;
    paginas: number;
    anio: number;
    generos?: string[];
};

const libro1: Libro = {
    isbn: "978-3-16-148410-0",
    titulo: "Cien años de soledad",
    autor: "Gabriel García Márquez",
    paginas: 432,
    anio: 1967,
    generos: ["Realismo mágico", "Novela"]
};

const libro2: Libro = {
    isbn: "978-0-452-28423-4",
    titulo: "1984",
    autor: "George Orwell",
    paginas: 328,
    anio: 1949
};

libro1.anio = 2025;

if (!libro2.generos) {
    libro2.generos = [];
}
libro2.generos.push("Distopía");

console.log("Libro 1 modificado:", libro1);
console.log("Libro 2 modificado:", libro2);