/* Actividad 2: Realiza algún ejemplo sencillo de acceso y modificación de los diferentes
atributos del objeto document. Crea un documento html que contenga algún formulario, 
imágenes, anclas y enlaces y comprueba el contenido de los arrays que contienen información 
sobre dichos elementos en el objeto document.
 */
//Puedes indicarle el id directamente o decirle la posicion.
//Meterlo en una variable para poder ser modificado despues.
//Casi igual que un selector 
let formulario2 = document.forms["dos"];
//Los tachados significa metodos obsoletos
let listaanclas = document.anchors;
let listaplets = document.applets;
let listaembebidos = document.embeds;
let arrayimgs = document.images;
let links = document.links;
//Con esto puedes saber la ultima modificacion
console.log(document.lastModified);
//Con esto puedes saber desde que url se accedio.
console.log(document.referrer);
//Con esto cambias el titulo del documento
document.title("Cambio el titulo del documento porque si");
//Con esto llevas al usuario a otra pagina.
document.URL("www.google.com");