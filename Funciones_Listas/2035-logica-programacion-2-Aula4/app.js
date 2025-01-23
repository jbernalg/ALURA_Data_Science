// definimos variable que contiene el numero secreto
let numeroSecreto = 0;
let intentos = 0;
// definimos una lista para almacenar los numeros sorteados
let listaNumerosSorteados = [];
let numeroMaximo = 10;


// funcion que asigna un texto a un elemento HTML
function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

// funcion que captura y verifica la eleccion del usuario
function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);
    
    // el usuario acerto
    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p', `Acertaste el numero en ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
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
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);

    //si ya sorteamos todos los numeros
    if (listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p', 'Ya se sortearon todos los numeros posibles');
    } else {
        // si el numero generado esta incluido en la lista  
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        }else{ // si el numero no esta incluido en la lista
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

// Funcion que reinicia el juego con las cond iniciales
function condicionesIniciales() {
    // etiqueta titulo
    asignarTextoElemento('h1', 'Juego Del Numero Secreto');
    // etiqueta parrafo
    asignarTextoElemento('p', `Indica un numero del 1 al ${numeroMaximo}: `);
    // asignar numero secreto
    numeroSecreto = generarNumeroSecreto();
    // asignar numero de intentos
    intentos = 1;
}

// funcion para reiniciar el juego
function reiniciarJuego() {
    // limpiar caja
    limpiarCaja();
    // indicar mensaje de intervalo de numero
    // generar numero aleatorio
    // inicializar el numero de intentos
    condicionesIniciales();
    // deshabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}

condicionesIniciales();