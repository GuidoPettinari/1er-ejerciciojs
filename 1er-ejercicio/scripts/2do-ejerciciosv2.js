//# Trabajo Práctico 3 JavaScript (ordenando un array)
/* ## Descripción:

1. Crear una función que llene un array con n valores(enteros) aleatorios.*/
//2. Crea otra función que ordene el array de manera creciente(sin utilizar la función sort).
//3.* * Que la función que ordena el array, lo pueda hacer de manera creciente o decreciente al pasarle un parámetro a la misma.

//************************ PRIMER EJERCICIO TAREA ******************************
var primerArray = [];

function crearArray (numero) {

  var numero = 10;

  for (i=1;i<=numero;i++) {

    var agregado = Math.round(Math.random()*10);

    primerArray.push (agregado);
  }
}

crearArray();

console.log (primerArray);

function ordenamiento(){
    for(i=0;i<(myArray.length-1);i++){
        //recorreremos todos los elementos hasta n-i, tomar en cuenta los ultimos no tiene caso ya que ya estan acomodados.
        for(j=0;j<(myArray.length-i);j++){
            //comparamos
            if(myArray[j] > myArray[j+1]){
                 //guardamos el numero mayor en el auxiliar
                 aux = myArray[j];
                 //guardamos el numero menor en el lugar correspondiente
                 myArray[j] = myArray[j+1];
                 //asignamos el auxiliar en el lugar correspondiente
                 myArray[j+1] = aux;

            }
        }
    }
}

function ordenamientoConRetorno(param){
    var arrayTmp = [];
    for ( var i = 0; i < param.length ; i++ ) {
       arrayTmp[ i ] = param[ i ];
    }

    for(i=0;i<(arrayTmp.length-1);i++){
        //recorreremos todos los elementos hasta n-i, tomar en cuenta los ultimos no tiene caso ya que ya estan acomodados.
        for(j=0;j<(arrayTmp.length-i);j++){
            //comparamos
            if(arrayTmp[j] > arrayTmp[j+1]){
                 //guardamos el numero mayor en el auxiliar
                 aux = arrayTmp[j];
                 //guardamos el numero menor en el lugar correspondiente
                 arrayTmp[j] = arrayTmp[j+1];
                 //asignamos el auxiliar en el lugar correspondiente
                 arrayTmp[j+1] = aux;
            }
        }
    }

    return arrayTmp;
}

console.log(myArray);


/* **************************** 2DO EJERCICIO TAREA ******************************** */


//4.# Piedra Papel o Tijera

//Pensar la lógica de un Piedra Papel o tijera para 2 jugadores y en base a eso armar las condiciones para poder definir que jugador gana.
//Agregar la lógica para cuando en el segundo jugador se ingresa "no jugador" la seleccion del resultado de Piedra Papel o Tijera
//sea de forma Aleatoria.


/* 1ero decidir si los dos jugadores son personas u ordenador */

/*var primerapersona = prompt("Cual es tu nombre?");
var segundapersona = prompt ("Selecciona tu rival: Jugador o Computadora?", "Jugador o Computadora");

/*Si es persona */

/*if (segundapersona != "Computadora") {

  var segundapersona = prompt ("Cual es el nombre del segundo jugador?");

  var primeraopcion = prompt (primerapersona +" elige: Piedra,Papel o Tijera");
  var segundaopcion = prompt (segundapersona +" elige: Piedra,Papel o Tijera");

  if (primeraopcion == "Tijera" && segundaopcion == "Papel") {
    var ganador = alert ("El ganador es " + primerapersona);
  };

  if (primeraopcion == "Tijera" && segundaopcion == "Piedra") {
    var ganador = alert ("El ganador es " + segundapersona);
  };

  if (primeraopcion == segundaopcion) {
    var ganador = alert ("Es un empate ");
  };
  if (primeraopcion == "Papel" && segundaopcion == "Piedra") {
    var ganador = alert ("El ganador es " + primerapersona);
  };
  if (primeraopcion == "Papel" && segundaopcion == "Tijera") {
    var ganador = alert ("El ganador es " + segundapersona);
  };
  if (primeraopcion == "Piedra" && segundaopcion == "Tijera") {
    var ganador = alert ("El ganador es " + primerapersona);
  };
  if (primeraopcion == "Piedra" && segundaopcion == "Papel") {
    var ganador = alert ("El ganador es " + segundapersona);
  };
};

/*Si es Computadora */

/*if (segundapersona == "Computadora") {

  var primeraopcion = prompt (primerapersona +" elige: Piedra,Papel o Tijera");
  var segundapersona = "La Computadora";
  /*math.floor redondea para abajo y math.random muestra un numero de 0 a 1 */
/*  var aleatorio = Math.floor((Math.random()*3)+1);

if (aleatorio = 1) {
  var segundaopcion = "Papel";
} else if (aleatorio = 2) {
  var segundaopcion = "Tijera";
} else if (aleatorio = 3) {
  var segundaopcion = "Piedra";
};

  if (primeraopcion == "Tijera" && segundaopcion == "Papel") {
    var ganador = alert ("La Computadora eligió " + segundaopcion + "\nEl ganador es " + primerapersona);
  };

  if (primeraopcion == "Tijera" && segundaopcion == "Piedra") {
    var ganador = alert ("La Computadora eligió " + segundaopcion + "\nEl ganador es "+ segundapersona);
  };

  if (primeraopcion == segundaopcion) {
    var ganador = alert ("Es un empate ");
  };
  if (primeraopcion == "Papel" && segundaopcion == "Piedra") {
    var ganador = alert ("La Computadora eligió " + segundaopcion + "\nEl ganador es " + primerapersona);
  };
  if (primeraopcion == "Papel" && segundaopcion == "Tijera") {
    var ganador = alert ("La Computadora eligió " + segundaopcion + "\nEl ganador es " + segundapersona);
  };
  if (primeraopcion == "Piedra" && segundaopcion == "Tijera") {
    var ganador = alert ("La Computadora eligió " + segundaopcion + "\nEl ganador es " + primerapersona);
  };
  if (primeraopcion == "Piedra" && segundaopcion == "Papel") {
    var ganador = alert ("La Computadora eligió " + segundaopcion + "\nEl ganador es " + segundapersona);
  };

};
*/
