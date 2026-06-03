interface Empleado {
    nombre: string;
    cargo: string;
    salario: number;
}

const empleados: Empleado[] = [
    { nombre: "Carlos Gómez", cargo: "Desarrollador Frontend", salario: 3500000 },
    { nombre: "Ana Martínez", cargo: "Diseñadora UX", salario: 3200000 },
    { nombre: "Vanessa Carrillo", cargo: "Ingeniera de Software", salario: 4500000 }
];

const tarjetasEmpleados = empleados.map(emp => `🏷 ${emp.nombre} - ${emp.cargo} - $${emp.salario}`);

tarjetasEmpleados.forEach(tarjeta => console.log(tarjeta));