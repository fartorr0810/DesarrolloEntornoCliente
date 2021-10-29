//Ejercicio 1
let cajita = document.querySelector('#box')
cajita.addEventListener("mouseenter", verde);
cajita.addEventListener("mouseleave", rojo);
cajita.addEventListener("click", alerta);
cajita.addEventListener("mouseup", soltado);
let textaco = document.querySelector('#textaco')
textaco.addEventListener("keydown", tecladowapo);
textaco.addEventListener("keyup", tecladofeo);

function verde() {
    cajita.classList.replace('box', 'verde');
}

function rojo() {
    cajita.classList.replace('verde', 'box');
}

function alerta() {
    console.log("Has pulsado la caja");
}

function soltado() {
    console.log("Has soltado la caja");
}

function tecladowapo() {
    console.log("Pulsaste una tecla");
}

function tecladofeo() {
    console.log("Soltaste una tecla");
}
//Ejercicio 2
document.addEventListener("keyup", pulsandotecla);

function pulsandotecla(p) {
    console.log(p.key);
}

//Ejercicio 3
let ejer = document.getElementById(ejercicio3);
ejer = document.addEventListener("keypress", enviacion);

function enviacion(event) {
    console.log(event.key);

}