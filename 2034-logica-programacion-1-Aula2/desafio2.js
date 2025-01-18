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

/*
Crea un mensaje que informe al usuario sobre el saldo de su cuenta, utilizando un template string para incluir el valor del saldo.

Pide al usuario que ingrese su nombre mediante un prompt. Luego, muestra una alerta de bienvenida usando ese nombre.
*/