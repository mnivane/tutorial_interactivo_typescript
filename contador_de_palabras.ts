const frase = "Hola, ¿cómo estás? Espero que estés teniendo un buen día.";

const contadorPalabras = new Map<string, number>();

const palabras = frase.split(" ");
palabras.forEach((palabra) => {
    if (contadorPalabras.has(palabra)) {
        const cantidadActual = contadorPalabras.get(palabra)!;
        contadorPalabras.set(palabra, cantidadActual + 1);
    } else {
        contadorPalabras.set(palabra, 1);
    }   

});

console.log("=== Frecuencia de Palabras ===")
contadorPalabras.forEach((frecuencia, palabra) => {
    console.log(`Palabra: "${palabra}" Frecuencia -> ${frecuencia} vez/veces`);
});