document.getElementById("anadicion").addEventListener("click", anadiirr);
document.getElementById("eliminacion").addEventListener("click", eliminar);

function anadir() {
    let an = document.getElementById("anadicion").value;
    let lista = document.getElementsByTagName("ul")[an];
    //mira el segundo 
    let elementonew = lista.children[pos];
    elementonew.textContent = an;
}

function anadiirr() {
    let pos = document.getElementById("pos").value;
    let product = document.getElementById("product").value;
    let listadelacompra = document.getElementsByTagName("li")[pos - 1];
    listadelacompra.appendChild[product];
    if (listadelacompra.lenght > pos) {
        listadelacompra.innerHTML = "<li>" + product + "</li>";
    } else {
        listadelacompra.textContent = product;

    }
    //
    //let producto = listadelacompra.children[pos];
    //let posicionnueva.textContent = pos;
    //producto.textContent = product;
}
//document.listadelacompra.appendChild(product);

function eliminar() {
    let del = document.getElementById("equip").value;

    let tabla = document.getElementsByTagName("tr")[posicion];
    //mira el segundo 
    let equiponuevo = tabla.children[1];
    let puntosnuevo = tabla.children[2];

    equiponuevo.textContent = equipo;
    puntosnuevo.textContent = puntos;
}