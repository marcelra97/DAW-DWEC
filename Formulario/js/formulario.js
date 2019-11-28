    //Array para comprobar que todo el formulario esta escrito correctamente
    var comprobarFormulario = new Array;


    function comprobarNombre(nombre) {

        var comprobarNombre = /^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$/;

        // se comprueba que el nombre sea valido
        if (comprobarNombre.test(nombre.value)) {
            //no es error
            comprobarFormulario[0] = true;


        } else {

            //es error
            comprobarFormulario[0] = false;
            nombre.value = "Error";
        }

        console.log(comprobarFormulario);


    }

    function comprobarApellidos(apellidos) {

        var comprobarApellidos = /^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$/;

        if (comprobarApellidos.test(apellidos.value)) {
            //no es error
            comprobarFormulario[1] = true;

        } else {
            // es error
            comprobarFormulario[1] = false;
            apellidos.value = "Error";
        }
        console.log(comprobarFormulario);

    }

    function comprobarEmail(email) {

        var comprobarEmail = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

        if (comprobarEmail.test(email.value)) {

            //no es erro
            comprobarFormulario[2] = true;

        } else {

            //es error
            comprobarFormulario[2] = false;
            email.value = "Error";

        }
        console.log(comprobarFormulario);

    }

    function comprobarDNI(dni) {

        var comprobarDNI = /^[0-9]{8}[TRWAGMYFPDXBNJZSQVHLCKE]$/i;

        if (comprobarDNI.test(dni.value)) {

            //no es error
            comprobarFormulario[3] = true;

        } else {

            //es error
            comprobarFormulario[3] = false;
            dni.value = "Error";
        }
        console.log(comprobarFormulario);


    }

    function comprobarPassword(password) {

        //minimo 8 caracteres
        //maximo 15 caracteres
        //una letra mayuscula
        //una letra minuscula
        //al menos un digito
        //no hay espacios en blanco
        //al menos un caracter especial

        var comprobarPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/;

        if (comprobarPassword.test(password.value)) {

            //no es error
            comprobarFormulario[4] = true;

        } else {

            //es error 
            comprobarFormulario[4] = false;
            password.value = "Error";

        }

        console.log(comprobarFormulario);

    }

    //comprobar que la password es igual
    function passwordCorrecta(passwordRepetida, password) {


        if (password == passwordRepetida.value) {

            comprobarFormulario[5] = true;

        } else {

            comprobarFormulario[5] = false;
            passwordRepetida.value = "Error";
        }

        console.log(comprobarFormulario);

    }

    function comprobarIp(ip) {

        var comprobarIp = /^([0-9]{1,3}).([0-9]{1,3}).([0-9]{1,3}).([0-9]{1,3})$/;

        if (comprobarIp.test(ip.value)) {

            //no es error
            comprobarFormulario[6] = true;

        } else {

            //es error
            comprobarFormulario[6] = false;
            ip.value = "Error";

        }
        console.log(comprobarFormulario);
    }

    //validar el formulario al darle enviarswor
    function validarFormulario() {

        var comprobarCorrecto = 0;
        var i = 0;

        while (comprobarFormulario[i] == true && i <= 7) {

            i++;
            comprobarCorrecto++;

        }

        console.log(comprobarCorrecto);

        if (comprobarCorrecto == 7) {

            alert("Se han introducido todos los datos correctamente");

        } else {

            if (comprobarFormulario[5] == false) {

                alert("La contraseña no es igual. Recuerda que en la contraseña tienes que poner 8 caracteres como minimo. 15 como maximo. Una letra mayuscula. Una letra minuscula. Al menos un numero. Sin espacios y con un caracter especial ");

            } else {

                alert("Error !!!");

            }




        }



    }