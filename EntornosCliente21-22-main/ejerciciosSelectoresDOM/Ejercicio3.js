document.querySelector("#anadir").addEventListener("click", colorear);

function colorear() {
    let fila = document.getElementById("fil").value;
    let col = document.getElementById("col").value;
    let tablita = document.querySelectorAll('tr')[fila - 1].querySelectorAll('td')[col - 1].classList.add("rojo");





}