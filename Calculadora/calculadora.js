var pantalla;
var numeros = "";
var signo= false;
window.onload = function() {

    pantalla = document.getElementById("resultado");
    pantalla.value = "0";
}

/*window.addEventListener('keypress', function(e) {
    var keycode = e.which || e.keyCode;
    var valueEntered = String.fromCharCode(keycode);
    ponerNumero(valueEntered);
  });*/
  
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

    var caracter;
    
    /*si es el id eliminar le meto el id al caracter porque no tengo ni idea de como poner el signo de retroceso*/ 
    if(this.id == "eliminar"){

        caracter = this.id;
    
    /*si no es eliminar pues cojes el inner text de los demas*/    
    }else{

        caracter = this.innerText;
        
    }

    /*Si es eliminar eliminas el ultimo numero */
    if(caracter == "eliminar"){

        if (pantalla.value.length > 1) {

            numeros = pantalla.value.substring(0, numeros.length - 1);
            
                pantalla.value = numeros;
                
                /*Cuando borre el signo que se ponga en false porque sino pega un bugazo*/ 
                signo=false;
           
           /*si borras el ultimo numero llama a reset para que ponga un cero*/      
        }else{

            reset();

        }

    /*Si es un igual llamas a calcular*/
    }else if(caracter == "="){
        
        calcular(numeros);

    /*Si no es ningun caracter especial pues se ponen los numeros en la panatalla*/    
    }else{
        
        /*Si la cadena esta vacia y es un numero pones el primer caracter */
        if(numeros == "" && !isNaN(caracter)){

             numeros = caracter;
    
            pantalla.value = numeros;
        
        /*Si el numero ya tiene un numero ya puedes poner signos*/
        }else if(numeros.length > 0 ){

            /*Cuando el caracter no sea un numero y no haya puesto ningun signo antes, puedes poner un signo*/ 
            if(isNaN(caracter) && !signo){

                numeros += caracter;
                
                signo = true;

            /*Cuando el caracter sea un numero, solo puedes poner un numero y ya en el siguiente te permite poner un signo*/
            }else if(!isNaN(caracter)){

                numeros += caracter;

                signo= false;
            }

            pantalla.value = numeros;

        }   
    }


    
    //si el opreacion esta vacio y si no es un simbolo le pones el primer numero
    /*
    if (numeros == "" && !isNaN(digito)) {
        
        
        numeros = digito;

        //sino concatenas con los siguientes     
    } else if(numeros.length > 0 ) {

        numeros += digito;
        
    } else if(digito == "="){

        calcular(numeros);
    }

    pantalla.value = numeros;*/

}

//resetea la calcualdora
function reset() {

    numeros = "0";
    pantalla.value = numeros;
    numeros = "";

}

/*Calcular el resultado */
function calcular(resultado){

    resultado = resultado.replace("x", "*");

    pantalla.value = eval(resultado);
    

}