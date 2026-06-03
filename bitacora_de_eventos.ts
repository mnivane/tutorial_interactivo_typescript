interface Evento {
    descripcion: string;
    prioridad: "alta" | "media" | "baja";
}

const eventos: Evento[] = [
    { descripcion: "Error crítico en el servidor de base de datos", prioridad: "alta" },
    { descripcion: "Actualización de textos en los términos y condiciones", prioridad: "baja" },
    { descripcion: "Falta optimizar el tiempo de carga de las imágenes", prioridad: "media" },
    { descripcion: "Despliegue exitoso a producción", prioridad: "baja" }
];

eventos.forEach(evento => {
    let emoji = "🟢";
    
    if (evento.prioridad === "alta") {
        emoji = "🔴";
    } else if (evento.prioridad === "media") {
        emoji = "🟡";
    }

    console.log(`${emoji} [${evento.prioridad.toUpperCase()}] ${evento.descripcion}`);
});