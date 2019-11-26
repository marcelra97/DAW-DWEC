function init() {

    video = document.querySelector("video");



    document.querySelector("#play").addEventListener('click', play);
    document.querySelector("#silenciar").addEventListener('click', muted);
    document.querySelector("#rebobinar").addEventListener('click', rebobinar);
    document.querySelector("#retroceder").addEventListener('click', retroceder);
    document.querySelector("#avanzar").addEventListener('click', avanzar);
    document.querySelector("#menos").addEventListener('click', volumenDown);
    document.querySelector("#mas").addEventListener('click', volumenUp);
    crearBanner();


    let listavideos = document.querySelectorAll(".videos");

    listavideos.forEach(videos => videos.addEventListener("click", cambiarVideo));

}

function cambiarVideo(e) {

    let videoClickado = e.target;

    let srcSeleccionado = videoClickado.getAttribute("src");
    let srcActual = video.getAttribute("src");

    video.setAttribute("src", srcSeleccionado);

    videoClickado.setAttribute("src", srcActual);

    video.load();
    video.play();

    init();

}

function crearBanner() {

    let nodoVideo = document.querySelector("#multimedia");
    let banner = document.createElement("div");

    banner.classList.add("banner");
    nodoVideo.appendChild(banner);

    apareceBanner();
}

function apareceBanner() {

    let divBanner = document.querySelector('.banner');
    let p = document.createElement('p');
    p.innerText = "Aqui tienes una rica publicidad de gratis amejo. Disfrutala!";
    divBanner.appendChild(p);


    setTimeout(eliminarBanner, 10000);

}

function eliminarBanner() {

    let padreBanner = document.querySelector("#multimedia");
    let hijo = document.querySelector(".banner");
    padreBanner.removeChild(hijo);
}


function play() {

    if (!pause) {

        video.play();
        pause = true;

    } else {
        rebobinar
        video.pause();
        pause = false;
    }

}

function muted() {

    if (!video.muted) {

        video.muted = true;

    } else {

        video.muted = false;
    }

}

function rebobinar() {


    video.load();
    video.play();

}

function retroceder() {

    video.currentTime -= 10;
}


function avanzar() {

    video.currentTime += 10;
}

function volumenDown() {

    console.log("menos");
    video.volume -= 0.1;
}

function volumenUp() {

    video.volume += 0.1;
}

let video;
let pause = false;

window.onload = init;