/*
Crea una función que calcule el promedio de los elementos en una lista de números.
*/

function promedioLista (lista){
    let sum = 0;

    for(i=0; i<lista.length; i++) {
        sum += lista[i];
    }

    return sum/lista.length;
}

numeros = [1,2,3];
console.log(promedioLista(numeros));