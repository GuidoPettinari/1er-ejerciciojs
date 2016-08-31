/* ## Cuántas Vocales existen?

Crear una función que cuente la cantidad de vocales existentes en un string (recuerden que puede ser de más de una palabra).

- Crear una variable que va a contener nuestro string */

var palabra=prompt("Escribi una palabra o frase");

//- Crear una función y pasar como argumento la variable del string
//- Recorrer esta variable dentro de nuestra función y efectuar la comparación de cual es vocal y cual no
//- En el caso de que sea vocal tenemos que hacer que se incremente una variable.
//- Si no es una vocal (no hacemos nada)
//- Retornamos la cantidad de vocales existentes en nuestra variable. */

contarletras = function cuentavocales (dato) {

var cantidadvocales = 0;

for (i=0;i<palabra.length;i++ ) {
  var letra = dato [i].toLowerCase();
  console.log(letra);
  if (palabra[i] === "a" || palabra [i] === "e" || palabra [i] === "i" || palabra [i]==="o" || palabra[i]==="u") {
    ++cantidadvocales
  }
}

return cantidadvocales;

}

contarletras(palabra);
