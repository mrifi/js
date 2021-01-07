/**
let num1 = 1;
let num2 = 5;

/*
if(num>0){
    console.log(`${num} es mayor que 0`);
}

if(num >0){
    console.log(`${num} es mayor que 0`);
}else{
    console.log(`${num} es menor que 0`);
}



if(num >0){
    console.log(`${num} es mayor que 0`);
}else if(num<0){
    console.log(`${num} es menor que 0`);
}else{
    console.log(`${num} es igual a 0`);
}*/


//operadores logicos
//&& and
// \\ o
/**
 if(num1>0){

    if(num2>0){
        console.log(`${num1} y ${num2} son mayores que 0`);
    }
    
}
 
 */
// ejercicio de ordenar tres numero de menor a mayor.
let num1=5;
let num2=10;
let num3=15;

if(num1<num2 && num1<num3){
    console.log(`${num1} es el numero menor`);
    if(num2<num3){
        console.log(`${num2} es el numero intermedio`);
        if(num3>num2 && num3>num1){
            console.log(`${num3} es el numero mayor`);
        }
    }
}
 

let word = "Hol";

if(word.length>4){
    console.log(`${word} tiene mas de 4 letras`);
}else if(word.length<4){
    console.log(`${word} tiene menos de 4 letras`);
}else{
    console.log(`${word} tiene 4 letras`);
}


let respuesta = true; 
//manera de utilizar el condicioante para principiantes
if(respuesta ==true) console.log(`respuesta tiene el valor true`);
if(respuesta ==false) console.log(`respuesta tiene el valor false`);

//manera mas habitual de utilizarlo
if(respuesta) console.log(`respuesta tiene el valor true`);
if(!respuesta) console.log(`respuesta tiene el valor false`);






