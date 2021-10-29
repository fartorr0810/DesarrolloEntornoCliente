/* Actividad 3: Realiza un ejemplo donde obtengas toda la información 
posible del objeto location de forma ordenada. Utiliza los métodos del objeto 
location para modificar la url, comprobando la diferencia entre assign y replace,
 haz uso también del método reload. */
const asignar = document.getElementById("asignacion").addEventListener("click", (e) => {
    document.location.assign("https://www.google.es");
});
const remplazar = document.getElementById("remplazacion").addEventListener("click", (e) => {
    document.location.replace("https://www.bing.es");
});
const recargar = document.getElementById("recargacion").addEventListener("click", (e) => {
    document.location.reload();
});