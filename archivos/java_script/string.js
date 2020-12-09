
// let frase = "CodiGo bootcamp de desarrollo web"

// console.log(frase[5]);

// for (let i=0; i <frase.length; i++){
//     console.log(frase[i]);
// }

// console.log(`Posicion de "Go" : ` + frase.indexOf("Go"));

// console.log(frase.toLowerCase());

// const titulo= "Once Upon a Snowman"
// let posicionSnow= (titulo.toLowerCase()).indexOf("snow")
// console.log(posicionSnow);

// let palabras = frase.split(" ")
// console.log(palabras);

//eliminando monosilabos

let sinopsis ="Enola Holmes, una intrepida joven que busca a su madre"

let arreglo = sinopsis.split(" ")

arreglo = arreglo.filter((word) => {
    if(word.length > 3){
        return word;
    }
})

console.log(arreglo);