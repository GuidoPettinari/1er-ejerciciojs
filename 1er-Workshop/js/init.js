
var botones = document.getElementById ('agregarTarea');
var ingresos = document.getElementById ('nuevaTarea');
var tareasignada = {};
var editartarea = document.getElementById('Editar');
var eliminartarea = document.getElementById('Eliminar');


var funcionboton = botones.onclick = function () {

  var nuevaTarea = ingresos.value;
  var nuevoIds = Date.now();
  var nuevoEstado = "Pendiente"
  var nuevaaccion = "Eliminar"


//CONSTRUYE OBJETO
function constructorTareas (Ids,tarea,estado,acciones) {

  this.Ids = Ids;
  this.Tarea = tarea;
  this.Estado = estado;
  this.Acciones = acciones;

}

//LLENA CON VALORES EL OBJETO
var primeraTarea = new constructorTareas (nuevoIds,nuevaTarea,nuevoEstado,nuevaaccion);


localStorage.setItem (primeraTarea.Ids,JSON.stringify(primeraTarea));
imprimirlistado(primeraTarea);

}



//IMPRIMIR listado

function imprimirlistado (tareas) {

var listado = document.getElementById ('listadoTareas');
  var row = listado.insertRow(0);
  var celda1 = row.insertCell(0);
  var celda2 = row.insertCell(1);
  var celda3 = row.insertCell(2);
  var celda4 = row.insertCell(3);

  celda1.innerText = tareas.Ids;
  celda2.innerText = tareas.Tarea;
  celda3.innerText = tareas.Estado;
  celda4.innerHTML = '<a href="#" id="Editar-'+ tareas.Ids+'">  Editar </a> / <a href="#"" id="Elimina">  Eliminar </a>';
}




window.onload = function () {

  for (i=1;i<localStorage.length;i++) {
    var primeraTarea = localStorage.getItem(localStorage.key(i));
    var objTarea = JSON.parse(primeraTarea);
    imprimirlistado(objTarea);

    }

}
