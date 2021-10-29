let contador = 0;
let enviar = document.getElementById("enviar");
//let guardado = [];

let tabla = document.getElementById("tablita");
window.addEventListener("load", (e) => {
    for (let index = 0; index < localStorage.length; index++) {
        contador += 1;
        let id = localStorage.key(index);
        let tarea = JSON.parse(localStorage.getItem(id));
        let nuevafila = tabla.insertRow(-1);
        let nuevacelda = nuevafila.insertCell(0);
        nuevacelda.textContent = tarea.texto;
        nuevacelda = nuevafila.insertCell(1);
        let borrar = document.createElement('input');
        borrar.innerText = 'borrar';
        borrar.setAttribute("type", "button");
        borrar.setAttribute("name", "Borrar");
        borrar.setAttribute("value", "Borrar");
        borrar.setAttribute("id", id);
        nuevacelda = nuevacelda.append(borrar);
        nuevacelda = nuevafila.insertCell(2);
        let chekado = document.createElement('input');
        chekado.setAttribute("type", "checkbox");
        chekado.setAttribute("name", "");
        chekado.setAttribute("id", id);
        if (tarea.completado) {
            chekado.setAttribute("checked", "checked")
        }
        nuevacelda = nuevacelda.append(chekado);
    }
});

enviar.addEventListener("click", (e) => {
    let textito = document.getElementById("nombretarea").value;
    contador += 1;
    const tarea = {
        texto: textito,
        id: contador,
        completado: false
    }
    localStorage.setItem(contador, JSON.stringify(tarea));
    location.reload();
});

tabla.addEventListener("click", (e) => {
    if (e.target.checked) {
        let item = JSON.parse(localStorage.getItem(e.target.id));
        item.completado = true;
        localStorage.setItem(e.target.id, JSON.stringify(item));

    }
    if (!e.target.checked) {
        let item = JSON.parse(localStorage.getItem(e.target.id));
        item.completado = false;
        localStorage.setItem(e.target.id, JSON.stringify(item));

    }
    if (e.target.name == "Borrar") {
        localStorage.removeItem(e.target.id);
        location.reload();
    }
});