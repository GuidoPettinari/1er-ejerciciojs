

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
