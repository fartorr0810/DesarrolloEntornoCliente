const url="http://localhost:3000/posts/";
const opciones={
    method:"GET"
}
fetch(url,opciones)
.then(resultado=>{
    return resultado.json();
})
.then(resultado=> {
    cargarlistaposts(resultado);
})
.catch(error =>{
    document.write("Lo sentimos pero ocurrio un error "+error);
    
});

let tabla = document.getElementById("tablita");
function cargarlistaposts(listaposts){
    for (let index = 0; index < listaposts.length; index++) {
        let nuevafila = tabla.insertRow(-1);
        let nuevacelda = nuevafila.insertCell(0);
        nuevacelda.textContent = listaposts[index].title;
        nuevacelda = nuevafila.insertCell(1);
        nuevacelda.textContent = listaposts[index].author;
        nuevacelda = nuevafila.insertCell(2);

        let buttonver = document.createElement('input');
        buttonver.setAttribute("type", "button")
        buttonver.setAttribute("name", "Ver");
        buttonver.setAttribute("href", "post.html?id=" + listaposts[index].id);
        buttonver.setAttribute("value", "Ver");
        buttonver.setAttribute("id", listaposts[index].id);

        let borrar = document.createElement('input');
        borrar.innerText = 'borrar';
        borrar.setAttribute("type", "button");
        borrar.setAttribute("name", "Borrar");
        borrar.setAttribute("value", "Borrar");
        borrar.setAttribute("id", listaposts[index].id);

        let modificar = document.createElement('input');
        modificar.innerText = 'Modificar';
        modificar.setAttribute("type", "button");
        modificar.setAttribute("name", "modificar");
        modificar.setAttribute("value", "modificar");
        modificar.setAttribute("id", listaposts[index].id);
        modificar.setAttribute("href", "modificarpost.html?id=" + listaposts[index].id);

        nuevacelda = nuevacelda.append(borrar);
        let otroboton = nuevafila.insertCell(2);
        otroboton = otroboton.append(buttonver);
        let botonmodificar = nuevafila.insertCell(3);
        botonmodificar = botonmodificar.append(modificar);
        }
        for (let index = 0; index < listaposts.length; index++) {
            let opcionesvalidas = document.getElementById("selection");
            let anadiropcion = document.createElement('option');
            anadiropcion.setAttribute("value", listaposts[index].title);
            anadiropcion.setAttribute("name", listaposts[index].title);
            anadiropcion.textContent = listaposts[index].title;
            opcionesvalidas.append(anadiropcion);
        }
}

tabla.addEventListener("click", (e) => {
    if(e.target.name=="Borrar"){
    const url="http://localhost:3000/posts/"+e.target.id;
    const opciones={
        method:"DELETE"
    }
    fetch(url,opciones)
    .then(resultado=> resultado.json)
    .then(resultado=> {
        alert("Post eliminado");
        location.reload();
    })
    .catch(error =>{
        document.write("Lo sentimos pero ocurrio un error "+error);
    });
    } else if (e.target.name == "Ver") {
        window.location.href = "post.html?id=" + e.target.id;
    } else if (e.target.name == "modificar") {
        window.location.href = "modificarpost.html?id=" + e.target.id;
    }
})