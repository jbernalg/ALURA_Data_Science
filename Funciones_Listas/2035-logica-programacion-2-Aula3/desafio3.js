/*
Crea una función que convierta un valor en dólares, pasado como parámetro, 
y devuelva el valor equivalente en reales(moneda brasileña,si deseas puedes 
hacerlo con el valor del dólar en tu país). 
Para esto, considera la cotización del dólar igual a R$4,80.
*/

function conversionMoneda (dolar) {
    return dolar*4.80;
}

console.log(conversionMoneda(5));