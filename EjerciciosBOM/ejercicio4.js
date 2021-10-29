/* Actividad 4: A partir de la página proporcionada en las transparencias
 https://developer.mozilla.org/es/docs/Web/API/Navigator indica y prueba algunos métodos
  útiles del objeto navigator. */
let listaplugins = navigator.plugins;
for (let index = 0; index < listaplugins.length; index++) {
    console.log(listaplugins[index].name);
}
console.log(navigator.appName);
console.log(navigator.language);
console.log(navigator.permissions);