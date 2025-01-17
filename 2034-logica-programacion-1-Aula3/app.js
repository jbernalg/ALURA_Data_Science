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






/*Variables
let numeroSecreto = 4;
let numeroUsuario = 0;
let intentos = 1;
let palabraVeces = 'vez';

while (numeroUsuario != numeroSecreto) {
    numeroUsuario = prompt("Me indicas un número entre 1 y 10 por favor:");

    console.log(numeroUsuario);
    if (numeroUsuario == numeroSecreto) {
        //Acertamos, fue verdadera la condición
        alert(`Acertaste, el número es: ${numeroUsuario}. Lo hiciste en ${intentos} ${palabraVeces}`);
    } else {
        if (numeroUsuario > numeroSecreto) {
            alert('El número secreto es menor');
        } else {
            alert('El número secreto es mayor');
        }
        //Incrementamos el contador cuando no acierta
        intentos = intentos + 1;
        palabraVeces = 'veces';
        //La condición no se cumplió
        //alert('Lo siento, no acertaste el número');
    }
}
*/