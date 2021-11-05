let provincias = document.getElementById("seleccionarprovincias");
window.addEventListener("load", (e) => {
    fetch('http://ejercicio4.loc/cargaProvinciasXML.php')
        .then(response => {
            if (response.ok) {
                return response.text();
            }
            return Promise.reject(response);
        })
        .then(datos => {
            const parser = new DOMParser();
            const xml = parser.parseFromString(datos, "application/xml");
            let listadeprovincias = xml.getElementsByTagName('provincia');
            for (let index = 1; index < listadeprovincias.length; index++) {
                console.log(listadeprovincias[index].children[1].textContent);
                let opcionprovincia = document.createElement("option");
                opcionprovincia.setAttribute("name", listadeprovincias[index].children[1].textContent);
                opcionprovincia.setAttribute("value", listadeprovincias[index].children[1].textContent);
                opcionprovincia.setAttribute("id", listadeprovincias[index].children[0].textContent);
                opcionprovincia.innerHTML = listadeprovincias[index].children[1].textContent;
                provincias.appendChild(opcionprovincia);
            }
        })
        .catch(console.log("Error: "))
})