/*
Crea una función que devuelva la posición en la lista donde se encuentra un elemento 
pasado como parámetro, o -1 si no existe en la lista.
*/

function encuentraElElemento (lista, elemento) {
    return lista.indexOf(elemento);
}

listaNumeros = [1,3,2,7];
ele = 2;

console.log(encuentraElElemento(listaNumeros, ele));