const contraseñas: string[] = ["userPassword123", "secret456", "admin_root", "pass", "qwertyuiop"];

const todasValidas = contraseñas.every(password => password.length >= 8);

const algunaEsAdmin = contraseñas.some(password => password.includes("admin"));

console.log(`¿Todas las contraseñas son seguras (>= 8 caracteres)?: ${todasValidas}`);
console.log(`¿Alguna contraseña contiene la palabra 'admin'?: ${algunaEsAdmin}`);