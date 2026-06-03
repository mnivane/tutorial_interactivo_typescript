// === RETO 1: SISTEMA DE ETIQUETAS ===
const etiquetas = new Set<string>();

etiquetas.add("tecnología");
etiquetas.add("IA");
etiquetas.add("tecnología");
etiquetas.add("desarrollo");
etiquetas.add("IA");

console.log(`Tamaño del Set: ${etiquetas.size}`);
console.log("Elementos del Set:", etiquetas);

const tieneIA = etiquetas.has("IA");
console.log(`¿Tiene la etiqueta 'IA'?: ${tieneIA ? "Sí" : "No"}`);

etiquetas.delete("desarrollo");
console.log("Set final después de eliminar 'desarrollo':", etiquetas);