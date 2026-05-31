const USUARIO_REGISTRADO = "admin";
const CONTRASENA_REGISTRADA = "password123";

function login(usuario: string, contraseña: string): boolean {
    if (usuario.trim() === "") {
        throw new Error("El nombre de usuario no puede estar vacío.");
    }
    if (contraseña.length < 6) {
        throw new Error("La contraseña debe tener al menos 6 caracteres.");
    }
    if (usuario !== USUARIO_REGISTRADO || contraseña !== CONTRASENA_REGISTRADA) {
        throw new Error("Acceso denegado: Usuario o contraseña incorrectos.");
    }
    return true;
}

function probarLogin(usuario: string, contraseña: string) {
    console.log(`Intentando ingresar con Usuario: "${usuario}" y Contraseña: "${contraseña}"`);
    try {
        const exito = login(usuario, contraseña);
        if (exito) {
            console.log("¡Login exitoso! Bienvenido al sistema.\n");
        }
    } catch (error: any) {
        console.error(`Error de Login: ${error.message}\n`);
    }
}

probarLogin("", "123");
probarLogin("admin", "incorrecta123");
probarLogin("admin", "password123");
