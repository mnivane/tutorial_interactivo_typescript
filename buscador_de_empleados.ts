interface Empleado {
    id: number;
    nombre: string;
    cargo: string;
}

const empleados: Empleado[] = [
    { id: 1, nombre: "Alejandro", cargo: "Desarrollador Frontend" },
    { id: 3, nombre: "Nicolás", cargo: "Diseñador UI" },
    { id: 5, nombre: "Santiago", cargo: "QA Engineer" },
    { id: 7, nombre: "Juan", cargo: "Gerente de Proyectos" }
];

const empleadoId5 = empleados.find(emp => emp.id === 5);

const posicionId5 = empleados.findIndex(emp => emp.id === 5);

const existeGerente = empleados.some(emp => emp.cargo.includes("Gerente"));

console.log("Empleado encontrado con ID 5:", empleadoId5);
console.log(`Posición en el array del ID 5: ${posicionId5}`);
console.log(`¿Existe algún Gerente en el equipo?: ${existeGerente ? "Sí" : "No"}`);