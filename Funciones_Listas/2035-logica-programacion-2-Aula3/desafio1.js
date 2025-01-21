/*
Crea una función que calcule el índice de masa corporal (IMC) de una 
persona a partir de su altura en metros y peso en kilogramos, 
que se recibirán como parámetros.
*/

function imc(altura, peso) {
    return peso/(altura*altura);
}

console.log(imc(1.72, 90));