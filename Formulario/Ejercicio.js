let formulario = document.getElementById("formulario")
let enviar = document.getElementById("enviar");

const nombre = document.getElementById("nombree");
const dni = document.getElementById("dnii");
const fecha = document.getElementById("fechaa");
const genero = document.querySelector("input[name='hijos']:checked");
const email = document.getElementById("emaill");
const telefono = document.getElementById("telf");
const casilla = document.getElementById("casillass");

let xpregdni = /^\d{8}[a-zA-Z]$/;

let formulariovalido = {
    nombree: false,
    dnii: false,
    fechaa: false,
    genero: false,
    emaill: false,
    telf: false,
    casillass: false
}
formulario.addEventListener("submit", (e) => {
    e.preventDefault;
    enviar.disabled=true;
    validarformulario();
});

//Este if es retrasao
nombree.addEventListener("change", (e) => {
    if (e.target.value.trim().length < 0 || e.target.value.trim().length > 30) {
        alert("Nombre invalido");
    } else {
        formulariovalido.nombree = true;
    }
});
dnii.addEventListener("change", (e) => {
    if (xpregdni.test(e.target.value)) {
        formulariovalido.dnii = true;
    } else {
        alert("DNI INCORRECTO");
    }
});

fechaa.addEventListener("change", (e) => {
    arrayfecha = e.target.value.split("-");
    let fechaformu = arrayfecha[0];
    let hoy = new Date();
    let anohoy = hoy.getFullYear();
    if ((anohoy - fechaformu) > 18) {
        formulariovalido.fechaa = true;
    } else {
        alert("Debes ser mayor a 18 agnios");
    }
});

genero.addEventListener("change", (e) => {
    if (e.target.value == "s") {
        formulariovalido.genero = true;
    } else if (e.target.value == "n") {
        formulariovalido.genero = true;
    }
});

casillass.addEventListener("change", (e) => {
    formulariovalido.casillass = e.target.checked;
})

function validarformulario() {
    const valoresdelformu = Object.values(formulariovalido);
    const valido = valoresdelformu.findIndex(value => value == false);
    if (valido == -1) {
        enviar.disabled=false;
        formulario.submit();

    } else {
        alert('Formulario invalido');
        e.preventDefault();
    }
}