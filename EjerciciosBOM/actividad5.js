let abriir = document.getElementById("abrir");
abriir.addEventListener("click", abrirventanita);

let mover = document.getElementById("mover");
mover.addEventListener("click", moverventanita);

let redimensiionar = document.getElementById("Redimenzionar");
redimensiionar.addEventListener("click", redimensionar);


function abrirventanita() {
    ventana = window.open('//rutaaa', '', 'width=200, height=100');
    ventana.document.write("<p>Arriba España</p>");
    ventana.resizeBy(screen.availWidth, screen.availHeight);

}

function moverventanita() {
    ventana.moveBy(250, 250);
    ventana.focus();
}

function redimensionar() {
    ventana.resizeBy(screen.availWidth, screen.availHeight);
}


/* moveBy(x, y) desplaza la posición de la ventana x píxel hacia la derecha y y píxel hacia abajo. 
Se permiten desplazamientos negativos para mover la ventana hacia la izquierda o hacia arriba.
moveTo(x, y) desplaza la ventana del navegador hasta que la esquina superior izquierda se encuentre 
en la posición (x, y) de la pantalla del usuario. Se permiten desplazamientos negativos, 
aunque ello suponga que parte de la ventana no se visualiza en la pantalla.
resizeBy(x, y) redimensiona la ventana del navegador de forma que su nueva anchura sea
 igual a (anchura_anterior + x) y su nueva altura sea igual a (altura_anterior + y). 
 Se pueden emplear valores negativos para reducir la anchura y/o altura de la ventana.
resizeTo(x, y) redimensiona la ventana del navegador hasta que su anchura sea igual a x 
y su altura sea igual a y. No se permiten valores negativos.
 */