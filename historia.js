//Pegar nav al principio + animacion
function aparecer() {
    if(window.scrollY > window.innerHeight*0.15){
        document.querySelector("nav").classList.add("enScroll");
    }
    else{
        document.querySelector("nav").classList.remove("enScroll");
    }

    if(window.scrollY > window.innerHeight*0.75){
        document.querySelector(".imagen1").classList.add("desplazarDerecha");
        document.querySelector(".texto1").classList.add("rotarIzquierda");


    }
    if(window.scrollY > window.innerHeight*1.25){
        document.querySelector(".imagen2").classList.add("desplazarIzquierda");
        document.querySelector(".texto2").classList.add("rotarDerecha");
    }
    if(window.scrollY > window.innerHeight*1.75){
        document.querySelector(".imagen3").classList.add("desplazarDerecha");
        document.querySelector(".texto3").classList.add("rotarIzquierda");
    }
};
//boton play y pausa del video
let video = document.querySelector("video");
let botonPlay = document.getElementById("botonPlay");
let botonPausa = document.getElementById("botonPausa");
let mostrarDuracion = document.getElementById("duracionVideo");

botonPlay.addEventListener("click", ()=>{
    video.play();
    setInterval(()=>{
        mostrarDuracion.textContent = duracionVideo(video);
    },1000);
});
botonPausa.addEventListener("click", ()=>{
    video.pause();
});

function duracionVideo(video){
    let duracion = video.currentTime;
        let minutos = Math.floor(duracion / 60);
        let segundos = Math.floor(duracion % 60);

        if (minutos < 10) minutos = "0" + minutos;
        if (segundos < 10) segundos = "0" + segundos;
        
        return `${minutos}:${segundos}`;

}


