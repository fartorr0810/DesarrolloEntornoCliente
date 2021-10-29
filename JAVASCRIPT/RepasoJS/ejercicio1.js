//Aqui esta el listener. (creo que va con init())
document.getElementById("bopbop").addEventListener("click", remplazito);
//una funcion en la que se remplaza. en la tabla obtengo el sitio directo buscando
//el tr la misma posicion.
function remplazito() {
    let posicion = document.getElementById("pos").value;
    let equipo = document.getElementById("equip").value;
    let puntos = document.getElementById("puntos").value;
    let tabla = document.getElementsByTagName("tr")[posicion];
    let equiponuevo = tabla.children[1];
    let puntosnuevo = tabla.children[2];
    equiponuevo.textContent = equipo;
    puntosnuevo.textContent = puntos;
}