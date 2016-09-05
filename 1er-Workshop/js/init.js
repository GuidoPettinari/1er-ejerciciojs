
var botones = document.getElementById ('agregarTarea');
var ingresos = document.getElementById ('nuevaTarea');
var tareasignada = {};
var editartarea = document.getElementById('Editar');
var editarid;
var listado = document.getElementById ('listadoTareas');


var funcionboton = botones.onclick = function () {

  var idpepe = editarid.id;
 
  console.log(editarid);

  var nuevaTarea = ingresos.value;
  var nuevoIds = Date.now();
  var nuevoEstado = "Pendiente"
  var nuevaaccion = "Eliminar"

ini();
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


  var row = listado.insertRow(0);
  var celda1 = row.insertCell(0);
  var celda2 = row.insertCell(1);
  var celda3 = row.insertCell(2);
  var celda4 = row.insertCell(3);

  celda1.innerText = tareas.Ids;
  celda2.innerText = tareas.Tarea;
  celda3.innerText = tareas.Estado;
  celda4.innerHTML = '<a href="#" id="Editar-'+ tareas.Ids+'">  Editar </a> / <a href="#"" id="Elimina-'+ tareas.Ids+'">  Eliminar </a>';
  row.id = tareas.Ids

////////////////////////////////////
/////////BOTON DE ELIMINAR/////////
//////////////////////////////////

var eliminartarea = document.getElementById('Elimina-'+ tareas.Ids);

  eliminartarea.onclick = function() {

    var idCortado = eliminartarea.id.split('-')[1]; 
      for (var i = 0; i < localStorage.length; i++) {
        if (idCortado==localStorage.key(i)) {
                  localStorage.removeItem(localStorage.key(i));
                  document.getElementById(idCortado).remove();
             
        }
          
      }
  }

////////////////////////////////////
/////////BOTON DE EDITAR //////////
//////////////////////////////////

var editartarea = document.getElementById('Editar-'+ tareas.Ids);

  editartarea.onclick = function() {

    var idCortado = editartarea.id.split('-')[1]; 
      for (var i = 0; i < localStorage.length; i++) {
        if (idCortado==localStorage.key(i)) {
                  ingresos.value = tareas.Tarea;
                  editarid = tareas.Ids;

             
        }
          
      }
  }



}




//Trae e imprime el listado guardado en Local Storage.
function ini() {

  for (i=0;i<localStorage.length;i++) {
    var primeraTarea = localStorage.getItem(localStorage.key(i));
    var objTarea = JSON.parse(primeraTarea);
    imprimirlistado(objTarea);

    }

}

//Fin de comentario

window.onload = ini();
