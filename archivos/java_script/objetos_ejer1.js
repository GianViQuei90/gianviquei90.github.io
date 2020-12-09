//reto 1 : crear un constructor (clase) de nombre alumno
//los atributos de cada alumno seran:
//nombres: <string>
//apellidos: <string>
//notas: array <numbers>
//dni: <string>
//promedioNotas: function => funcion que calculara
//el promedio de todas las notas que tengan un alumno y 
//retornara dicho promedio
//el constructor debe recibir todos los parametros

function Alumno(_nombres="", _apellidos="", _notas=[], _dni=""){
    let objAlumno = {
        nombre: _nombres,
        apellidos: _apellidos,
        notas: _notas,
        promedioNotas: function(){
            let sumatoria = 0;
            this.notas.forEach((nota) => {
                sumatoria += nota;
            })
            return suma/ this.notas.length
        }
    }
    return objAlumno
}

// let alumnos = [];


//hacer un algoritmo para ingresar los datos de 2 alumnos con 3 notas cada uno
//los datos deben ser ingrsados por el usuario al arreglo alumnos
//al final de ingresar los 2 alumnos, se debe mostrar el promedio de notas de cada
//alumno y luego imprimir a ambos alumnos por consola.

//1.leer la cantidad de alumnos a ingresar
//2.leer la cantidad de notas por alumno a ingresar
//3.iterar la cantidad de alumnos que el usuario va a ingresar y en cada
//vuelta, pedir los datos del alumno incluidad las notas.
//4.adicionalmente, en cada vuelta agregar el alumno ingresado al arreglo de alumnos
//5.luego de ingresar a todos los añlumnos, iterar nuevamente el arreglo de alumnos
//para imprimir el promedio de ellos en cada iteracion
//6.finalmente, acabadas las iteraciones, imprimir el arreglo de alumnos

let alumno =[] ;
  let numAlumnos = prompt("Ingresar el numero de alumno que desea ingresar :") ;
for(let i = 0 ; i< numAlumnos ; i++)
{
    let nombre = prompt("Ingrese el nombre del alumno:" + (i + 1)) ;
    let apellidos = prompt("Ingresar el apellidos del alumno :" + (i + 1) )  ;
    let dni = prompt("Ingresar el dni del alumno :" + (i + 1)) ;
    let notas = [];
    let numNotas  = prompt("Ingresar el numero de notas a ingresa :" + (i + 1)) ;
    for(let j = 0 ; j< numNotas ; j++)
    {
        let Notas  = prompt("Ingresar la nota => :" + (j + 1) +" del alumno : "+ nombre + " - " + apellidos );
        notas.push(notas); 
    }   
    let eleAlumno =  new Alumno(nombre , apellidos  , notas , dni);
    alumno.push(eleAlumno);
}
alumno.forEach((alumn)=>{
    console.log (alumn.promedioNotas());

} )
