//Pegar nav al principio + animacion
function mostrar() {
    if(window.scrollY > window.innerHeight*0.15){
        document.querySelector("nav").classList.add("enScroll");
    }
    else{
        document.querySelector("nav").classList.remove("enScroll");
    }

    if(window.scrollY > window.innerHeight*0.75){
        document.querySelector(".Tarjeta1").classList.add("aparecerDerecha");
        document.querySelector(".Tarjeta2").classList.add("aparecerIzquierda");
        document.querySelector(".imagen1").classList.add("desplazarDerecha");
    }
}


