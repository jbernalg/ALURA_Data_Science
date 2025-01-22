/*
Crea una función que muestre en pantalla la tabla de multiplicar de un número dado como parámetro.
*/

function tablaMultiplicar(num) {
    band = 1;

    while (band < 11) {
        alert(`${num} x ${band} = ${num*band}`);
        band++;
    }
}

tablaMultiplicar(3);