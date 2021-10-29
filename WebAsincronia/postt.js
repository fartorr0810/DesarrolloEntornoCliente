let valores = window.location.search;
const urlParams = new URLSearchParams(valores);
var idpost = urlParams.get('id');

let tabladecomentarios = document.getElementById("tablacomentarios");

let peticion = new XMLHttpRequest();
peticion.open('GET', 'http://localhost:3000/posts/' + idpost);
peticion.send();
peticion.addEventListener('readystatechange', function() {
    if (peticion.readyState === 4) {
        if (peticion.status === 200) {
            let post = JSON.parse(peticion.responseText);
            let titulazo = document.getElementById("titulito").textContent = post.title;
            let contenido = document.getElementById("contenido").textContent = post.texto;
        }
    }

});

let peticioncomentarios = new XMLHttpRequest();
let urlcompleta = 'http://localhost:3000/posts/' + idpost + '/comments'
peticioncomentarios.open('GET', urlcompleta);
peticioncomentarios.send();
peticioncomentarios.addEventListener('readystatechange', function() {
    if (peticioncomentarios.readyState === 4) {
        if (peticioncomentarios.status === 200) {
            let listacomentarios = JSON.parse(peticioncomentarios.responseText);
            for (let index = 0; index < listacomentarios.length; index++) {
                let nuevafila = tabladecomentarios.insertRow(-1);
                let nuevacelda = nuevafila.insertCell(0);
                nuevacelda.textContent = listacomentarios[index].body;
                nuevacelda = nuevafila.insertCell(1);
                nuevacelda.textContent = listacomentarios[index].nombrevalido;
                nuevacelda = nuevafila.insertCell(2);
            }
        }
    }
});

let listarusuarios = new XMLHttpRequest();
listarusuarios.open('GET', 'http://localhost:3000/users/');
listarusuarios.send();
listarusuarios.addEventListener('readystatechange', function() {
    if (listarusuarios.readyState === 4) {
        if (listarusuarios.status === 200) {
            let usuarioss = JSON.parse(listarusuarios.responseText);
            for (let index = 0; index < usuarioss.length; index++) {
                let opcionesvalidas = document.getElementById("selection");
                let anadiropcion = document.createElement('option');
                anadiropcion.setAttribute("value", usuarioss[index].nombrevalido);
                anadiropcion.setAttribute("name", usuarioss[index].id);
                anadiropcion.textContent = usuarioss[index].nombrevalido;
                opcionesvalidas.append(anadiropcion);
            }
        }
    }
});

let formulario = document.getElementById("formulariocoments");

formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    enviar.disabled = true;
    let contenido = document.getElementById("comentario").value;
    validarformulario();
});

function validarformulario() {
    const valoresdelformu = Object.values(formulario);
    const valido = valoresdelformu.findIndex(value => value == false);
    let opcionesvalidas = document.getElementById("selection").value;
    if (valido == -1) {
        enviar.disabled = false;
        const datosvalidados = {
            body: valoresdelformu[0].value,
            idpost: idpost,
            nombrevalido: opcionesvalidas
        }
        const peticiondecomentario = new XMLHttpRequest();
        peticiondecomentario.open('POST', 'http://localhost:3000/posts/' + idpost + '/comments');
        peticiondecomentario.setRequestHeader('Content-type', 'application/json');
        peticiondecomentario.send(JSON.stringify(datosvalidados));
        alert("Todo hecho")
    } else {
        alert('Formulario invalido');
        e.preventDefault();
    }
}