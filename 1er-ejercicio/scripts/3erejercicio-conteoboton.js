/******************* SELECCIONO EL BOTON **************/


var contar = 0;

boton.onclick = function(){

	if(contar == 0){
		var intervalo = setInterval(function(){
		console.log(contar);
    clearInterval(intervalo)
	 	}, 3000);
	}

	contar++;

};
