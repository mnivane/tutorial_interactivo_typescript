const notas: number[] = [4.5, 2.8, 3.0, 1.5, 4.0, 3.2];

notas.forEach((nota, index) => {
    const estado = nota >= 3.0 ? "APROBADO" : "REPROBADO";
    console.log(`Estudiante #${index + 1} - Nota: ${nota} [${estado}]`);
});