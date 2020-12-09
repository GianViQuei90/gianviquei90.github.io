//el operador ternario sirve para resumir un if-else
//como requisito, tanto el if como el else deben tener 
//una linea de codigo interno

let dscto = 0 ;
let productos = [12.5,13.0, 80.0, 800, 900];
let total = 0;

for(let i = 0; i < productos.length; i++){
    total = total + productos[i]
}
//si el total a pagar es mayor a 500 hacer el descuento del 5%,
//en caso contrario el dscto sera del 1%

if(total > 500){
    dscto = total*0.05
}else{
    dscto = total*0.01
}

dscto = total > 500 ? total * 0.05: total * 0.01

let num1 = 3847;
let num2 = 3434;
let max = num1 > num2 ? num1 : num2;
console.log(max);

let edades =[12,50,20,60,58]
let mayor=0;

//calcular el mayor
    for(let i = 0; i < edades.length; i++){
        if( edades[i] > mayor){
            mayor=edades[i]
            console.log(mayor);
        }
    }

function imprimirMayor (){
    for(let i = 0; i < edades.length; i++){
        if( edades[i] > mayor){
            mayor=edades[i]
            console.log(mayor);
        }
    }
    console.log(mayor);
}