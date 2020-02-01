function recogerDatosJson() {
    
    let url = "got.json";

    fetch(url)
    .then(response => {
        return response.json()
    })
    .then(datos => {
       
        crearPlantilla(datos);  
    })


}

function crearPlantilla(datosJson) {

    let divPrincipal = document.querySelector("#contenedorFotos");
  
    let contador = 1;
    
    datosJson.got.forEach(personaje => {
        //console.log(personaje);
        divPrincipal.innerHTML+= `
        <div class="col-xs-6 col-sm-3 contenedorJuego">
            <img class="img-thumbnail" id="${personaje.familia}" src="${personaje.imagen}"></img>
            <select class="form-control">
                <option>Selecciona familia...</option>
                <option value="Casa Lannister">Casa Lannister</option>
                <option value="Casa Targaryen">Casa Targaryen</option>
                <option value="Casa Stark">Casa Stark</option>
                <option value="Casa Bolton">Casa Bolton</option>
                <option value="Casa Tyrell">Casa Tyrell</option>
                <option value="Casa Baratheon">Casa Baratheon</option>
                <option value="Casa Clegane">Casa Clegane</option>
            </select>
        </div>`
        contador++;
    });


}

function comprobarRespuestas() {

    let arrayFotos = document.querySelectorAll(".contenedorJuego");
    let correctas = 0;
    let fallos = 0;

    console.log(arrayFotos);

     for (let i = 0; i < arrayFotos.length; i++) {
        
        let idFamilia = arrayFotos[i].querySelector("img").id;
        let selectFamilia = arrayFotos[i].querySelector("select").value;
        
        if(idFamilia == selectFamilia){

            correctas++;
            arrayFotos[i].querySelector("select").classList.remove("vacia");
        }else{

            fallos++;
            arrayFotos[i].querySelector("select").classList.add("vacia");
        }
    }

    alert("Has tenido "+ correctas +" aciertos y has tenido "+ fallos +" fallos");
}

function init() {

    recogerDatosJson();

    document.querySelector("button").addEventListener("click", comprobarRespuestas);

}



window.onload = init;