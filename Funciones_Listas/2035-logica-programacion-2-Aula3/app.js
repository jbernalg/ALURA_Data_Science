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
    
    // mostrar el numero secreto por consola
    //console.log(numeroSecreto);

    // condicion de acierto
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p', 'Acertaste el numero!')
    } else {
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p', 'El numero secreto es menor');
        } else {
            asignarTextoElemento('p', 'El numero secreto es mayor')
        }
    }
    return;
}

// funcion para el numero aleatorio
function generarNumeroSecreto() {
    return Math.floor(Math.random()*10) + 1;
}

// llamar la funcion dentro de javascript
// etiqueta titulo
asignarTextoElemento('h1', 'Juego Del Numero Secreto');
// etiqueta parrafo
asignarTextoElemento('p', 'Indica un numero del 1 al 10: ');