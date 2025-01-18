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

/*
Pide al usuario que ingrese su edad con prompt. Con base en la edad ingresada, utiliza un if para verificar si la persona es mayor o menor de edad y muestra un mensaje apropiado en la consola.

Crea una variable "numero" y solicita un valor con prompt. Luego, verifica si es positivo, negativo o cero utilizando un if-else y muestra el mensaje correspondiente.

Utiliza un bucle while para mostrar los números del 1 al 10 en la consola.

Crea una variable "nota" y asígnale un valor numérico. Utiliza un if-else para determinar si la nota es mayor o igual a 7 y muestra "Aprobado" o "Reprobado" en la consola.

Utiliza Math.random para generar cualquier número aleatorio y muestra ese número en la consola.

Utiliza Math.random para generar un número entero entre 1 y 10 y muestra ese número en la consola.

Utiliza Math.random para generar un número entero entre 1 y 1000 y muestra ese número en la consola.
*/





