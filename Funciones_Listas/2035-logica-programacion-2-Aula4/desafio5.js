/*
Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion en orden inverso.
*/

function mostrarElementosListaOrdenInverso (lista) {
    for(let i = lista.length-1; i >= 0; i--) {
        alert(lista[i]);
    }
}

lenguajesDeProgramacion = ['Javascript', 'C', 'C++', 'Kotlin', 'Python'];
console.log(lenguajesDeProgramacion);

lenguajesDeProgramacion.push('Java', 'Ruby', 'Goland');
console.log(lenguajesDeProgramacion);

mostrarElementosListaOrdenInverso(lenguajesDeProgramacion);