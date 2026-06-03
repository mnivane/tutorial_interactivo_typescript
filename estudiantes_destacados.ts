interface Estudiante {
    nombre: string;
    promedio: number;
    asistencia: number;
}

const estudiantes: Estudiante[] = [
    { nombre: "Carlos Gómez", promedio: 4.2, asistencia: 95 },
    { nombre: "Ana Martínez", promedio: 3.8, asistencia: 92 },
    { nombre: "Vanessa Carrillo", promedio: 4.7, asistencia: 98 },
    { nombre: "Luis Pérez", promedio: 4.5, asistencia: 85 },
    { nombre: "Sofía Rodríguez", promedio: 4.0, asistencia: 91 }
];

const destacados = estudiantes.filter(e => e.promedio >= 4.0 && e.asistencia > 90);
const nombresDestacados = destacados.map(e => e.nombre).join(", ");

console.log(`Cantidad de estudiantes que cumplen: ${destacados.length}`);
console.log(`Nombres: ${nombresDestacados}`);