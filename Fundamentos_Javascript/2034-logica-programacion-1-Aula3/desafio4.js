/*
Crea un programa de cuenta regresiva. Pide un número y cuenta desde el numero 
hasta el cero utilizando un bucle 'while' en la consola del navegador.
*/

num = parseInt(prompt('Ingrese un numero entero: '));
cont = 0;

if (num >= 0) {
    while (num >= 0) {
        console.log(num);
        num--;
    }
}