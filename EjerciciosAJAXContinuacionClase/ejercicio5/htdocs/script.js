let provincias = document.getElementById("seleccionarprovincias");

window.addEventListener("load", (e) => {
    fetch('http://ejercicio5.loc/cargaProvinciasJSON.php')
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            return Promise.reject(response);
        })
        .then(datos => {
            let respuesta = [];

            for (const provincia in datos) {
                console.log(provincia);
                console.log(datos[provincia]);
            }
            // datos.forEach(provincia => {
            //     let codigo = provincia[0];
            //     let nombre = provincia[1];
            //     console.log(`CP: ${codigo} Nombre: ${nombre}`)
            // });
            let listadeprovincias = respuesta;
            console.log(listadeprovincias[0]);
            for (let index = 1; index < listadeprovincias.length(); index++) {
                let opcionprovincia = document.createElement("option");
                opcionprovincia.setAttribute("name", listadeprovincias[index].children[1].textContent);
                opcionprovincia.setAttribute("value", listadeprovincias[index].children[1].textContent);
                opcionprovincia.setAttribute("id", listadeprovincias[index].children[0].textContent);
                opcionprovincia.innerHTML = listadeprovincias[index].children[1].textContent;
                provincias.appendChild(opcionprovincia);
            }
        })
        .catch(console.log("Error: "));
})
let formulario = document.getElementById('formulario');
formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    let datoformulario = new FormData(document.getElementById("formulario"));
    let provinciaseleccionada = document.getElementById("seleccionarprovincias").selectedOptions;
    let eleccion = provinciaseleccionada[0].id;
    datoformulario.append("provincia", eleccion);
    let municipios = document.getElementById("seleccionarmunicipio");
    const opciones = {
        method: 'POST',
        body: datoformulario
    }
    fetch('http://ejercicio4.loc/cargaMunicipiosJSON.php', opciones)
        .then(response => {
            if (response.ok) {
                return response.text();
            }
            return Promise.reject(response);
        })
        .then(datos => {
            const parser = new DOMParser();
            const xml = parser.parseFromString(datos, "application/xml");
            let listademunicipios = xml.getElementsByTagName('municipio');
            for (let index = 0; index < listademunicipios.length; index++) {
                console.log(listademunicipios[index]);
                let opcionmunicpio = document.createElement("option");
                opcionmunicpio.setAttribute("name", listademunicipios[index].children[1].textContent);
                opcionmunicpio.setAttribute("value", listademunicipios[index].children[1].textContent);
                opcionmunicpio.setAttribute("id", listademunicipios[index].children[0].textContent);
                opcionmunicpio.innerHTML = listademunicipios[index].children[1].textContent;
                municipios.appendChild(opcionmunicpio);
            }
        })
})