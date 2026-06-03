const puntajesOriginal: number[] = [150, 420, 80, 500, 310, 290, 460, 120];

const puntajesOrdenados = [...puntajesOriginal].sort((a, b) => b - a);

const top3 = puntajesOrdenados.slice(0, 3);

const sumaTop3 = top3.reduce((total, actual) => total + actual, 0);

const promedioTop3 = sumaTop3 / top3.length;

console.log(`Puntajes originales (intactos): [${puntajesOriginal}]`);
console.log(`Top 3 de mejores puntajes: [${top3}]`);
console.log(`Suma del Top 3: ${sumaTop3}`);
console.log(`Promedio del Top 3: ${promedioTop3}`);