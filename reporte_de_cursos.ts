interface Curso {
    codigo: string;
    nombre: string;
    creditos: number;
    aprobado: boolean;
}

const cursos: Curso[] = [
    { codigo: "INF101", nombre: "Introducción a la Programación", creditos: 4, aprobado: true },
    { codigo: "MAT102", nombre: "Cálculo Diferencial", creditos: 4, aprobado: false },
    { codigo: "FIS103", nombre: "Física Mecánica", creditos: 3, aprobado: true },
    { codigo: "FIS104", nombre: "Laboratorio de Física", creditos: 1, aprobado: true },
    { codigo: "ENG105", nombre: "Inglés Técnico", creditos: 2, aprobado: false }
];

console.log("--- Lista de Cursos ---");
cursos.forEach(c => {
    console.log(`[${c.codigo}] ${c.nombre} - Créditos: ${c.creditos} | Estado: ${c.aprobado ? "✅ Aprobado" : "❌ Reprobado"}`);
});

const cursosAprobados = cursos.filter(c => c.aprobado);

const totalCreditosAprobados = cursosAprobados.reduce((acc, c) => acc + c.creditos, 0);

const porcentajeAprobados = (cursosAprobados.length / cursos.length) * 100;

console.log("\n--- Estadísticas Finales ---");
console.log(`Total de créditos aprobados: ${totalCreditosAprobados}`);
console.log(`Porcentaje de cursos aprobados: ${porcentajeAprobados.toFixed(1)}%`);