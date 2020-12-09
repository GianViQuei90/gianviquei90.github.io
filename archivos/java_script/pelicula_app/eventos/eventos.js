let btnAlerta = document.getElementById("btnAlerta")
let btnEvento = document.getElementById("btnEvento")
let lis = document.querySelectorAll("ul>li");
let divCirculo = document.getElementById("divCirculo")
let linkGoogle = document.getElementById("linkGoogle")

// console.log(lis);

//FORMAS DE ASOCIAR EVENTOS
//Forma1 
//element.addaEventListener("evento", function(){})
//Forma2
//element.on[evento] = function(e){}
//Referencia
//https://developer.mozilla.org/es/docs/Web/Events

btnAlerta.addEventListener("click", function(e){
    alert("hey! alguien dio click")

})

btnEvento.onclick = function(e){
    console.log("Click en el boton evento");
    console.log(e);
}

lis=Array.from(lis);

lis.forEach((li) => {
    li.onclick = function(e){
        //el evento e es un parametro que tiene
        //toda la informacion de un evento
        //e.target hace referencia al elemento html en
        //el que ocurre el evento        
        console.log(e.target.innerText);
        console.log("Se hizo en un li");
    }
}
)

divCirculo.ondblclick = function(e){
    //cada vez que se le de doble click en el circulo, cambie a un color
    //aleatorio
    let random255 = () => {
        return Math.random()* (255)
    }
    divCirculo.style.backgroundColor = `rgb(${random255()}, ${random255()}, ${random255()})`;
    
}

//eventos por defecto
//existen elementos que tienen configurados ciertos comportamientos que 
//responden a algunos eventos como por ejemplo la etiqueta "a" que cuando hace click
//navegamos a otra pagina definida por su atributo href=""

linkGoogle.onclick = (e) => {
    e.preventDefault();
    console.log("asdasdasdasdasdas");
}
