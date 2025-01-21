// definimos variable que contiene el numero secreto
let numeroSecreto = generarNumeroSecreto();
let intentos = 1;

// mostrar numero secreto
console.log(numeroSecreto);

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

    // el usuario acerto
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p', `Acertaste el numero en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
    } else {
        // el usuario no acerto
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p', 'El numero secreto es menor');
        } else {
            asignarTextoElemento('p', 'El numero secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return;
}

// funcion que limpia la caja
function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
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