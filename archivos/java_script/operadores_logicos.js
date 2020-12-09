//Algebra booleana
//
let edad = 20;
let cazado = false;

//la persona ingresa al establecimiento
//si es  mayor de edad y no tiene novia

if( edad >= 18){
    if(!cazado){
        console.log("pase joven");
    }
}

if( edad >= 18  && cazado !== true){
    console.log("pase joven");
}

function añoBisiesto(año){
    if(año % 4 ===0 && año % 100 !== 0 || año % 400 === 0){
        console.log(`${año} es bisiesto`);
    }
    else{
        console.log(`${año} no es bisiesto`);
    }
}