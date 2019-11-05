window.onload = function() {

    crearTablero();

}

var turnosCPU = false;
var player = "player";
var CPU = "cpu";

function crearTablero() {

    const nodoTablero = document.querySelector("#tablero");

    for (let x = 0; x < 3; x++) {

        for (let y = 0; y < 3; y++) {

            let celda = document.createElement("div");
            celda.setAttribute("class", "celda");
            celda.setAttribute("id", x + " " + y);
            celda.addEventListener("mousedown", seleccionarCasilla);
            nodoTablero.appendChild(celda);
        }

    }
    console.log(nodoTablero);

}

function seleccionarCasilla(e) {

    let casilla = e.target;

    setTimeout(movimientoCPU, 600);

    if (!turnosCPU) {

        casilla.classList.add("cruz");
        turnosCPU = true;
        comprobarVictoria(player);
    }

}



function movimientoCPU() {

    let arrayTablero = document.querySelectorAll(".celda");

    for (let i = 0; i < arrayTablero.length; i++) {

        if (!arrayTablero[i].classList.contains("cruz") && !arrayTablero[i].classList.contains("circulo")) {

            arrayTablero[i].classList.add("circulo");

            break;

        }

    }
    turnosCPU = false;

    comprobarVictoria(CPU);

}

function comprobarVictoria(participantes) {

    for (let x = 0; x < 3; x++) {

        for (let y = 0; y < 3; y++) {

            let div = document.getElementById(x + " " + y);

            if (participantes == "player") {

                if (div.classList.add("")) {

                }
            }



        }
    }

}