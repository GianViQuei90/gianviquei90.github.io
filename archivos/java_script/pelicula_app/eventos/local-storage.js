const inputColor = document.getElementById("inputColor");
const inputTamanio = document.getElementById("inputTamanio")
const formPreferencias = document.getElementById("formPreferencias");

formPreferencias.onsubmit = (e) => {
    e.preventDefault();

    let objPreferencias = {
        color : inputColor.value,
        tamanio : inputTamanio.value
    }
    let objString = JSON.stringify(objPreferencias);
    console.log(objString);

}


inputColor.onchange = (e) => {
  console.log(inputColor.value);
  /**
   * localstorage.setItem("clave","valor")
   * Crea una clave=>valor en el localstorage del navegador
   * y permanece inclusive si el navegador se cierra
   */
  localStorage.setItem("colorFavorito", inputColor.value);
}
const verificarStorage = () => {
    // let colorStorage = localStorage.getItem("colorFavorito");
    let preferencias = localStorage.getItem("preferencias");

    if(preferencias){
        let preferenciasJSON = JSON.parse(preferencias);
        inputColor.value = preferenciasJSON.color;
        inputTamanio.value = preferenciasJSON.tamanio;
    }
}
verificarStorage();
