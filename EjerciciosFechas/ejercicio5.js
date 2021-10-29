/* 4. Un cronómetro con el siguiente formato: Hoy es 30-9-2019 y son las 21:4:23 horas. */
document.getElementById("start").addEventListener("click", iniciarReloj);
document.getElementById("start").addEventListener("click", arrancarAlarma);

function iniciarReloj() {
    let tiempo = new Date()
    let dia = tiempo.getDate();
    let mes = tiempo.getMonth() + 1;
    let year = tiempo.getFullYear();
    let hora = tiempo.getHours();
    let min = tiempo.getMinutes();
    let seg = tiempo.getSeconds();
    document.getElementById("textito").innerText = dia + "-" +
        mes + "-" + year + " y son las " + hora + ":" + min + ":" + seg;
    setTimeout("iniciarReloj()", 1000);
}

function arrancarAlarma() {
    let alarma = new Date(document.getElementById("alarmita"));
    if (alarma.getTime() == tiempo.getTime()) {
        //audioplay
        let eleccion = prompt("Adelantar pulse A o detener , pulse D");
        if (eleccion == 'A') {
            alarma.setMinutes(alarma.getMinutes + 2);
            arrancarAlarma();
        }
        if (eleccion == 'D') {
            alert("Finnn");
        }

    }

}