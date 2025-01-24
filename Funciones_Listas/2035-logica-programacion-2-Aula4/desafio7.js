/*
Crea una función que muestre en la consola el número más grande y el número más pequeño en una lista.
*/

function numeroMayorMenor (lista) {

    if (lista.length < 2) {
        console.log('La lista no tiene suficientes numeros para definir el mayor y el menor.')
    } else {
        let n = lista.length; // tamano de la lista
        let band;   // indicador de intercambio

        for (let i = 0; i < n-1; i++) {
            
            band = false;
            for (let j = 0; j < n - i - 1; j++) {
                if (lista[j] > lista[j+1]) {
                    let temp = lista[j];
                    lista[j] = lista[j+1];
                    lista[j+1] = temp;
                    band = true;
                }
            }

            if (!band) break;
        }

        // mostrar numeros por consola
        console.log(`Numero menor de la lista: ${lista[0]}`);
        console.log(`Numero mayor de la lista: ${lista[n-1]}`);
    }
}

listaNumeros = [3,1,5,2,4];
numeroMayorMenor(listaNumeros);