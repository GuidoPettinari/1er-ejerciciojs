/*
//****************************** 1EROS EJERCICIOS OPERACIONES *******************************


//Por medio de un prompt() solicita 2 números en pantalla y retornar por medio de un alert() las siguientes operaciones:
//El resultado de incrementar en 1 el primer número y el segundo sin modificar.



var prompt1 = parseInt(prompt("Elige un numero del 1 al 10"));
var prompt2 = parseInt(prompt("Elige un segundo numero del 1 al 10"),22);
var prompt1sinincremental = prompt1
var resultado1 = console.log(++prompt1);
var resultado2 = alert(prompt2);


//El valor de módulo del primer número dividido el segundo.
var resultado3 = alert (prompt1sinincremental%prompt2);
//El resultado de restar el primer número y el segundo.
var resultado4 = alert (prompt1sinincremental - prompt2);
//El resultado de sumar el primer número con el segundo y ese resultado al primer número.
var resultado5intermedio = prompt1sinincremental + prompt2;
var resultado5final = alert(resultado5intermedio + prompt1sinincremental);

*/



//****************************** 2DO EJERCICIO *****************************

//Por medio de un promt() solicitar el diámetro de una rueda y su espesor (en metros) por medio del condicional if() realiza las siguientes operaciones:
//Si el diámetro es superior a 1.8 mostrar el mensaje "La rueda es muy grande".
//Si el diámetro es menor o igual a 1.8 pero mayor a 1 mostrar el mensaje "La rueda es mediana".
//Si la medida es inferior a 1 mostrar el mensaje "La rueda es chica".

/*var diametro = Number(prompt("Diametro de una rueda"));
var espesor =  Number(prompt("Espesor de la rueda"));

if  (diametro > 1.8) {
  console.log("La rueda es muy grande");
}
else if (diametro <=1.8) {
  if (diametro > 1){
  console.log("La rueda es mediana");
}
}
else {
  console.log("La rueda es muy chica")
}


//Si el diámetro es superior a 1.8 con un grosor inferior a 0.4 o si
//el diámetro es menor o igual a 1.8 pero mayor a 1 con un grosor inferior a 0.25 mostrar
//el mensaje "El grosor no es el recomendado"

if (diametro > 1.8) {
  if (espesor < 0.4) {
    console.log("El grosor no es el recomendado");
  }
}
else if (diametro <= 1.8) {
  if (diametro > 1){
    if (espesor<0.25){
      console.log("El grosor no es el recomendado");
    }
 }
} */



//#Calculadora

/*Por medio de promt() para la carga de datos realizar una calculadora.
Primer dato a guardar es el tipo de operación: Suma, Resta, Dividir o multiplicar.
Solicitar dos números enteros.
Teniendo estos datos devolver el resultado obtenido mediante un console.log().*/


function calculadora() {

  
do{
var operacion = prompt ("Qué operación vas a realizar?","Sumar,Restar,Multiplicar,Dividir");
} while (operacion != 'Sumar' && operacion !='Restar' && operacion !='Multiplicar' && operacion !='Dividir');

do{
var numero1 = parseFloat (prompt("Elige un primer numero"));
var numero2 = parseFloat (prompt("Elige un segundo numero"));
} while (isNaN(numero1) == true || isNaN(numero2) == true);

switch (operacion) {
  case 'Multiplicar':
      console.log (numero1 * numero2);
      break
  case 'Sumar':
      console.log (numero1 + numero2);
      break
  case 'Dividir':
      if (numero2 == 0) {
        alert ("No se puede elegir 0 como valor");
        while (numero2 == 0) {
          var numero2 = parseFloat (prompt("Elige un segundo numero"));
        }
        console.log (numero1 / numero2);
      }
      break
  case 'Restar':
      console.log(numero1 - numero2);
      break
  default:
      console.log ("Error: No has elegido un numero");
 }
}

var seguir = false;
do {
  calculadora();
  var respuesta = prompt ("Desea seguir ocn la calculadora si o no");
  if (respuesta === 'si') {
  seguir = true;
  } else {
    seguir=false;
  }
}
while (seguir)
