// variables
let numeroSecreto = 5;
let numeroUsuario = 0;
let intentos = 1;
//let palabraVeces = 'vez';
let maximosIntentos = 3;

// ciclo
while(numeroSecreto != numeroUsuario) {
    // solicitud del numero al usuario
    numeroUsuario = prompt('Me indicas un numero entre 1 y 10 por favor:');

    // codigo de comparacion
    if (numeroSecreto == numeroUsuario) {
        // acerta el numero
        alert(`Acertaste, el numero es: ${numeroUsuario}. Lo hiciste en ${intentos} ${intentos == 1 ? 'vez':'veces'}`);
    } else {
        if (numeroUsuario > numeroSecreto) {
            // numero secreto es menor
            alert('El numero secreto es menor');
        } else{
            // numero seceto es mayor
            alert('El numero secreto es mayor');
        }
        // incrementa el contador cuando no acierta
        // intentos = intentos + 1;
        
        // forma abreviada del contador
        // intentos += 1;
        intentos++;
        //palabraVeces = 'veces';

        // condicion de parada
        if (intentos > maximosIntentos) {
            alert(`Llegaste al numero maximo de ${maximosIntentos} intentos!`);
            break;
        }
    }
}
















/*
//Variables
let numeroSecreto = Math.floor(Math.random()*10)+1;
let numeroUsuario = 0;
let intentos = 1;
//let palabraVeces = 'vez';
let maximosIntentos = 3;


while (numeroUsuario != numeroSecreto) {
    numeroUsuario = parseInt(prompt("Me indicas un número entre 1 y 10 por favor:"));

    console.log(typeof(numeroUsuario));
    if (numeroUsuario == numeroSecreto) {
        //Acertamos, fue verdadera la condición
        alert(`Acertaste, el número es: ${numeroUsuario}. Lo hiciste en ${intentos} ${intentos == 1 ? 'vez' : 'veces' }`);
    } else {
        if (numeroUsuario > numeroSecreto) {
            alert('El número secreto es menor');
        } else {
            alert('El número secreto es mayor');
        }
        //Incrementamos el contador cuando no acierta
        //intentos = intentos + 1;
        //intentos += 1;
        intentos++;

        //palabraVeces = 'veces';
        if (intentos > maximosIntentos) {
            alert(`Llegaste al número máximo de ${maximosIntentos} intentos`);
            break;
        }
        //La condición no se cumplió
        //alert('Lo siento, no acertaste el número');
    }
}
*/