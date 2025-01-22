/*
Crea una función que muestre en pantalla el área y el perímetro de una sala rectangular, 
utilizando la altura y la anchura que se proporcionarán como parámetros.
*/

function areaPerimetro(altura, ancho) {
    area = altura*ancho;
    perimetro = 2*altura + 2*ancho;
    alert(`El area del rectangulo es de: ${area} metros cuadrados`);
    alert(`El perimetro del rectangulo es de: ${perimetro} metros`);
}

areaPerimetro(2,2);