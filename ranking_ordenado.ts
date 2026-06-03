interface Jugador {
    nombre: string;
    puntaje: number;
}

const jugadores: Jugador[] = [
    { nombre: "Vane", puntaje: 980 },
    { nombre: "Bridgette", puntaje: 750 },
    { nombre: "Carlos", puntaje: 450 },
    { nombre: "Daniela", puntaje: 1100 },
    { nombre: "Esteban", puntaje: 890 }
];

const rankingOrdenado = [...jugadores].sort((a, b) => b.puntaje - a.puntaje);

rankingOrdenado.slice(0, 3).forEach((jugador, indice) => {
    console.log(`Posición ${indice + 1}. ${jugador.nombre} - ${jugador.puntaje} pts`);
});