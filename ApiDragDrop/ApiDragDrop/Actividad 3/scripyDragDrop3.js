const pendingTasks = document.getElementById('pending-tasks')
const finishedTasks = document.getElementById('finished-tasks')
const doingTasks = document.getElementById('doing-tasks')

let boton = document.getElementById("enviar")
let tareaca = document.getElementById("tareaca")
let contador = 0;
for (let index = 0; index < localStorage.length; index++) {
    contador += 1;
    let id = localStorage.key(index);
    let tarea = JSON.parse(localStorage.getItem(id));
    if (tarea.estado == "pendiente") {
        let texto = document.createTextNode(tarea.texto);
        let divtarea = document.createElement('div');
        divtarea.setAttribute("id", tarea.id);
        divtarea.setAttribute("class", "task");
        divtarea.setAttribute("draggable", "true");
        divtarea.appendChild(texto);
        pendingTasks.appendChild(divtarea);
    } else if (tarea.estado == "Haciendose") {
        let texto = document.createTextNode(tarea.texto);
        let divtarea = document.createElement('div');
        divtarea.setAttribute("id", tarea.id);
        divtarea.setAttribute("class", "task");
        divtarea.setAttribute("draggable", "true");
        divtarea.appendChild(texto);
        doingTasks.appendChild(divtarea);
    } else if (tarea.estado == "Terminado") {
        let texto = document.createTextNode(tarea.texto);
        let divtarea = document.createElement('div');
        divtarea.setAttribute("id", tarea.id);
        divtarea.setAttribute("class", "task");
        divtarea.setAttribute("draggable", "true");
        divtarea.appendChild(texto);
        finishedTasks.appendChild(divtarea);
    }

}

boton.addEventListener("click", (e) => {
    contador = contador + 1;
    const tarea = {
        texto: tareaca.value,
        id: contador,
        estado: "pendiente"
    }
    localStorage.setItem(tarea.id, JSON.stringify(tarea));
    location.reload();
})



//dataTransfer
//setData: Establece la información que queremos compartir
//getData: Establece la información que queremos obtener

pendingTasks.addEventListener('dragover', (e) => {
    e.preventDefault()
})
pendingTasks.addEventListener('drag', (e) => {
    e.target.classList.add('active')
})
pendingTasks.addEventListener('dragend', (e) => {
    e.target.classList.remove('active')
})
pendingTasks.addEventListener('dragstart', (e) => {
    console.log(e.dataTransfer)
    e.target.classList.add('active')

    e.dataTransfer.setData('text/plain', e.target.id)
    console.log(e.dataTransfer.getData)
})


pendingTasks.addEventListener('drop', (e) => {
    e.preventDefault()
    const element = document.getElementById(e.dataTransfer.getData('text'))
    element.classList.remove('active')
    const padre = element.parentNode.id

    switch (padre) {
        case 'pending-tasks':
            pendingTasks.appendChild(pendingTasks.removeChild(element));
            break;
        case 'doing-tasks':
            pendingTasks.appendChild(doingTasks.removeChild(element));
            break;
    }

    let tarea = JSON.parse(localStorage.getItem(element.id));
    tarea.estado = "pendiente";
    localStorage.setItem(tarea.id, JSON.stringify(tarea));
    element.classList.remove('active')
    pendingTasks.appendChild(element);

})


doingTasks.addEventListener('dragstart', (e) => {
    console.log(e.dataTransfer)
    e.dataTransfer.setData('text/plain', e.target.id)
    console.log(e.dataTransfer.getData)
})

doingTasks.addEventListener('drag', (e) => {
    e.target.classList.add('active')
})

doingTasks.addEventListener('dragend', (e) => {
    e.target.classList.remove('active')
})

doingTasks.addEventListener('dragover', (e) => {
    e.preventDefault()
})

doingTasks.addEventListener('drop', (e) => {
    e.preventDefault()
    const element = document.getElementById(e.dataTransfer.getData('text'))
    let tarea = JSON.parse(localStorage.getItem(element.id));
    tarea.estado = "Haciendose";
    localStorage.setItem(tarea.id, JSON.stringify(tarea));
    element.classList.remove('active')
    doingTasks.appendChild(element);
})


//OBLIGATORIO, SI NO, NO FUNCIONA
finishedTasks.addEventListener('dragover', (e) => {
    e.preventDefault()
})
finishedTasks.addEventListener('drag', (e) => {
    e.target.classList.add('active')
})
finishedTasks.addEventListener('dragend', (e) => {
    e.target.classList.remove('active')
})
finishedTasks.addEventListener('dragstart', (e) => {
    console.log(e.dataTransfer)
    e.target.classList.add('active')

    e.dataTransfer.setData('text/plain', e.target.id)
    console.log(e.dataTransfer.getData)
})

finishedTasks.addEventListener('drop', (e) => {
    e.preventDefault()
    const element = document.getElementById(e.dataTransfer.getData('text'))
    element.classList.remove('active')
    const padre = element.parentNode.id

    switch (padre) {
        case 'pending-tasks':
            console.log('pendingTasks');
            finishedTasks.appendChild(pendingTasks.removeChild(element));
            break;
        case 'doing-tasks':
            console.log('doingTasks');
            finishedTasks.appendChild(doingTasks.removeChild(element));
            break;
    }
    let tarea = JSON.parse(localStorage.getItem(element.id));
    tarea.estado = "Terminado";
    localStorage.setItem(tarea.id, JSON.stringify(tarea));
    element.classList.remove('active')
    finishedTasks.appendChild(element);

})