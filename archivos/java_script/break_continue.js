/**
*break;
*En una estructura repetitiva, sirve para detener el ciclo y saltarse todos los ciclos o iteraciones
*que quedaban por dar
**/

let nombres = ["jorge", "samanta","dayana","dennis","brunela","paty"]
// indicar o imprimir, la posicion en el que denis se encuentra

for(let i = 0; i < nombres.length; i++) {
    if(nombres[i] === "dennis"){
        console.log(i);
        break;
    }
}


//Continues sirve para saltarse la iteracion en la que se encuentra, es decir
// todo el codigo que queda por ejecutarse en una determinada iteracion, se va a omitir
// y se pasara a la siguiente iteracion

let numerosBinarios = [1,0,0,1,1,1,1,1,1,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0,0,0]
//imprimir solo los ceros

for( let i = 0 ; i < numerosBinarios.length; i++){
    if(numerosBinarios[i] === 1){
        continue;
    }
    console.log(numerosBinarios[i]);
}
