let nombreusuario = document.getElementById('login');
let boton = document.getElementById("comprobar");
boton.addEventListener("click", (e) => {
    e.preventDefault();
    let datoformulario = new FormData(document.getElementById("formulario"));
    datoformulario.append("login", nombreusuario.value);
    const opciones = {
        method: 'POST',
        body: datoformulario
    }

    //anadir FormData y peticion tipo post. body:formdata en la peticion.
    fetch('https://intranetjacaranda.es/Ejercicios/Ejercicio2/servidor/compruebaDisponibilidadXML.php', opciones)
        .then(response => {
            if (response.ok) {
                return response.text();
            }
            return Promise.reject(response);
        })
        .then(datos => {
            const parser = new DOMParser();
            const xml = parser.parseFromString(datos, "application/xml");
            let frases = xml.getElementsByTagName('disponible');
            console.log(frases[0].textContent);
            if (frases[0].textContent == "si") {
                alert("Sin problemas");
            } else if (frases[0].textContent == "no") {
                nombresdisponibles = xml.getElementsByTagName('alternativas');
                let alternacion = nombresdisponibles[0].getElementsByTagName('login');
                let listatotal = document.getElementById("lista");
                listatotal.setAttribute("id", "lista");
                for (let index = 1; index < alternacion.length; index++) {
                    console.log(alternacion[index].textContent);
                    let nodolista = document.createElement("li");
                    let nombrelista = document.createTextNode(alternacion[index].textContent);
                    nodolista.setAttribute("name", alternacion[index].textContent);
                    nodolista.appendChild(nombrelista);
                    listatotal.appendChild(nodolista);
                }
                document.body.appendChild(listatotal);
            }
        })
        .catch(console.log("Error: "))
})

let eventlista = document.getElementById("lista");

eventlista.addEventListener("click", (e) => {
    nombreusuario.value = e.target.textContent;
});