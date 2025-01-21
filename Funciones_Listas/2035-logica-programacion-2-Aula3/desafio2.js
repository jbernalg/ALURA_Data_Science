/*
Crea una función que calcule el valor del factorial de un número pasado 
como parámetro.
*/

function factorial(num) {
    let resul = num;
    
    // factorial de cero
    if (num == 0) {
        return 1;
    } else {
        // factorial de uno
        if (num == 1) {
            return 1;
        } else{
            // factorial de otro numero
            while (num > 1){
                resul = resul*(num-1);
                num--;    
            }
            return resul;
        }
        
    }
    
}

console.log(factorial(6));