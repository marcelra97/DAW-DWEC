function init() {

    // campo
    let jugadores = document.querySelectorAll(".jugador");

    jugadores.forEach(jugador => {

        jugador.addEventListener("dragover", allowDrop);
        jugador.addEventListener("drop",drop);

        //el dragstart solamente lo necesitas para añadirselo al elemento que quieres darle el drag no a la caja que lo contiene
        jugador.firstElementChild.addEventListener('dragstart', drag);

    })
    
    //banquillo
    let banquillo = document.querySelectorAll(".banca");

    banquillo.forEach(banca => {

        banca.addEventListener("dragover", allowDrop);
        banca.addEventListener("drop",drop);
       
    })

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
      //Si esa caja ya tiene un elemento no se podra soltar ahi  
      if(!ev.target.draggable){
        ev.target.appendChild(document.getElementById(data));
    }
    
}


window.onload = init;