/**
 * destructuracion de objetos
 */ 
 
let objMascota = {
    nombre: "Rufo",
    raza: "Dogo Argentino",
    edad: 4,
    colores: ["Blanco", "Café"]
}

// let {nombre} = objMascota;

// console.log(nombre);

// //destructurando la edad, en una nueva variable llamada anios
// let { edad:anios} = objMascota;

// console.log(anios);

// let{ colores} = objMascota;

// colores.forEach((c) => {
//     console.log(c)
// }
// )

// let otraMascota = objMascota;
// console.log(otraMascota);
// console.log(objMascota);

// objMascota.raza = "Bulldog";
// console.log(otraMascota);
// console.log(objMascota);

//como se debe copiar un objeto correctamente
let otraMascota = {...objMascota}
console.log(otraMascota);
console.log(objMascota);

objMascota.raza = "Bulldoguito";
console.log(otraMascota);
console.log(objMascota);

const impimirDatosDeMascota = ({nombre, raza}) => {
    console.log(`${nombre} es un ${raza}`)
}

impimirDatosDeMascota(objMascota)
