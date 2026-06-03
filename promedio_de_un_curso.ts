const notasEstudiantes: number[] = [4.2, 3.8, 4.7, 2.9, 3.5, 4.0, 4.8, 1.5, 3.2, 4.9];

const sumaTotal = notasEstudiantes.reduce((acumulador, notaActual) => acumulador + notaActual, 0);

const promedio = sumaTotal / notasEstudiantes.length;

console.log(`Suma total: ${sumaTotal.toFixed(2)}`);
console.log(`Promedio del curso: ${promedio.toFixed(2)}`);