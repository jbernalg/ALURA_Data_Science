/*
Crea un programa de cuenta regresiva. Pide un número y cuenta desde 0 
hasta ese número utilizando un bucle 'while' en la consola del navegador.
*/

let num = parseInt(prompt('Ingrese un numero entero: '));
cont = 1;

if(num > 0) {
    while(cont <= num) {
        console.log(cont);
        cont++;
    }
}
