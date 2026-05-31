interface Vehiculo {
    readonly placa: string;
    marca: string;
    modelo: string;
    año: number;
    kilometraje: number;
    disponible: boolean;
}

const carro1: Vehiculo = {
    placa: "KBC123",
    marca: "Mazda",
    modelo: "Mazda 3",
    año: 2022,
    kilometraje: 15000,
    disponible: true
};

const carro2: Vehiculo = {
    placa: "XYZ789",
    marca: "Chevrolet",
    modelo: "Onix",
    año: 2020,
    kilometraje: 45000,
    disponible: false
};

const carro3: Vehiculo = {
    placa: "HMW456",
    marca: "Toyota",
    modelo: "Hilux",
    año: 2024,
    kilometraje: 5000,
    disponible: true
};

console.log(`Vehículo: ${carro1.marca} ${carro1.modelo} (Placa: ${carro1.placa}) - Estado: ${carro1.disponible ? "Disponible para alquiler" : "No disponible"}`);
console.log(`Vehículo: ${carro2.marca} ${carro2.modelo} (Placa: ${carro2.placa}) - Estado: ${carro2.disponible ? "Disponible para alquiler" : "No disponible"}`);
console.log(`Vehículo: ${carro3.marca} ${carro3.modelo} (Placa: ${carro3.placa}) - Estado: ${carro3.disponible ? "Disponible para alquiler" : "No disponible"}`);