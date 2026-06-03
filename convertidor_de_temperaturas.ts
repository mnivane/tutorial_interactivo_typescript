const temperaturasCelsius: number[] = [0, 15, 23, 32, 40];

const temperaturasFahrenheit = temperaturasCelsius.map(c => c * 9 / 5 + 32);

console.log("Temperaturas en Celsius:", temperaturasCelsius);
console.log("Temperaturas en Fahrenheit:", temperaturasFahrenheit);