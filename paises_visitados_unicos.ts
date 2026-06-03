const paisesVisitados: string[] = ["Colombia", "México", "España", "Colombia", "Argentina", "México"];

const paisesUnicos = new Set<string>(paisesVisitados);

console.log(`El viajero visitó ${paisesUnicos.size} países distintos.`);

const listaOrdenada = [...paisesUnicos].sort((a, b) => a.localeCompare(b));

console.log("Lista de países única y ordenada:", listaOrdenada);