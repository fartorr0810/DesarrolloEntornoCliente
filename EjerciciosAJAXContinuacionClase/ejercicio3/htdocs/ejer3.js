let nombreusuario=document.getElementById('login');
let boton=document.getElementById("comprobar");
const opciones = {
    method:"GET"
}
boton.addEventListener("click",(e)=>{
    e.preventDefault();
    fetch('http://ejercicio3.loc/compruebaDisponibilidadJSON.php',opciones)
    .then(response => {
        if (response.ok) {
            return response.json();
        }
    })
    .then(datos =>{
        let respuesta=datos;
        console.log(respuesta.disponible);
        if (respuesta.disponible=="si"){
            alert("Sin problemas");
        }
        else if (respuesta.disponible=="no"){
            let listatotal = document.getElementById("lista");
            listatotal.setAttribute("id","lista");
            for (let index = 0; index < respuesta.alternativas.length; index++) {
                console.log(respuesta.alternativas[index]);
                let nodolista = document.createElement("li");
                let nombrelista=document.createTextNode(respuesta.alternativas[index]);
                nodolista.setAttribute("name",respuesta.alternativas[index]);
                nodolista.appendChild(nombrelista);
                listatotal.appendChild(nodolista);
            }
            document.body.appendChild(listatotal);
        }
    })
    .catch(console.log("Error: "))
})

let eventlista=document.getElementById("lista");

eventlista.addEventListener("click",(e)=>{
    nombreusuario.value=e.target.textContent;
});
