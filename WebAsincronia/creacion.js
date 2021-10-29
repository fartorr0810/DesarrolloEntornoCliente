let formulario = document.getElementById("formularioregistro");
let enviar = document.getElementById("enviar");

formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    enviar.disabled = true;
    validarformulario();
});

const nombre = document.getElementById("nombre");
const telefono = document.getElementById("telf");
const dni = document.getElementById("dni");
const fechanacimiento = document.getElementById("fc");

let xpregdni = /^\d{8}[a-zA-Z]$/;
let xpregtelf = /^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/;

let formulariovalido = {
    nombree: false,
    telefonoo: false,
    dnii: false,
    fechanacimientoo: false
}


nombre.addEventListener("change", (e) => {
    if (e.target.value.trim().length < 0 || e.target.value.trim().length > 30) {
        alert("Nombre invalido");
    } else {
        formulariovalido.nombree = true;
    }
});
telefono.addEventListener("change", (e) => {
    if (xpregtelf.test(e.target.value)) {
        formulariovalido.telefonoo = true;
    } else {
        alert("PON EL TELEFONO BIEEEEEN");
    }
});
dni.addEventListener("change", (e) => {
    if (xpregdni.test(e.target.value)) {
        formulariovalido.dnii = true;
    } else {
        alert("DNI INCORRECTO");
    }
});

fechanacimiento.addEventListener("change", (e) => {
    fechaactualisima = new Date();
    arrayfecha = e.target.value.split("-");
    if ((fechaactualisima.getFullYear() - arrayfecha[0] > 18)) {
        formulariovalido.fechanacimientoo = true;
    } else {
        alert("Debes ser mayor a 18 agnios");
    }
});

function validarformulario() {
    const valoresdelformu = Object.values(formulariovalido);
    const valido = valoresdelformu.findIndex(value => value == false);
    if (valido == -1) {
        enviar.disabled = false;
        formulario.submit();
        const datosvalidados = {
            nombrevalido: nombre.value,
            telefonovalido: telefono.value,
            dnivalido: dni.value,
            fechavalida: fechanacimiento.value
        }
        const peticion = new XMLHttpRequest();
        peticion.open('POST', 'http://localhost:3000/users');
        peticion.setRequestHeader('Content-type', 'application/json');
        peticion.send(JSON.stringify(datosvalidados));
        alert("Todo hecho")
    } else {
        alert('Formulario invalido');
        e.preventDefault();
    }
}