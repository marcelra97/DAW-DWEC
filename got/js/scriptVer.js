function init() {

    let principal = document.querySelector("#contenedorFichas");

    fetch(busquedaJson)
        .then(request => request.json())
        .then(datos => {

            datos.got.forEach(personaje => {
                console.log(personaje);

                let img = document.createElement("img");
                img.setAttribute("src", personaje.imagen);


                //me creo el padre de todos los datos
                let divpadre = document.createElement("div");
                divpadre.classList.add("datos");


                //ESTO es para la cabecera nombre
                let divCabeceraNombre = document.createElement("div");
                divCabeceraNombre.classList.add("small", "cabecera");
                divCabeceraNombre.innerHTML = "Nombre";
                divpadre.appendChild(divCabeceraNombre);

                //ESTO es para la cabecera Apellidos
                let divCabeceraApellidos = document.createElement("div");
                divCabeceraApellidos.classList.add("medium", "cabecera");
                divCabeceraApellidos.innerHTML = "Apellidos";
                divpadre.appendChild(divCabeceraApellidos);


                //ESTO es para el nombre
                let divNombre = document.createElement("div");
                divNombre.classList.add("small", "dato");
                divNombre.innerHTML = personaje.nombre;
                divpadre.appendChild(divNombre);

                //ESTO es para el Apellidos
                let divApellidos = document.createElement("div");
                divApellidos.classList.add("medium", "dato");
                divApellidos.innerHTML = personaje.apellidos;
                divpadre.appendChild(divApellidos);

                //ESTO es para la cabecera nombre
                let divCabeceraPadres = document.createElement("div");
                divCabeceraPadres.classList.add("medium", "cabecera");
                divCabeceraPadres.innerHTML = "Padres";
                divpadre.appendChild(divCabeceraPadres);

                //ESTO es para la cabecera nombre
                let divCabeceraCasa = document.createElement("div");
                divCabeceraCasa.classList.add("small", "cabecera");
                divCabeceraCasa.innerHTML = "Casa";
                divpadre.appendChild(divCabeceraCasa);

                //ESTO es para la cabecera nombre
                let divPadres = document.createElement("div");
                divPadres.classList.add("medium", "dato");
                divPadres.innerHTML = personaje.padres;
                divpadre.appendChild(divPadres);

                //ESTO es para la cabecera nombre
                let divCasa = document.createElement("div");
                divCasa.classList.add("small", "dato");
                divCasa.innerHTML = personaje.familia;
                divpadre.appendChild(divCasa);

                //ESTO es para la cabecera nombre
                let divCabeceraTitulo = document.createElement("div");
                divCabeceraTitulo.classList.add("big", "cabecera");
                divCabeceraTitulo.innerHTML = "Titulo";
                divpadre.appendChild(divCabeceraTitulo);


                //ESTO es para la cabecera nombre
                let divTitulo = document.createElement("div");
                divTitulo.classList.add("big", "dato");
                divTitulo.innerHTML = personaje.titulo;
                divpadre.appendChild(divTitulo);

                principal.appendChild(img);
                principal.appendChild(divpadre);


            });


        })
}

let busquedaJson = "http://localhost/got/got.json";
window.onload = init;