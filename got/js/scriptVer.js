function crearVer(datoJson) {
    console.log(datoJson.got);
    
    let divPrincipal = document.querySelector("#contenedorFichas");
    datoJson.got.forEach(personaje => {
    divPrincipal.innerHTML += 
    `<img class= "foto" src="${personaje.imagen}"></img>
    <div class="datos">
    <div class="small cabecera">Nombre</div>
    <div class="medium cabecera">Apellidos</div>
    <div class="small dato">${personaje.nombre}</div>
    <div class="medium dato">${personaje.apellidos}</div>
    <div class="medium cabecera">Padres</div>
    <div class="small cabecera">Casa</div>
    <div class="medium dato">${personaje.padres}</div>
    <div class="small dato">${personaje.familia}</div>
    <div class="big cabecera">Título</div>
    <div class="big dato">${personaje.titulo}</div>
    </div>`
});
    
}

function cargarJson() {
    
    let url = "got.json";

    fetch(url)
    .then(response => {
        return response.json()
    })
    .then(dato => {

        
        crearVer(dato);
    })

}


function init() {
    
    cargarJson();
}

window.onload = init;