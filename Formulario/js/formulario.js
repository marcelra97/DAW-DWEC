    //Array para comprobar que todo el formulario esta escrito correctamente
    var comprobarFormulario = new Array;
    let nombre;
    let apellidos;
    let email;
    let dni;
    let password;

    function init() {

        document.querySelector("[name=nombre]").addEventListener('blur', comprobarNombre);
        document.querySelector("[name=apellidos]").addEventListener('blur', comprobarApellidos);
        document.querySelector("[name=email]").addEventListener('blur', comprobarEmail);
        document.querySelector("[name=dni]").addEventListener('blur', comprobarDNI);
        document.querySelector("[name=password]").addEventListener('blur', comprobarPassword);
        document.querySelector("[name=passwordRepetida]").addEventListener('blur', passwordCorrecta);
        document.querySelector("[name=ip]").addEventListener('blur', comprobarIp);
        document.querySelector("button").addEventListener('click', validarFormulario);


    }

    function comprobarNombre() {

        // var comprobarNombre = /^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$/;

        // // se comprueba que el this sea valido
        // if (comprobarNombre.test(this.value)) {
        //     //no es error
        //     comprobarFormulario[0] = true;


        // } else {

        //     //es error
        //     comprobarFormulario[0] = false;
        //     this.value = "Error";
        // }

        // console.log(comprobarFormulario);
        nombre = this.value;


    }

    function comprobarApellidos() {

        // var comprobarApellidos = /^([A-ZÁÉÍÓÚ]{1}[a-zñáéíóú]+[\s]*)+$/;

        // if (comprobarApellidos.test(this.value)) {
        //     //no es error
        //     comprobarFormulario[1] = true;

        // } else {
        //     // es error
        //     comprobarFormulario[1] = false;
        //     this.value = "Error";
        // }
        // console.log(comprobarFormulario);
        apellidos = this.value;
    }

    function comprobarEmail() {

        // var comprobarEmail = /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;

        // if (comprobarEmail.test(this.value)) {

        //     //no es erro
        //     comprobarFormulario[2] = true;

        // } else {

        //     //es error
        //     comprobarFormulario[2] = false;
        //     this.value = "Error";

        // }
        // console.log(comprobarFormulario);
        email = this.value;

    }

    function comprobarDNI() {

        // var comprobarDNI = /^[0-9]{8}[TRWAGMYFPDXBNJZSQVHLCKE]$/i;

        // if (comprobarDNI.test(this.value)) {

        //     //no es error
        //     comprobarFormulario[3] = true;

        // } else {

        //     //es error
        //     comprobarFormulario[3] = false;
        //     this.value = "Error";
        // }
        // console.log(comprobarFormulario);
        dni = this.value;


    }

    function comprobarPassword() {

        //minimo 8 caracteres
        //maximo 15 caracteres
        //una letra mayuscula
        //una letra minuscula
        //al menos un digito
        //no hay espacios en blanco
        //al menos un caracter especial
        password = this.value;
        // var comprobarPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,15}$/;

        // if (comprobarPassword.test(this.value)) {

        //     //no es error
        //     comprobarFormulario[4] = true;

        // } else {

        //     //es error 
        //     comprobarFormulario[4] = false;
        //     this.value = "Error";

        // }

        // console.log(comprobarFormulario);

    }

    //comprobar que la password es igual
    function passwordCorrecta() {


        // if (password == this.value) {

        //     comprobarFormulario[5] = true;

        // } else {

        //     comprobarFormulario[5] = false;
        //     this.value = "Error";
        // }

        // console.log(comprobarFormulario);

    }

    function comprobarIp() {

        // var comprobarIp = /^([0-9]{1,3}).([0-9]{1,3}).([0-9]{1,3}).([0-9]{1,3})$/;

        // if (comprobarIp.test(this.value)) {

        //     //no es error
        //     comprobarFormulario[6] = true;

        // } else {

        //     //es error
        //     comprobarFormulario[6] = false;
        //     this.value = "Error";

        // }
        // console.log(comprobarFormulario);
    }

    //validar el formulario al darle enviarswor
    function validarFormulario() {

        var comprobarCorrecto = 0;
        var i = 0;

        while (comprobarFormulario[i] == true && i <= 7) {

            i++;
            comprobarCorrecto++;

        }

        if (comprobarCorrecto == 7) {

            consultar();

        } else {

            if (comprobarFormulario[5] == false) {

                alert("La contraseña no es igual. Recuerda que en la contraseña tienes que poner 8 caracteres como minimo. 15 como maximo. Una letra mayuscula. Una letra minuscula. Al menos un numero. Sin espacios y con un caracter especial ");

            } else {

                alert("Error !!!");

            }

        }

    }

    function consultar() {

        let fomrulario = new FormData();

        formulario = rellenarFormulario(formulario);

    }

    function rellenarFormulario(formulario) {

        formulario.append('nombre', nombre);
        formulario.append('apellidos', apellidos);
        formulario.append('dni', dni);
        formulario.append('password', password);
        formulario.append('nombre', nombre);
        formulario.append('nombre', nombre);
        formulario.append('nombre', nombre);
        formulario.append('nombre', nombre);

    }

    window.onload = init;