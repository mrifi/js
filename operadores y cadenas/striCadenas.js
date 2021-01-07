
/**
 * propiedad length-> es una propiedad que nos devuelve la longitud
 * de la cadena, cuenta tanto las letras de la cadena
 * como los espacios.
 */
let cadena = "Hola Mundo";

console.log(cadena.length);

/**
 * metodo toUpperCase() --> este metodo convierte la cadena 
 * en mayusculas.
 * pero la cadena original no sera modificada.
 */

console.log(cadena.toUpperCase());
let cadenaMayusculas = cadena.toUpperCase();
console.log(cadena);
console.log(cadenaMayusculas);
/**
 * metodo toLowerCase() --> este metodo hace convierte la cadena 
 * en minusculas
 * pero no modifica la cadena original. 
 */

 console.log(cadena.toLocaleLowerCase());
 /**
  * indexOf(STRING) devuelve la posicion en la que se encuentra el string
  * sino enlo encuentra devuelve -1;
  * cuando encuentra la primera coincidencia deja de buscar.
  */

console.log(cadena.indexOf("o")); 
console.log(cadena.indexOf("Hola")); 
/**
 * replace(valor a buscar,valor nuevo)--> remplaza el fragmento de la cadena y 
 * pone el valor nuevo.
 */
let nuevaCadena = cadena.replace("Mundo","Rifi");
console.log(nuevaCadena);
console.log(cadena.replace("Mundo","Youtube"));
/**
 * substring(inicio[,fin])-> extrae los carecteres desde inicio 
 * hasta fin(el fin no se incluye)
 * si no se incluye el fin extrae hasta el final
 */
console.log(cadena.substring(3,7));
console.log(cadena.substring(3));
/**
 * slice(inicio[,fin])--> igual que substring pero admite valores
 * negativos, si ponemos valores negativos empezara desde atras
 * 
 * sino se incluye el final extrae hasta el final
 * 
 * (2,-4)-> empieza a conter en el tercer caracter y a los 4 ultimos no los considera
 */
console.log(cadena.slice(-3));
console.log(cadena.slice(0,-6));// empieza a contar en la posicion 0 y los ultimos 6 caracteres no los cuenta
console.log(cadena.slice(2));
/**
 * trim()-> elimina los espacios al inicio y al final de la cadena
 */
let cadena2 = "        hola youtube, estamos trabajando con cadenas      ";
console.log(cadena2.trim());
/**
 * --ES6
 * startsWith(valor[,inicio])-> sirve para saber si la cadena
 * empieza con ese valor.devuelve true o false
 */
console.log(cadena.startsWith("H"));
console.log(cadena.startsWith("M",5));
/**
 * endsWith(valor[,longitud])-->sirve pora saber si la cadena termina
 * con ese valor.devuelve true o false.
 */
console.log(cadena.endsWith("o"));
console.log(cadena.endsWith("a",4));
console.log(cadena.endsWith("n",8));
console.log(cadena.endsWith("Mundo"));
/**
 * includes(valor,[,inicio])->igual que indexOf pero devuelve true o false.
 */
console.log(cadena.includes("n"))
console.log(cadena.includes("a",5))
console.log(cadena.includes("n",2))
/**
 * repeat(valor)-> repite el string el numero de veces que le indiquemos.
 */
let cadena3 = "Hola ";


console.log(cadena3.repeat(3));
console.log("r".repeat(3));

/**
 * Template string
 */
let nombre = "Juan";
let apellido = "Gomez";
let edad = 20;

console.log(`Hola ${nombre} ${apellido}. Tienes ${edad} años.`);
console.log(`Hola ${nombre} ${apellido}. Tienes ${edad+1} años.`);
