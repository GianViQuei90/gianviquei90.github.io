const formRegistro = document.getElementById("formRegistro")
const inputPlaca = document.getElementById("inputPlaca")
const selectColor = document.getElementById("selectColor")
const radioNuevo = document.getElementById("radioNuevo")
const radioUsado = document.getElementById("radioUsado")
const textObs = document.getElementById("textObs")


const resetearFormulario = () => {
    formRegistro.reset();
    textObs.value = "Sin observaciones";
}


// onsubmit = > evento que se dispara cuando se envia el formulario
formRegistro.onsubmit = (e) => {
    e.preventDefault();

    let placa = inputPlaca.value;
    let color= selectColor.value;
    let estado = radioNuevo.checked === true ? "nuevo" : "usado";
    let obs = textObs.value;
    
    if(placa === "" || color === "0" || obs === ""){
        formRegistro.classList.add("errorFormulario");
        alert("Error joven!, llene todos los campos");

        return;
    }

    formRegistro.classList.remove("errorFormulario")

    let objVehiculo = {
        placa : placa,
        color : color,
        estado : estado,
        observaciones : obs
    }
    console.log(objVehiculo);

    resetearFormulario();
}
    

// elemento.focus()
//funcion que establece el cursor por defecto en un determinado elemento

inputPlaca.focus()

