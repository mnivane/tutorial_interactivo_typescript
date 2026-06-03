const agenda = new Map<string, string>();

agenda.set("Alice", "123-456-7890");
agenda.set("Bob", "987-654-3210");
agenda.set("Charlie", "555-555-5555");
agenda.set("Diana", "111-222-3333");
agenda.set("Eve", "444-444-4444");

console.log("Teléfono de Alice:", agenda.get("Alice"));
console.log("Teléfono de Bob:", agenda.get("Bob"));

agenda.delete("Charlie");
console.log("/nContacto Charlie eliminado.");

console.log("/n=== Lista de Contactos Restantes ===")
agenda.forEach((telefono, nombre) => {
    console.log(`${nombre} -> Teléfono: ${telefono}`);
});