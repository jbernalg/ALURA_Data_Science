// etiqueta titulo
//let titulo = document.querySelector('h1');
//titulo.innerHTML = 'Juego del numero secreto';

// etiqueta parrafo
//let parrafo = document.querySelector('p');
//parrafo.innerHTML = 'Indica un numero del 1 al 10';

// funcion que asigna un texto a un elemento HTML
function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

// funcion
function intentoDeUsuario() {
    alert('Click desde el boton');
}

// llamar la funcion dentro de javascript
// etiqueta titulo
asignarTextoElemento('h1', 'Juego Del Numero Secreto!');
// etiqueta parrafo
asignarTextoElemento('p', 'Indica un numero del 1 al 100: ');
