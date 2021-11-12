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
                let opcionprovincia = document.createElement("option");
                opcionprovincia.setAttribute("name", datos[provincia]);
                opcionprovincia.setAttribute("value", datos[provincia]);
                opcionprovincia.setAttribute("id", provincia);
                opcionprovincia.innerHTML = datos[provincia]
                provincias.appendChild(opcionprovincia);
            }
            // datos.forEach(provincia => {
            //     let codigo = provincia[0];
            //     let nombre = provincia[1];
            //     console.log(`CP: ${codigo} Nombre: ${nombre}`)
            // });
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
    let listamunicipios = document.getElementById("seleccionarmunicipio");

    const opcionesmunicipio = {
        method: 'POST',
        body: datoformulario
    }
    fetch('http://ejercicio5.loc/cargaMunicipiosJSON.php', opcionesmunicipio)
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            return Promise.reject(response);
        })
        .then(datosmunicipio => {
            for (const municipio in datosmunicipio) {
                let opcionesmunicipio = document.createElement("option");
                opcionesmunicipio.setAttribute("name", datosmunicipio[municipio]);
                opcionesmunicipio.setAttribute("value", datosmunicipio[municipio]);
                opcionesmunicipio.setAttribute("id", datosmunicipio);
                opcionesmunicipio.innerHTML = datosmunicipio[municipio];
                listamunicipios.appendChild(opcionesmunicipio);
            }
        })
        .catch(console.log("Error: "));

})