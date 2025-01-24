/*
Crea una función que reciba una lista de números y devuelva una nueva lista con el cuadrado de cada número.
*/

function listaAlCuadrado (lista) {
    new_lista = [];
    
    for (let i = 0; i < lista.length; i++) {
        let cuadrado = 0;
        cuadrado = lista[i]*lista[i];
        new_lista.push(cuadrado);
    }

    return new_lista;
}

listaNumeros = [1,3,5,7];
console.log(listaAlCuadrado(listaNumeros));