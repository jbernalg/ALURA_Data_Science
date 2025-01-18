/*
Crea una variable "numero" y solicita un valor con prompt. Luego, 
verifica si es positivo, negativo o cero utilizando un if-else y 
muestra el mensaje correspondiente.
*/

let numero = parseInt(prompt('Ingrese un numero entero: '));

if (numero>0) {
    alert('Es positivo');
} else{ 
    if (numero<0) {
    alert('Es negativo');
    } else {
        alert('Es cero');
    } 
}