/*
Crea una función que reciba dos listas de números del mismo tamaño y devuelva una nueva lista 
con la suma de los elementos uno a uno.
*/

function sumaElementosListas (lista1, lista2) {
    let n = lista1.length;
    let m = lista2.length;
    lista = [];

    if (n != m) {
        return 'Las listas son de diferente tamano.';
    } else {
        for (let i = 0; i < n; i++) {
            let temp = 0;
            temp = lista1[i] + lista2[i];
            lista.push(temp);
        }
        return lista;
    }
}

listaNumeros1 = [2,4,6,8];
listaNumeros2 = [1,3,5,7];

console.log(sumaElementosListas(listaNumeros1, listaNumeros2));