let parrafos = $(".miParrafo");
parrafos.addClass("cursiva");

parrafos[0].style.color = "red";
parrafos[0].innerHTML = "Nuevo primer parrafo";

/*
*jquery.html("texto")
*Funciona como el innerHTML para un grupo de elementos
 */
parrafos.html("Nuevos textos de los parrafos")

$("#header").click(function (e) { 
    e.preventDefault();
    console.log("se hizo click en el header");
});


let body = $("body");
console.log(body);