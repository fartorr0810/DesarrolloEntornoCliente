/* 2. A continuación dos campos para introducir un mes y un año e imprima su
 calendario. No hace falta esmerarse en la presentación del calendario, el
  calendario simplificado puede ser del tipo: */

const botonaco = document.getElementById("botonsito").addEventListener("click", calendario);
const dias = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];
const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio",
    "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
];

function calendario() {
    let mes = document.getElementById("mess").value;
    let agno = document.getElementById("agnoo").value
    if (mes > 0 && mes < 13) {
        fechita = new Date(agno, mes - 1, 1);
        console.log(fechita.toDateString());
        auxmes = fechita.getMonth();
        while (fechita.getMonth() == auxmes) {
            document.getElementById("textt").innerText += dias[fechita.getDay()] + "" + fechita.getDate() + " " + meses[fechita.getMonth()];
            console.log(fechita.toDateString());
            fechita.setDate(fechita.getDate() + 1) + " agno: " + fechita.getFullYear();
        }

    }
}