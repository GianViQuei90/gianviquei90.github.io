//find retorna solo un elemenmto con una condicion de busqueda para
//los elementos del arreglo
//y encontrado el elemento este es retornado, en caso no se encuentre
//el retorno sera undefined

const dnis = ["10203040","52542142","46613053","08574476"]

const encontrado = dnis.find((dni) => {
    if(dni === "46613033"){
        return dni;
    }
}
)
console.log(encontrado);

encontrado ? console.log(encontrado) : console.log("nay");
console.log(dnis.indexOf("46613053"));