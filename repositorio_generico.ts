interface ConId {
    id: number;
}

class Repositorio<T extends ConId> {
    private coleccion: T[] = [];

    public agregar(item: T): void {
        this.coleccion.push(item);
        console.log(`Elemento con ID ${item.id} agregado correctamente.`);
    }

    public buscarPorId(id: number): T | undefined {
        return this.coleccion.find(item => item.id === id);
    }

    public eliminar(id: number): void {
        const index = this.coleccion.findIndex(item => item.id === id);
        if (index !== -1) {
            this.coleccion.splice(index, 1);
            console.log(`Elemento con ID ${id} eliminado.`);
        } else {
            console.log(`No se encontró ningún elemento con ID ${id} para eliminar.`);
        }
    }

    public listar(): T[] {
        return this.coleccion;
    }
}
interface Usuario extends ConId {
    nombre: string;
    rol: string;
}

const repoUsuarios = new Repositorio<Usuario>();

repoUsuarios.agregar({ id: 1, nombre: "Valentina", rol: "Admin" });
repoUsuarios.agregar({ id: 2, nombre: "Samuel", rol: "Developer" });
repoUsuarios.agregar({ id: 3, nombre: "Isabellag", rol: "QA" });

console.log("\n--- Buscando ID 2 ---");
const usuarioBuscado = repoUsuarios.buscarPorId(2);
console.log("Usuario encontrado:", usuarioBuscado);

console.log("\n--- Eliminando ID 3 ---");
repoUsuarios.eliminar(3);

console.log("\nUsuarios restantes en el repositorio:", repoUsuarios.listar());