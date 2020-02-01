function crearFicha() {

    let divPrincipal = document.querySelector("#contenedorFichas");
    console.log(divPrincipal);
    divPrincipal.innerHTML += 
    `<img class= "foto" src="${imagen}"></img>
    <div class="datos">
    <div class="small cabecera">Nombre</div>
    <div class="medium cabecera">Apellidos</div>
    <div class="small dato">${nombre}</div>
    <div class="medium dato">${apellido}</div>
    <div class="medium cabecera">Padres</div>
    <div class="small cabecera">Casa</div>
    <div class="medium dato">${padres}</div>
    <div class="small dato">${casa}</div>
    <div class="big cabecera">Título</div>
    <div class="big dato">${titulo}</div>
    </div>`

}


function comprobarVacio() {
    
    let idError = "e"+this.id;
    let divError = document.querySelector("#"+idError);

    console.log(divError);
    

   if(this.value == ""){

       this.classList.add("vacia");
       divError.style.visibility = "visible";

   }else{

    this.classList.remove("vacia");
    divError.style.visibility = "hidden";

    if(this.id == "nombre") nombre = this.value;

    if(this.id == "apellidos") apellido = this.value;

    if(this.id == "casa") casa = this.value;

    if(this.id == "padres") padres = this.value;

    if(this.id == "titulo") titulo = this.value;

    if(this.id == "imagen") imagen = this.value;

   }
}


function init() {
    
    let arrayInput = document.querySelectorAll("input");

    arrayInput.forEach( input => {

        input.addEventListener("blur", comprobarVacio);
    })
    document.querySelector("button").addEventListener("click", crearFicha);
}

let nombre;
let apellido;
let casa;
let padres;
let titulo;
let imagen;
window.onload = init;