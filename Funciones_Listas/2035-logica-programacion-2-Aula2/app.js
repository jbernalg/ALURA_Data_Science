// definimos variable que contiene el numero secreto
let numeroSecreto = generarNumeroSecreto();

// mostrar numero aleatorio en consola
console.log(numeroSecreto);

// funcion que asigna un texto a un elemento HTML
function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

// funcion que muestra un mensaje al dar clic a un boton
function intentoDeUsuario() {
    alert('Click desde el boton');
    return;
}

// funcion para el numero aleatorio
function generarNumeroSecreto() {
    return Math.floor(Math.random()*10) + 1;
}

// llamar la funcion dentro de javascript
// etiqueta titulo
asignarTextoElemento('h1', 'Juego Del Numero Secreto!');
// etiqueta parrafo
asignarTextoElemento('p', 'Indica un numero del 1 al 10: ');
