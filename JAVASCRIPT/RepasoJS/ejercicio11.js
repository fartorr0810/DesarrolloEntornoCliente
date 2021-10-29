function remplazo(posicion, equipo, puntos) {
    posicion = document.getElementById("pos").value;
    equipo = document.getElementById("equip").value;
    puntos = document.getElementById("puntos").value;
    tabla = document.getElementById("tabla");
    viejonodo=tabla.getElementsByTagName("td")[posicion];
    nuevonodo=tabla.document.createElement("tr");
    nuevonodo.appendChild(document.createTextNode(posicion));
    tabla.replaceChild(viejonodo,nuevonodo);
}
//No furula nin the skay