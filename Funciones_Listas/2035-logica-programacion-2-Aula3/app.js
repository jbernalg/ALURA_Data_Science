// definimos variable que contiene el numero secreto
let numeroSecreto = generarNumeroSecreto();


// funcion que asigna un texto a un elemento HTML
function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

// funcion que captura y verifica la eleccion del usuario
function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    // tipo de dato de numeroUsuario
    console.log(typeof(numeroDeUsuario));
    // mostrar numero aleatorio en consola
    console.log(numeroSecreto);
    // tipo de dato de numeroUsuario
    console.log(typeof(numeroSecreto));
    console.log(numeroDeUsuario);
    console.log(numeroDeUsuario === numeroSecreto);
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