// etiqueta titulo
//let titulo = document.querySelector('h1');
//titulo.innerHTML = 'Juego del numero secreto';

// etiqueta parrafo
let parrafo = document.querySelector('p');
parrafo.innerHTML = 'Indica un numero del 1 al 10';

// funcion que asigna un texto a un elemento HTML
function asignarTextoElemento() {
    let titulo = document.querySelector('h1');
    titulo.innerHTML = 'Juego del Numero Secreto';
}

// funcion
function intentoDeUsuario() {
    alert('Click desde el boton');
}


/*
let numeroSecreto = generarNumeroSecreto();
let intentos = 0;

console.log(numeroSecreto);

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    if (numeroDeUsuario === numeroSecreto) {
        console.log('Acertaste el número!');
    } 
    return;
}


function generarNumeroSecreto() {
    return Math.floor(Math.random()*10)+1;

}

asignarTextoElemento('h1','Juego del número secreto!');
asignarTextoElemento('p',`Indica un número del 1 al 10`);
*/