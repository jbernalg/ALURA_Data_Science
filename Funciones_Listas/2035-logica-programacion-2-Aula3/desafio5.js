/*
Crea una función que muestre en pantalla el área y el perímetro de una sala circular, 
utilizando su radio que se proporcionará como parámetro. Considera Pi = 3,14.
*/

function areaPerimetroCirculo (radio) {
    pi = 3.14;
    area = pi*radio*radio;
    perimetro = 2*pi*radio;
    alert(`El area del circulo de radio ${radio} es ${area} metros cuadrados.`);
    alert(`El perimetro del circulo de radio ${radio} es de ${perimetro} metros`);
}

areaPerimetroCirculo(4);