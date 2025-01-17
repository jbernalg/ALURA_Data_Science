/* Pregunta al usuario qué día de la semana es. 
Si la respuesta es "Sábado" o "Domingo", muestra "¡Buen fin de semana!".
De lo contrario, muestra "¡Buena semana!".
*/

// variables
let diaUsuario = prompt('Ingrese el dia de la semana');
let diaFin1 = 'Sabado';
let diaFin2 = 'Domingo';

// codigo que prueba las condiciones
if (diaUsuario == diaFin1 || diaUsuario == diaFin2) {
    alert('Buen fin de semana!');
} else {
    alert('Buena semana!')
}