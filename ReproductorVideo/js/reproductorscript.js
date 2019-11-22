function init() {

    video = document.querySelector("video");

    let nodoVideo = document.querySelector("#multimedia");
    let banner = document.createElement("div");

    banner.classList.add("banner");
    nodoVideo.appendChild(banner);

    document.querySelector("#play").addEventListener('click', play);
    document.querySelector("#silenciar").addEventListener('click', muted);
    document.querySelector("#rebobinar").addEventListener('click', rebobinar);
    document.querySelector("#retroceder").addEventListener('click', retroceder);
    document.querySelector("#avanzar").addEventListener('click', avanzar);
    document.querySelector("#menos").addEventListener('click', volumenDown);
    document.querySelector("#mas").addEventListener('click', volumenUp);
    apareceBanner();

}

function apareceBanner() {

    let divBanner = document.querySelector('.banner');
    let p = document.createElement('p');
    let img = document.createElement('div');
    p.innerText = "Aqui tienes una rica publicidad de gratis amejo. Disfrutala!";
    divBanner.appendChild(p);
    divBanner.appendChild(img);



    //setTimeout(eliminarBanner, 10000);

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