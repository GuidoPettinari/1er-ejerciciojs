/* # Ahorcado

Pensar la lógica de un Ahorcado, donde en primera instancia se le pedira al usuario
que ingrese la palabra que se debe adivinar. Segundo la cantidad de intentos que puede tener el juegos,
pero si ingresa cero  generar un entero de forma aleatoria entre (5 y 20).

Una vez ingresados todos los datos anteriores se le pedira al "jugador" que ingrese una letra o la palabra entera
(Si ingresa más de una letra se tomara como que ingreso la palabra).Siempre que se le pide que ingrese la letra o
palabra informarle cuantos intentos tiene.

En caso de que sea una letra se debera verificar si existe dentro de la de la palabra que ingreso para adivinar.
Esto debera descontar las cantidad de jugadas e informar al usuario si acerto en la letra  o no, en el caso que
haya acertado decirle en cuantas letras lo hizo, y cuantas letras le falta por adivinar.

Cuando ingresa una palabra directamente se debera comprar con el texto y si adivina GANA pero si no adivina.
No tendra otro intento y se le informara que PERDIO. */


var palabraaadivinar = prompt("Que palabra deberá adivinar el contrincante?");
palabraaadivinar = palabraaadivinar.toLowerCase();
console.log(palabraaadivinar);
var intentos = parseInt (prompt("Cuantos intentos puede tener entre 5 y 20?"));
console.log(intentos);
var chancesquefaltan;



//HACER UN DO PORQUE SI intentos ES MENOR A 5  o MAYOR A 20 TIENE QUE TIRAR DE VUELTA EL MATH.ROUND
do {
if (isNaN(intentos) || intentos == 0 || intentos >20 ) {
  var intentos = Math.round(Math.random()*20);
  console.log (intentos);
}}while(intentos < palabraaadivinar.length);


var chancesquefaltan = 0;
var letrasacertadas = 0;
var nuevapalabra = "";

var arrayPalabra = [];
for (var i = 0; i < palabraaadivinar.length;i++) {
  arrayPalabra.push('_');
}

for (chancesquefaltan;intentos-chancesquefaltan;chancesquefaltan) {
//HACER UN DO POR SI LA PERSONA NO ESCRIBE UNA LETRA
do {
var letra = prompt("La Palabra a adivinar es " + arrayPalabra.join(' ') +"Elige una letra, si escribes más de una letra se la tomara como palabra.Te quedan " + (intentos-chancesquefaltan) + " intentos");
letra = letra.toLowerCase();
console.log(letra);
}while ( !isNaN(letra) );


var n = palabraaadivinar.indexOf(letra);
console.log(n);

if (letra.length > 1) {
  if (letra === palabraaadivinar) {
    alert ("GANASTE,LA PALABRA ERA " + letra);
    break;
  } else {
    alert ("PERDISTE, LA PALABRA ERA " + palabraaadivinar);
    break;
  }};

  if (n === -1) {
    console.log(n);
    chancesquefaltan++;
    alert ("SIGUE PARTICIPANDO, TE QUEDAN " + (intentos-chancesquefaltan) + " intentos" );

  } else {
    for (var i = 0; i<palabraaadivinar.length;i++) {
      if (palabraaadivinar[i] == letra){
            arrayPalabra[i] = letra;
            console.log (arrayPalabra);
            var nuevapalabra = arrayPalabra.join('');
            if (nuevapalabra === palabraaadivinar) {
              alert("Ganaste");
              var chancesquefaltan  = intentos;

            }
      }

    }
}
}
