/*
Verifica si un número ingresado por el usuario es positivo o negativo. 
Muestra una alerta informativa.
*/

let numero = prompt('Ingrese un numero: ');

// probar condiciones
if (numero > 0) {
    alert(`El numero ${numero} es positivo`);
}

if (numero < 0) {
    alert(`El numero ${numero} es negativo`);
}

if (numero == 0) {
    alert(`El numero ${numero} es cero`);
}