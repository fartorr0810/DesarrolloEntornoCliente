/* 1. Un campo que nos permite seleccionar la fecha y hora y la muestra a continuación. La salida deberá 
tener elsiguiente formato: Hoy es martes, 28 de Febrero de 2018 y son las 14:32 horas. */
const dias = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];
const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio",
    "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
];
const fechachulia = document.getElementById("fecha").addEventListener("change", (e) => {
    const fechaoperativa = new Date(document.getElementById("fecha").value);
    document.getElementById("t").innerText = "Hoy es: " + dias[fechaoperativa.getDay()] + ", " + fechaoperativa.getDate() + " de " +
        meses[fechaoperativa.getMonth()] + " de " + fechaoperativa.getFullYear() + " y son las " +
        fechaoperativa.getHours() + ":" + fechaoperativa.getMinutes();
})