function Circular(elemento) {

    elemento.classList.add("borderRadius");

}

function Cuadrado(elemento) {

    elemento.classList.remove("borderRadius");

}

function QuitarSombra(elemento) {

    elemento.classList.add("quitarSombra");
    elemento.classList.remove("anyadirSombra");
}

function AnyadirSombra(elemento) {

    elemento.classList.remove("quitarSombra");
    elemento.classList.add("anyadirSombra");

}

function SombraDentro(elemento) {

    elemento.classList.add("sombraDentro");
    elemento.classList.remove("quitarSombra");
    elemento.classList.remove("anyadirSombra");
    elemento.classList.add("circuloMantenido");


}

function EliminarContenido(nombreID) {

    var cajaEliminar = document.getElementById(nombreID);
    var padre = cajaEliminar.parentNode;
    var cuadrado = document.getElementById(nombreID);
    cuadrado.classList.add("transicion");

    setTimeout(function() {
        padre.removeChild(cajaEliminar);
    }, 1000);


}