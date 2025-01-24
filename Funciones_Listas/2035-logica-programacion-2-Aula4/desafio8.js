/*
Crea una función que devuelva la suma de todos los elementos en una lista.
*/

function sumaElementos (lista) {
    sum = 0;
    for (let i = 0; i < lista.length; i++) {
        sum += lista[i];
    }

    return sum;
}

listaNumeros = [3,1,5,2,4];
console.log(sumaElementos(listaNumeros));