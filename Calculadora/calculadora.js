document.addEventListener("DOMContentLoaded", function() {

    let arrayBotones = document.getElementsByClassName("boton");

    for (let i = 0; i < arrayBotones.length; i++) {

        arrayBotones[i].addEventListener("click", mantenerboton);

    }


})

function mantenerboton(elemento) {

    this.classList.add("sombra");

}