var pantalla;
var numeros = "";

window.onload = function() {

    pantalla = document.getElementById("resultado");
    pantalla.value = "0";
}

document.addEventListener("DOMContentLoaded", function() {

    //me creo un array de botones donde me guardo las clases de esos botones
    var arrayBotones = document.getElementsByClassName("boton");

    //luego lo recorro para que cuando pulse el boton llame a la funcion mantener boton
    for (let i = 0; i < arrayBotones.length; i++) {

        arrayBotones[i].addEventListener("mousedown", mantenerBoton);
        arrayBotones[i].addEventListener("mouseup", soltarBoton);
        arrayBotones[i].addEventListener("click", ponerNumero);
    }

    document.getElementById("resetear").addEventListener("click", reset);

    document.getElementById("borrar").addEventListener("click", borrarUno);



})


//le pone sombra al boton
function mantenerBoton() {

    this.classList.add("sombra");

}

//se la quita
function soltarBoton() {

    this.classList.remove("sombra");

}

function ponerNumero() {


    var digito = this.innerText;

    //si el opreacion esta vacio y si no es un simbolo le pones el primer numero
    if (numeros == "") {

        numeros = digito;

        //sino concatenas con los siguientes     
    } else {

        numeros += digito;
    }

    pantalla.value = numeros;

}

//resetea la calcualdora
function reset() {

    numeros = "0";
    pantalla.value = numeros;
    numeros = "";

}

//borrar uno para la derecha
function borrarUno() {



    if (pantalla.value.length > 2) {

        pantalla.value = pantalla.value.substring(0, numeros.length - 1);

        console.log(numeros)
    } else {

        reset();
    }

    /*
        if (this.id == "borrar") {

            if (document.getElementById("resultado").value.length > 1) {

                document.getElementById("resultado").value = document.getElementById("resultado").value.substring(0,numeros - 1);


            }

        }*/


}