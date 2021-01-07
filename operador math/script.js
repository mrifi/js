/**
 * OBJETO MATH.
 * es un objeto estatico.
 * tenemnos que usar su nombre para utilizarlo.
 * 
 * propiedades:
 *  Math.E - Math.Pi
 */

console.log(Math.E);
console.log(Math.PI);

let num = 5.9;
/**
 * devuelve el numero absoluto
 */
console.log(Math.abs(num));
/**
 * redondea el numero a la alza
 */
console.log(Math.ceil(num));
//redondea el numero a la baja.
console.log(Math.floor(num));
//devuelve la potencia del numero
console.log(Math.pow(2,3));
//genera un numero aleatorio.
console.log(Math.round(Math.random()*100));

//console.log(Math.random()*(max - min)+min);

//genera un numero aleatorio entre el 5 y el 10.
console.log(Math.round(Math.random()* (10-5)+5));
//devuelve el contrario. si es positivo da negativo y viceversa.
console.log(Math.sign(-5));

//devuelve la raiz cuadrada de un numero.
console.log(Math.sqrt(9));

















