/*
Crear una función que reciba dos números como parámetros y devuelva 
el mayor de ellos.
*/

function numeroMayor (num1, num2) {
    if (num1 > num2) {
        return num1;
    } else if(num1 < num2) {
        return num2;
    }else{
        return num1;
    }
}

console.log(numeroMayor(90,97));