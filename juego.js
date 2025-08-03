//Pegar nav al principio + animacion
function mostrar() {
    if(window.scrollY > window.innerHeight*0.15){
        document.querySelector("nav").classList.add("enScroll");
    }
    else{
        document.querySelector("nav").classList.remove("enScroll");
    }
}

let cajas = document.querySelectorAll(".caja");
let imagenes = document.querySelectorAll(".imagenes");
let botonReiniciar = document.querySelector("#botonReiniciar");

let caja1Solucionada = false;
let caja2Solucionada = false;
let caja3Solucionada = false;
let caja1NoSolucionada = false;
let caja2NoSolucionada = false;
let caja3NoSolucionada = false;


imagenes.forEach((imagen)=>{
    imagen.addEventListener("dragstart",(event)=>{
    event.dataTransfer.setData("Text", event.target.outerHTML);
});
});

cajas.forEach((caja)=>{
    caja.addEventListener("dragover",(event)=>{
        event.preventDefault();
    })
    caja.addEventListener("drop",(event)=>{
        console.log("Se solto una imagen");
        let infoRecibida = event.dataTransfer.getData("Text");
        let resultado = infoRecibida.split(" ");
        let idElemento = resultado[2].split('"')[1];
        //Dejar de mostrar la imagen cuando se pone en la caja
        let nodoImg = document.querySelector("#"+idElemento);
        nodoImg.classList.remove("imagenEnCaja");
        nodoImg.style.display = "none";
        caja.innerHTML = infoRecibida;

    //Verificacion de los resultados del Puzzle

    verificarResultados(caja, idElemento);
    })
})

let contadorDerrota = 0
let contadorVictoria = 0;
let imagenesPosicionadas = 0;
//Verificar resultados del juego
function verificarResultados(caja, idImagen){

    if(caja.id == "caja1" & idImagen == "imagen1"){
        console.log("Imagen 1 posicionada correctamente");
        caja1Solucionada = true;
        contadorVictoria++;
        console.log("VICTORIA:"+contadorVictoria);
    } 
    else if(caja.id == "caja1" & idImagen != "imagen1"){
        caja1NoSolucionada = true;
    }
    if(caja.id == "caja2" & idImagen == "imagen2"){
        console.log("Imagen 2 posicionada correctamente");
        caja2Solucionada = true;
        contadorVictoria++;
        console.log("VICTORIA:"+contadorVictoria);
    }
    else if(caja.id == "caja2" & idImagen != "imagen2"){
        caja2NoSolucionada = true;
    }

    if(caja.id == "caja3" & idImagen == "imagen3"){
        console.log("Imagen 3 posicionada correctamente");
        caja3Solucionada = true;
        contadorVictoria++;
        console.log("VICTORIA:"+contadorVictoria);
    }
    else if(caja.id == "caja3" & idImagen != "imagen3"){
        caja3NoSolucionada = true;
    }

    if(caja1Solucionada == true && caja2Solucionada == true && caja3Solucionada == true && contadorVictoria == 3){

        console.log("PUZZLE SOLUCIONADO CORRECTAMENTE");
        document.querySelector(".cajas").classList.add("cajasResueltas");
        let textoVictoria = document.getElementById("encabezadoResultado");
        textoVictoria.classList.add("victoria");
        textoVictoria.innerHTML = "Felicitaciones!! <br> Puzzle correctamente resuelto";
        botonReiniciar.style.display = "block";
    } 
    else if(caja1NoSolucionada == true || caja2NoSolucionada == true || caja3NoSolucionada == true){
        console.log("una de las imagenes esta mal posicionada");
        contadorDerrota++;
        imagenesPosicionadas++;
        console.log("DERROTA:"+contadorDerrota);
        console.log("Imagenes posicionadas:"+ imagenesPosicionadas);
        if(contadorDerrota >= 2 && contadorVictoria <=1 && imagenesPosicionadas == 3){
            console.log("PERDISTE");
            document.querySelector(".cajas").classList.add("cajasNoResueltas");
            let textoVictoria = document.getElementById("encabezadoResultado");
            textoVictoria.classList.add("derrota");
            textoVictoria.innerHTML = "Lo sentimos ,Puzzle no resuelto. <br> Prueba otra vez";
            botonReiniciar.style.display = "block";
        }
    }
}

//Reiniciar puzzle

botonReiniciar.addEventListener("click", () => {
    caja1Solucionada = false;
    caja2Solucionada = false;
    caja3Solucionada = false;

    contadorDerrota = 0;
    contadorVictoria = 0;
    imagenesPosicionadas = 0;

    cajas.forEach(caja => {
        caja.innerHTML = "<p>Arrastre y suelte la imágen aquí</p>";
    });

    imagenes.forEach(imagen => {
        imagen.style.display = "inline-block";
    });

    let textoVictoria = document.getElementById("encabezadoResultado");
    textoVictoria.classList.remove("victoria");
    textoVictoria.innerHTML = "Armemos el rompecabezas y veamos que imagen es...";

    textoVictoria.classList.remove("derrota")
    textoVictoria.classList.remove("victoria")

    document.querySelector(".cajas").classList.remove("cajasResueltas");
    document.querySelector(".cajas").classList.remove("cajasNoResueltas");

    
});