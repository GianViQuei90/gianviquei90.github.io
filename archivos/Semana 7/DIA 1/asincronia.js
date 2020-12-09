const saludo = () => {
    console.log("Imprimiendo saludo")
}

console.log("hola");
setTimeout( () => {
    console.log("Asincrono 2 seg.");
}, 2000
)

console.log("como estas");

saludo();

setTimeout( () => {
    console.log("Asincrono 3 seg.");
}, 3000
)


console.log("hasta pronto joven");