// window.addEventListener("keydown", ultimaLetraPulsada);

window.onload = function() {

    var teclado = document.getElementById("teclado");

    for (let teclaActual = 65; teclaActual <= 90; teclaActual++) {

        tecla = document.createElement("button");
        tecla.innerText = String.fromCharCode(teclaActual);
        tecla.classList.add("tecla");
        teclado.appendChild(tecla);

    }

    //si la palabra esta usada
    document.addEventListener("mousedown", palabrasUsadas);

    //le doy un evento a los botones;
    document.addEventListener("mousedown", ultimaLetraPulsada);

    //para que desaparezca el papanoel al principio
    let papaNoel = document.querySelectorAll('.extremidad');
    papaNoel.forEach(extremidad => extremidad.classList.add("transparente"));

    // esta funcion lleva  a la creacion de las peliculas que tienes que adivinar 
    peliculaEnigma();
}

var crearTexto = true;
var arrayLetras = new Array();

function peliculaEnigma() {


    let arrayPeliculas = ["los gremlins", "pesadilla antes de navidad", "the holidays", "the polar express"];

    //me he creado  un div que tiene donde contendra la respuesta
    const nodoTitulo = document.querySelector('#titulo');

    const nodoRespuesta = document.createElement("div");

    nodoRespuesta.setAttribute("id", "respuesta");
    nodoTitulo.appendChild(nodoRespuesta);

    //primero coger la posicion del array y sacar el string

    //creo un random
    let random = Math.random();

    //cojo el tamaño del array
    let tamañoSeleccion = arrayPeliculas.length;

    // despues cojo un tamaño indice random
    let indiceRandom = Math.floor(random * tamañoSeleccion);

    // y el que salga me lo guardo, elimino del array ese numero tambien
    let peliculaRandom = arrayPeliculas.splice(indiceRandom, "1");

    //me cojo el string dentro del array
    let pelicula = peliculaRandom[0];

    //y hago un for para saber cual cuantas barras bajas poner
    for (let i = 0; i < pelicula.length; i++) {

        let span = document.createElement("span");
        nodoRespuesta.appendChild(span);
        span.innerHTML += "_";
    }


}

function ultimaLetraPulsada(tecla) {
    // esta funcion es para que aparezca la ultima letra
    let clickTecla;
    let texto;
    let nodoUltimaLetra;
    let nodoTexto;

    //me cojo el div del boton clikcado
    clickTecla = tecla.target;

    //me guardo su texto
    texto = clickTecla.innerText;

    //me cojo la caja
    nodoUltimaLetra = document.querySelector("#letra");

    //si es la primera vez entras
    if (crearTexto) {
        //creas un elemento
        nodoTexto = document.createElement("p");
        //la añades a la caja padre
        nodoUltimaLetra.appendChild(nodoTexto);
        //y pones el texto
        nodoTexto.innerText = texto;

        crearTexto = false;

    } else {
        //si ya esta creado el elemento pones el nuevo texto
        let textoNuevo = nodoUltimaLetra.querySelector("p");
        textoNuevo.innerText = texto;
    }

    apareceMonigote()
}

function palabrasUsadas(tecla) {

    // Aqui compruebo si dentro del array global no hay ninguna letra 

    let nodoPadre;
    let nodoHijo;
    let contador = 0;

    let evento = tecla.target;

    let texto = evento.innerText;

    //introduzco en el array la letra
    arrayLetras.push(texto);
    //lo recorro y compruebo que solo este una vez
    for (let i = 0; i < arrayLetras.length; i++) {

        if (arrayLetras[i] == texto) {

            contador++;

        }

    }

    // si solo esta una vez la meto dentro del div
    if (contador == 1) {

        nodoPadre = document.querySelector("#letrasUsadas");

        nodoHijo = document.createElement("div");
        nodoHijo.setAttribute("class", "cajaLetra");

        nodoPadre.appendChild(nodoHijo);
        nodoHijo.innerText = texto;

    } else {
        //si esta repetida, cojo todas las cajas
        let cajaRepetida = document.querySelectorAll(".cajaLetra");
        let letra;

        //y las recorro
        for (let i = 0; i < cajaRepetida.length; i++) {

            //me cojo cada caja 
            letra = cajaRepetida[i];

            //y compruebo si esa ya esta puesta
            if (letra.innerText == texto) {

                //si lo esta le añado la clase repetida y le hago el evento de transicion para que luego vuelva  a la normalidad.
                cajaRepetida[i].classList.add("repetida");
                cajaRepetida[i].addEventListener('transitionend', function() {

                    cajaRepetida[i].classList.remove("repetida");
                });


            }
        }

    }

}

function apareceMonigote() {

    let cont = 0

    let cuerpo = document.querySelectorAll(".extremidad");


    switch (cont) {
        case 0:


            break;

        case 1:

            break;
        case 2:

            break;
        case 3:

            break;
        case 4:

            break;
        case 5:

            break;
        case 6:

            break;
        case 7:

            break;
        case 8:

            break;
        case 9:

            break;

        default:
            break;
    }

}