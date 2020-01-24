function init() {

    // .addEventListener("dragover", allowDrop);
    let jugadores = document.querySelectorAll(".jugador");
    let contador = 0;

    jugadores.forEach(jugador => {

        contador++;
        crearImgs(jugador, contador);
        jugador.addEventListener('dragover', allowDrop);
        
    })
    // document.querySelectorAll(".banca").addEventListener("dragover", allowDrop);
    // document.getElementById("drag1").addEventListener("dragstart", drag);
    // document.getElementById("div2").addEventListener("drop",drop);
    // document.getElementById("div1").addEventListener("drop",drop);

}

function crearImgs(divJugador, id){

    let img = document.createElement("img");
    img.setAttribute("src","img/futbolista.png");
    img.setAttribute("id", id);

    divJugador.appendChild(img);

}
    
function allowDrop(ev) {
    
    //Permitir que reciba algún elemento
    ev.preventDefault();
    
}
    
function drag(ev) {
    
    //Indicamos que valor y tipo de información vamos a arrastrar. En este caso texto e ID del elemento.
    ev.dataTransfer.setData("text", ev.target.id);
    
}
    
function drop(ev) {
    
    //Evitamos el comportamiento normal del navegador, que sería abrir el elemento en una nueva pestaña.
    ev.preventDefault();
    
    //Guardamos el elemento, llamado "text" en una variable.
    var data = ev.dataTransfer.getData("text");
    
    //Colgamos el elemeto arrastrado y soltado en el nuevo destino.
    ev.target.appendChild(document.getElementById(data));
    
}


window.onload = init;