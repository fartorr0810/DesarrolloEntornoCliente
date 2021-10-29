/* 3. Un campo que nos permita introducir una fecha y otro que nos permita
 introducir los días de retraso en el pago, una ves introducidos nos devolverá
 la fecha del pago. */
let botonrechulo = document.getElementById("botonmono").addEventListener("click", demorasion);
const meses = ["1", "2", "3", "4", "5", "6", "7",
    "8", "9", "10", "11", "12"
];

function demorasion() {
    let demora = document.getElementById("retraso").value;
    let fechaoperativa = new Date(document.getElementById("fecha").value);
    console.log(fechaoperativa);
    fechaoperativa.setDate(fechaoperativa.getDate() + parseInt(demora));
    console.log(fechaoperativa);
    document.getElementById("teext").innerText = fechaoperativa.getDate() + "/" + meses[fechaoperativa.getMonth()]+ "/" + fechaoperativa.getFullYear();





}