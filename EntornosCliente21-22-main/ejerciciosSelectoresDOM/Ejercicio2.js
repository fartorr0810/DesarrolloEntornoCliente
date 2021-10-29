document.querySelector("#enlace").addEventListener("click", MostrarTexto);
//Sencillo.
function MostrarTexto() {
    let mostrartexto = document.querySelector('#adicional');
    mostrartexto.setAttribute('class', 'visible');
    let eliminarboton = document.querySelector('#enlace');
    eliminarboton.setAttribute('class', 'oculto');
}

//Hacer con classList