let valores = window.location.search;
const urlParams = new URLSearchParams(valores);
var idpost = urlParams.get('id');
cargarpost();
function cargarpost(){
    const url="http://localhost:3000/posts/"+idpost;
    const opciones={
        method:"GET"
    }
    fetch(url,opciones)
    .then(listaposts=>{
        return listaposts.json();
    })
    .then(listaposts=> {
        document.getElementById("titulazo").setAttribute("value", listaposts.title);
        document.getElementById("mejorarcontenido").setAttribute("value", listaposts.texto);
    })
    .catch(error =>{
        document.write("Lo sentimos pero ocurrio un error "+error);        
    });
}
let formulario = document.getElementById("formulario");

formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    validarformulario();
});
//ARREGLEADOOOOO
function validarformulario() {
    const valoresdelformu = Object.values(formulario);
    let tituloo = document.getElementById("titulazo");
    const valido = valoresdelformu.findIndex(value => value == false);
    let contenido = document.getElementById("mejorarcontenido");
    if (valido == -1) {
        enviar.disabled = false;
        const datosvalidados = {
            title: tituloo.value,
            texto: contenido.value
        }

        const url="http://localhost:3000/posts/"+idpost;
        
        const elegiropciones={
            method:"PATCH",
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(datosvalidados)
        }
        fetch(url,elegiropciones)
        .then(resultado=>{
            return resultado.json();
        })
        .then(resultado=> {
            alert("Listo");
        })
        .catch(error =>{
            alert('Formulario invalido');
        });
    } else {
        e.preventDefault();
    }
}