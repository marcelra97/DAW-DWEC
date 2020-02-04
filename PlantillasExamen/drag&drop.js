//Acuerdate de poner en todos los elementos que vas a mover draggable = true, por si acaso 
// todos los elementos que quieras mover deben tener un id que los identifique, sino no funcionara
//los eventos son: dragover, dragstart, drop

function allowDrop(ev) {

    ev.preventDefault();
}

function drag(ev) {

    ev.dataTransfer.setData("text", ev.target.id);

}

function drop(ev) {

    ev.preventDefault();

    let data = ev.dataTransfer.getData("text");
    console.log(data);


    //Si no funciona esto, haay que añadirle a los divs donde lo voy a dejar el elemento un clase dragable
    if (!ev.target.draggable) {
        ev.target.appendChild(document.getElementById(data));

    }
}