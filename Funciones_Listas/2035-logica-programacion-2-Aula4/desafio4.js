/*
Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion.
*/

function mostrarElementosLista (lista) {
    for(let i = 0; i < lista.length; i++) {
        alert(lista[i]);
    }
}

lenguajesDeProgramacion = ['Javascript', 'C', 'C++', 'Kotlin', 'Python'];
console.log(lenguajesDeProgramacion);

lenguajesDeProgramacion.push('Java', 'Ruby', 'Goland');
console.log(lenguajesDeProgramacion);

mostrarElementosLista(lenguajesDeProgramacion);