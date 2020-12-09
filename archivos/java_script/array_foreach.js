const facturas=[123.5,4500,2000,123,1025];

facturas.forEach((factura, i) => {
    console.log(`Factura => ${factura}`);
    console.log(`Posicion => ${i}`);
})

const usuarios =["Daniela","Dayana","Mariel","Kike","Rubi"]
const nuevosUsuarios = usuarios.map((usuario)=>{
    return usuario;
})
console.log(nuevosUsuarios);

//del siguiente arreglo retornar el doble de los numeros pares y la
//mitad de los impares

const  numeros = [15, 12, 46, 78, 27, 152, 13, 50]
const resultados = numeros.map((numero) => {
    if(numero % 2 === 0){
        return numero*2;
    }else{
        return numero/2;
    }
})
console.log(resultados);

const dobleDePares = numeros.map(function(numero){
    if(numero%2 === 0){
        return numero*2
    }else{
        return numero
    }
})
console.log(dobleDePares);