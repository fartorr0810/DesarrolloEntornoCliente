let formulario = document.getElementById("formulario");
let contador = localStorage.length;
consultarLastLogin();
formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    validarformulario();
});

function consultarLastLogin() {
    let fechamayor = 0;
    let info = document.createElement("p");
    for (let index = 1; index <= localStorage.length; index++) {
        let usuario = JSON.parse(localStorage.getItem(index));
        if (usuario.fechaalta > fechamayor) {
            fechamayor = usuario.fechaalta;
            info.innerHTML = "El usuario mas joven es:" + usuario.loginvalido + " Su nombre es" +
                usuario.nombrevalido;
        }
    }
    document.body.appendChild(info);
}



let nombre = document.getElementById("nombre");
let apellidos = document.getElementById("apellidos");
let login = document.getElementById("login");
let password = document.getElementById("password");
let fechanacimiento = document.getElementById("fechanacimiento");

nombre.value = "";
apellidos.value = "";
login.value = "";
password.value = "";
fechanacimiento.value = "";


let formulariovalido = {
    nombrevalido: false,
    apellidosvalido: false,
    passwordvalido: false,
    loginvalido: false,
    fechanacimientovalido: false,
    edadvalida: false
}

nombre.addEventListener("change", (e) => {
    if (e.target.value.length > 0) {
        fetch("https://intranetjacaranda.es/pruebaJS/arrayNombres.php?nombre=" + e.target.value)
            .then(response => {
                if (response.ok) {
                    return response.text();
                }
                return Promise.reject(response);
            })
            .then(datos => {
                let sugerencias = [] = datos.split(",");
                if (sugerencias.length > 0) {
                    let listasugerencias = document.createElement("p");
                    for (let index = 0; index < sugerencias.length; index++) {
                        listasugerencias.innerHTML = sugerencias[index];
                    }
                    document.body.append(listasugerencias);
                }
            })
            .catch(console.log("Error: "));
        formulariovalido.nombrevalido = true;
    } else {
        alert("No puedes con nombre vacio");
    }
});

const regexapellidos = /^[a-zA-Z]+$/;
apellidos.addEventListener("change", (e) => {
    if (!regexapellidos.test(e.target.value)) {
        formulariovalido.apellidosvalido = true;
    } else {
        e.target.value = "";
    }
});
//8 Caracteres
const regexpassword = /(?=.{8,})/;
password.addEventListener("change", (e) => {
    if (regexpassword.test(e.target.value)) {
        formulariovalido.passwordvalido = true;
    } else {
        e.target.value = "";
        alert("No tienes los requisitos:8 Caracteres");
    }
});

login.addEventListener("change", (e) => {
    if (!e.target.value.length > 0) {
        alert("Login vacio");
    } else {
        opciones = {
            method: 'POST'
        }
        fetch("https://intranetjacaranda.es/pruebaJS/checkLogin.php?password=" + e.target.value, opciones)
            .then(response => {
                if (response.ok) {
                    return response.text();
                }
                return Promise.reject(response);
            })
            .then(datos => {
                const parser = new DOMParser();
                const xml = parser.parseFromString(datos, "application/xml");
                let respuesta = xml.getElementsByTagName('disponible');
                if (respuesta[0].childNodes[0].nodeValue == "no") {
                    let alternativas = xml.getElementsByTagName('login');
                    console.log(alternativas);
                    let listaalternativas = document.getElementById("lista");
                    for (let index = 1; index < alternativas.length; index++) {
                        console.log(alternativas[index].textContent);
                        let nodolista = document.createElement("li");
                        let nombrelista = document.createTextNode(e.target.value + alternativas[index].textContent);
                        nodolista.appendChild(nombrelista);
                        listaalternativas.appendChild(nodolista);
                    }
                    document.body.appendChild(listaalternativas);

                } else {
                    formulariovalido.loginvalido = true;
                }


            })
            .catch(console.log("Error: "));
    }
});
let edad;
fechanacimiento.addEventListener("change", (e) => {
    console.log(e.target.value);
    let fecha = [] = e.target.value.split("-");
    const fechaactual = new Date();
    let anoactual = fechaactual.getFullYear();
    if (anoactual - fecha[0] >= 18) {
        formulariovalido.fechanacimientovalido = true;
        formulariovalido.edadvalida = true;
        edad = anoactual - fecha[0];
    } else {
        alert("No es mayor a 18 anos");
    }
});

function validarformulario() {
    const valoresformulario = Object.values(formulariovalido);
    const valido = valoresformulario.findIndex(value => value == false);
    if (valido == -1) {
        const fechaactual = new Date();
        let anoactual = fechaactual.getFullYear();
        const datosvalidos = {
            nombrevalido: nombre.value,
            apellidosvalido: apellidos.value,
            passwordvalido: password.value,
            loginvalido: login.value,
            fechanacimientovalido: fechanacimiento.value,
            edadvalida: edad,
            fechaalta: Date.now()
        }
        let datosvalidosString = JSON.stringify(datosvalidos);
        contador = contador + 1;
        localStorage.setItem(contador, datosvalidosString);
    }
}

let botonborrardatos = document.getElementById("eliminaciondatos");

botonborrardatos.addEventListener("click", (e) => {
    localStorage.clear();
});

let botonconsultar = document.getElementById("consultardatos");

botonconsultar.addEventListener("click", (e) => {
    let valorAConsultar = document.getElementById("consultardatosinput").value;
    let encontrado = false;
    for (let index = 1; index <= localStorage.length; index++) {
        let usuario = JSON.parse(localStorage.getItem(index));
        console.log(usuario);
        if (usuario.loginvalido == valorAConsultar) {
            encontrado = true;
            console.log("Encontrado");
            let tabla = document.getElementById("datosimportanteusuario");
            let nuevafila = tabla.insertRow(-1);
            let nuevacelda = nuevafila.insertCell(0);
            nuevacelda.textContent = usuario.nombrevalido;
            nuevacelda = nuevafila.insertCell(1);
            nuevacelda.textContent = usuario.apellidosvalido;
            nuevacelda = nuevafila.insertCell(2);
            nuevacelda.textContent = usuario.passwordvalido;
            nuevacelda = nuevafila.insertCell(3);
            nuevacelda.textContent = usuario.loginvalido;
            nuevacelda = nuevafila.insertCell(4);
            nuevacelda.textContent = usuario.fechanacimientovalido;
        } else {
            alert("Usuario no encontrado");
        }
    }


});