const populares = document.getElementById("populares");
const formBusqueda =  document.getElementById("formBusqueda");
const inputBusqueda =  document.getElementById("inputBusqueda");

const dibujarPopulares = ({results = []}) => {
    results.forEach((peli) => {
        const div = document.createElement("div");
        div.classList.add("col-xl-3", "col-lg-3", "col-md-4", "col-sm-6", "mb-3");
        div.innerHTML=`<div class="card shadow">
        <img src="https://image.tmdb.org/t/p/w300${peli.poster_path}" alt="" class="card-img-top">
        <div class="card-body">
            <h5 class="card-title">
                ${peli.title}
            </h5>
            <p class="text">
                ${peli.overview.substr(0, 100)}... <a href="#">Leer más</a>
            </p>
            <small class="text-muted">
                ${peli.release_date}
            </small>
        </div>
    </div>`;
    populares.appendChild(div);
    })
}


const getPeliculasPopulares = () => {
    const urlTMDB = "https://api.themoviedb.org/3/movie/popular?api_key=99842126cbf963bf95791145267cd6d3&language=es-ES";
    fetch(urlTMDB).then((peticion) => {
        peticion.json().then((data)=>{
            dibujarPopulares(data);
        })
    }
    )
}

getPeliculasPopulares();

formBusqueda.onsubmit = e  => {
    e.preventDefault();
    let busqueda = inputBusqueda.value;
    //encodeURI codifica un string para que pueda viajar a traves de una url
    //el valor codificado es retornado
    busqueda = encodeURI(busqueda);

    let url= `https://api.themoviedb.org/3/search/movie?api_key=99842126cbf963bf95791145267cd6d3&language=en-ES&query=${busqueda}&page=1&include_adult=false`
    
    //tarea: hacer fetch a la url y dibujar el resultado de las peliculas que
    //coincidan cn la busqueda en un div que sea exclusivo de los resultados de busqueda
    //
}
