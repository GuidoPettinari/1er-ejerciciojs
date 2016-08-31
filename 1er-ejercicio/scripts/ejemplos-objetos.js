var miAuto = {};

miAuto.ruedas = 4;
miAuto.color="rojo";
miAuto.puertas=3;
miAuto.velocidad= function (x) {
  console.log ("llego hasta " + x + " kilometros por hora");
}

var miAuto = {
  ruedas:4;
  velocidad: function (x) {
    console.log ("llego hasta " + x + " kilometros por hora");
  }

}


var 0 = {
  prop: 37;
  f: function () {
    return this.prop;
  }
};

function constructorAutos (ruedas,color,puertas) {
  this.ruedas = ruedas;
  this.color = color;
  this.puertas = puertas;
};

var miPrimerAuto = new constructorAutos (4, "azul", 3);
var miSegundoAuto = new constructorAutos (4,null,3);
var miTercerAuto = new constructorAutos ('',"amarillo",6);

miPrimerAuto.marca = 'Volkswagen';
