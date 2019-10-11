document.addEventListener("DOMContentLoaded", function() {

    //me creo un array de botones donde me guardo las clases de esos botones
    var arrayBotones = document.getElementsByClassName("boton");

    //luego lo recorro para que cuando pulse el boton llame a la funcion mantener boton
    for (let i = 0; i < arrayBotones.length; i++) {

        arrayBotones[i].addEventListener("mousedown", mantenerBoton);

    }

    //tambien la vuelvo a recorrer para que cuando suelte el boton llame a la funcion soltar boton
    for(let i = 0; i < arrayBotones.length; i++){

        arrayBotones[i].addEventListener("mouseup", soltarBoton);
    }

    for(let i = 0; i < arrayBotones.length; i++){

        arrayBotones[i].addEventListener("click", ponereNumero);

    }

})

// un string que se guarda los numeros
var operacion1 ="";
var operacion2 ="";

//le pone sombra al boton
function mantenerBoton() {
   
    this.classList.add("sombra");

}

//se la quita
function soltarBoton(){

    this.classList.remove("sombra");

}

function ponereNumero(){

var arrayNumeros=["0","1","2","3","4","5","6","7","8","9"];

    //si el opreacion1 esta vacio le pones el primer numero
    if(operacion1 == ""){

        operacion1= this.id;

   //sino concatenas con los siguientes     
    }else{

        operacion1= operacion1 + this.id;
    }

     

    document.getElementById("resultado").value = operacion1;

}