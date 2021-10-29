//let boton=document.getElementById("enviar");
//boton.addEventListener("click",anadirempleado);

let enviar = document.getElementById("enviar");
enviar.addEventListener("click", anadirempleado);

function anadirempleado(e) {
    e.preventDefault();
    let pos = document.getElementById("pos").value;
    let dni = document.getElementById("dni").value;
    let nombre = document.getElementById("nombre").value;
    let apellidos = document.getElementById("apellidos").value;
    let tablaRef = document.getElementById("emplados");
    let arraylista = document.querySelectorAll("tr");
    let igual = false;
    for (let index = 0; index < arraylista.length; index++) {
        let comprobar = arraylista[index].querySelector("td:nth-child(2)");
        if (comprobar.innerHTML == dni) {
            igual = true;
            window.alert("Ese dni existe ya.")
        }
    }
    if (igual == false) {
        let nuevafila = tablaRef.insertRow(-1);
        let nuevacelda = nuevafila.insertCell(0);
        nuevacelda.textContent = pos;
        nuevacelda = nuevafila.insertCell(1);
        nuevacelda.textContent = dni;
        nuevacelda = nuevafila.insertCell(2);
        nuevacelda.textContent = nombre;
        nuevacelda = nuevafila.insertCell(3);
        nuevacelda.textContent = apellidos;
    }
}
let borrar = document.getElementById("borrar");
borrar.addEventListener("click", eliminarempleado);

function eliminarempleado(e) {
    e.preventDefault();
    let dni = document.getElementById("dni").value;
    let tablaRef = document.getElementById("emplados");
    let arraylista = document.querySelectorAll("tr");
    let igual = false;
    for (let index = 0; index < arraylista.length; index++) {
        let comprobar = arraylista[index].querySelector("td:nth-child(2)");
        if (comprobar.innerHTML == dni) {
            igual = true;
            tablaRef.deleteRow(index);
        }
    }
    if (igual == false) {
        window.alert("Dni no encontrado");
    }
}

let modificar = document.getElementById("mod");
modificar.addEventListener("click", modificarempleado);

function modificarempleado(e) {
    e.preventDefault();
    let dni = document.getElementById("dni").value;
    let tablaRef = document.getElementById("emplados");
    let arraylista = document.querySelectorAll("tr");
    let igual = false;
    for (let index = 0; index < arraylista.length; index++) {
        let comprobar = arraylista[index].querySelector("td:nth-child(2)");
        comprobar[0];
        if (comprobar.innerHTML == dni) {
            igual = true;
            let nombre = document.getElementById("nombre").value;
            let apellidos = document.getElementById("apellidos").value;
            arraylista[index].querySelector("td:nth-child(3)").textContent = nombre;
            arraylista[index].querySelector("td:nth-child(4)").textContent = apellidos;
        }
    }
    if (igual == false) {
        window.alert("Dni no encontrado");
    }
}