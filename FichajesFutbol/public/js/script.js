function init() {

    //url a la base de datos
    let url = "../controlador/cargarBD.php";

    // recojo los datos de la conexion a la base de datos
    fetch(url)
    .then(function(response) {

            return response.json();

    })
    .then(datos =>{

        //aqui tengo un array de los datos
        //console.log(datos);

        // me creo el div de los jugadores
        crearDivsJugadores(datos);
    })

    eventosBanquillo();
    // // campo
    // let jugadores = document.querySelectorAll(".jugador");

    // jugadores.forEach(jugador => {

    //     jugador.addEventListener("dragover", allowDrop);
    //     jugador.addEventListener("drop",drop);

    //     //el dragstart solamente lo necesitas para añadirselo al elemento que quieres darle el drag no a la caja que lo contiene
    //     jugador.firstElementChild.addEventListener('dragstart', drag);

    // })

    //
}

function eventosBanquillo() {
     
    let banquillo = document.querySelectorAll(".banca");

    banquillo.forEach(banca => {

        banca.addEventListener("dragover", allowDrop);
        banca.addEventListener("drop",drop);

    })

}

function crearDivsJugadores(datosJSon) {

    // me coje todos los divs de cada posicion
    datosJSon.forEach(jugador => {

        let divPosicion = document.getElementById(jugador[2]);

        /**********DIVJUGADOR*************/
        //me creo el div jugador y la imagen
        let divJugador = document.createElement("div");
        divJugador.classList.add("jugador");

        /*******Eventos Jugador************/
        //el evento dragover es para la caja  y permite dejar cualquier elemento
        divJugador.addEventListener("dragover", allowDrop);
        // el evento drop es para poder dejar caer un elemetento en esa caja
        divJugador.addEventListener("drop", drop);

        /************IMAGEN*************/
        let imagen = document.createElement("img");
        //le añado la ruta de la imagen
        imagen.setAttribute("src", "img/"+jugador[3]);
        //le añado el id para luego hacer el drag and drop
        imagen.setAttribute("id", jugador[0]);

        /********EVENTOS IMAGEN***********/
        //el evento drag es para los elementos que vas a coger no para sus cajas
        imagen.addEventListener("drag", drag);



        divJugador.appendChild(imagen);
        divPosicion.appendChild(divJugador);


    });
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