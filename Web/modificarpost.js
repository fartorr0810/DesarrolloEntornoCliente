let valores = window.location.search;
const urlParams = new URLSearchParams(valores);
var idpost = urlParams.get('id');

let autorelleno = new XMLHttpRequest();
autorelleno.open('GET', 'http://localhost:3000/posts/' + idpost);
autorelleno.send();
autorelleno.addEventListener('readystatechange', function() {
    if (autorelleno.readyState === 4) {
        if (autorelleno.status === 200) {
            let listaposts = JSON.parse(autorelleno.responseText);
            document.getElementById("titulazo").setAttribute("value", listaposts.title);
            document.getElementById("mejorarcontenido").setAttribute("value", listaposts.texto);
        }
    }
});

let formulario = document.getElementById("formulario");

formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    validarformulario();
});

function validarformulario() {
    const valoresdelformu = Object.values(formulario);
    let tituloo = document.getElementById("titulazo").value;
    const valido = valoresdelformu.findIndex(value => value == false);
    let contenido = document.getElementById("mejorarcontenido");
    if (valido == -1) {
        enviar.disabled = false;
        const datosvalidados = {
            title: tituloo,
            texto: contenido.value
        }

        const actualizarpost = new XMLHttpRequest();
        actualizarpost.open('PATCH', 'http://localhost:3000/posts/' + idpost);
        actualizarpost.setRequestHeader('Content-type', 'application/json');
        actualizarpost.send(JSON.stringify(datosvalidados));
        alert("Todo hecho")
    } else {
        alert('Formulario invalido');
        e.preventDefault();
    }
}