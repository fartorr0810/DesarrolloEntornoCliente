/* Actividad 6: Crea un ejemplo que nos permita navegar por el historial con 
el objeto history,para ello deberás realizar varias 
páginas y navegar entre ellas haciendo uso de este objeto. */
irdelante = document.getElementById("delante");
if (irdelante != null) {
    irdelante.addEventListener("click", (e) => {
        history.go(1);
    });
}

atrass = document.getElementById("atras");
atrass.addEventListener("click", (e) => {
    history.back();
});