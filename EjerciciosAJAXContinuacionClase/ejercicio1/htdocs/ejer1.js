

let boton=document.getElementById("comprobar");
boton.addEventListener("click",(e)=>{
    e.preventDefault();
    let nombreusuario=document.getElementById('login');
    fetch('http://ejercicio1.loc/compruebaDisponibilidad.php')
    .then(response => {
        if (response.ok) {
            return response.text();
        }
        return Promise.reject(response);
    })
    .then(datos =>{
        if (datos=="si"){
            alert("Usuario registrado");
        }else if (datos=="no"){
            alert("Usuario no registrado");
        }

        
    })
    .catch(console.log("Error: " + response.error))

})
