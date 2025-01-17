// variables
let numeroSecreto = 5;
let numeroUsuario = 0;
let intentos = 1;
let palabraVeces = 'vez';

// ciclo
while(numeroSecreto != numeroUsuario) {
    // solicitud del numero al usuario
    numeroUsuario = prompt('Me indicas un numero entre 1 y 10 por favor:');

    // codigo de comparacion
    if (numeroSecreto == numeroUsuario) {
        // acerta el numero
        alert(`Acertaste, el numero es: ${numeroUsuario}. Lo hiciste en ${intentos} ${palabraVeces}`);
    } else {
        if (numeroUsuario > numeroSecreto) {
            // numero secreto es menor
            alert('El numero secreto es menor');
        } else{
            // numero seceto es mayor
            alert('El numero secreto es mayor');
        }
        // incementa el contador cuando no acierta
        intentos = intentos + 1;
        palabraVeces = 'veces';
    }
}
