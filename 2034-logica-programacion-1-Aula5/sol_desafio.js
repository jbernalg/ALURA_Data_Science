// variables
let numeroSecreto = Math.floor(Math.random()*10)+1;
let numeroUsuario = 0;
let intentos = 1;
//let palabraVeces = 'vez';
let maximosIntentos = 3;

// mostrar el numero secreto por consola
//console.log(numeroSecreto)

// ciclo
while(numeroSecreto != numeroUsuario) {
    // solicitud del numero al usuario. Convertir en entero
    numeroUsuario = parseInt(prompt('Me indicas un numero entre 1 y 10 por favor:'));
    // mostrar por consola el tipo de dato de numeroUsuario
    console.log(typeof(numeroUsuario));

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