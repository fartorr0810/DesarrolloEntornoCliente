//Ejercicio1.1
let num = document.querySelectorAll("a").length;
console.log(num);
document.write("Número de enlaces de la página: " + num + "<br>");
//Ejercicio1.2
let numa = document.querySelector("a:nth-last-child(2)");
document.write("Dirección a la que enlaza el penúltimo enlace" + numa + "<br>");

//Ejercicio 1.3
let numeroenlaces = document.querySelectorAll('a[href="http://prueba/"]').length;
document.write("Numero de enlaces que enlazan a http://prueba" + numeroenlaces + "<br>");

//Ejercicio 1.4
let numeroenlancesparrafo = document.querySelectorAll('p:nth-child(3) a').length;
document.write("Número de enlaces del tercer párrafo" + numeroenlancesparrafo);