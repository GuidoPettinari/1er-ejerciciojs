
var button = document.getElementByName ('boton');
var combo = document.getElementByName ('combo');
var x = document.getElementByName ('numero1');
var y = document.getElementByName ('numero2');



var funciones = {
  Suma: function (x,y) {
    console.log('La suma es igual a ' x + y);
  }
  Resta: function (x,y) {
    console.log ('La Resta es igual a ' x - y);
  }
  Dividir: function (x,y) {
    if (y==0){
      alert ("No se puede dividir por 0");
    } else {
    console.log ("La Division es igual a " x/y);
  }
  Multiplicar: function (x,y) {
    console.log("La Multiplicación es igual a " x*y);
  }
  }
}


var operacion = button.onclick = function (x,y) {
  if (combo.value === funciones.Suma) {
    funciones.Suma
  }
}
