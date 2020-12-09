
const buscarPorDni = (dni) => {
    //tiempo de demora de buscar el dni en la base de datos 300ms
    let respuesta = "nada";
    setTimeout(() => {
        respuesta =  "Giancarlo";
    }, 300
    );
    return respuesta
}

let nombre = buscarPorDni("46613053")
console.log(nombre);
