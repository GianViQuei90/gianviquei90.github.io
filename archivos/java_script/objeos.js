let objetoPersona = {
    nombre: "Jorgito",
    direccion: "Calle siempre viva",
    platosFavoritos: ["Cebiche", "Rocoto Relleno", "Ají de gallina"],
    ubicacion:{
        lat: -70.1324,
        lon: -16.5135
    }
}

console.log(objetoPersona["direccion"]);

objetoPersona.platosFavoritos.forEach((plato, i) => {
        console.log(`Plato ${i +1}: ${plato}`);
}
)