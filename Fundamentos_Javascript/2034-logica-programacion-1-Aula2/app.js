//Variables
let numeroSecreto = 8;
let numeroUsuario = prompt("Me indicas un número entre 1 y 10 por favor:");

console.log(numeroUsuario);

/*
Este código realiza
la comparación
*/
if (numeroUsuario == numeroSecreto) {
    // la condicion se cumple
    //                              template string
    alert(`Acertaste, el numero es: ${numeroUsuario}`);
} else {
    // la condicion no se cumple
    alert('Lo siento, no acertaste el numero')
}