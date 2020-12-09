const  numeros = [15, 12, 46, 78, 27, 152, 13, 50]
//del siguiente arreglo solo retornar solo los elementos que ocupan los
//elementos impares
const posicionesImpares = numeros.filter(((elemento, i) => {
    if(i % 2 !== 0){
        return elemento;
    }
}
))
console.log(posicionesImpares);
