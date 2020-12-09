//REGLA 1
//SI UNA FUNCION TIENE UNA SOLA LINEA DE EJECUCION Y RETORNO
//SE PUEDEN OMITIR

const cubo = (numero) => numero * numero * numero;

console.log(cubo(5));

//regla 2 
//cuando una funcion recibe 1 solo parametro
//se puede omitir el simbolo de parentesis

const buscarProDni = dni => console.log(`Encontrado ${dni}`); 

buscarProDni("46613053");

//Regla 3
//Formas reducidas de hacer map, filter y find

let numeros = [4,5,2,58,1,2,15,2,98];

// //Forma tradicional
// let pares = numeros.filter( num => {
//     if(num % 2 === 0){
//         return num;
//     }
// })

// console.log(pares);

//Forma corta
let pares = numeros.filter( num => num % 2 === 0);
console.log(pares);
