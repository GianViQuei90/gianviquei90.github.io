//una promesa es una estructura que nos ayuda a esperar
//un resultado tras la ejecucion de una funcion asincrona

const buscarPorDni = (dni) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("Jorge Garnica Blanco");
      }, 1500);
    })
  };


  console.log("algo aqui 1");

  buscarPorDni("46613053").then((nombre) => {
      console.log(nombre);
      document.getElementById("resultado").innerText = nombre;
  }
  );

  console.log("algo aqui 2");