
interface Perfil {    nombre: string;
    profesion: string;
    experiencia: number;
    habilidades: string[];
}

const perfilOriginal: Perfil = {
    nombre: "Vanessa Carrillo",
    profesion: "Ingeniera de Software",
    experiencia: 1,
    habilidades: ["TypeScript", "JavaScript", "Nuxt.js", "Bun"]
};

const perfilClonado: Perfil = {
    ...perfilOriginal,
    nombre: "Alejandro Gómez",
    experiencia: 3
};

console.log("Perfil Original:", perfilOriginal);
console.log("Perfil Clonado:", perfilClonado);

const clavesOriginal = Object.keys(perfilOriginal);
console.log("Claves del objeto original:", clavesOriginal);