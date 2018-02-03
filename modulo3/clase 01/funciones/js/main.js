var r1=resultadoSuma(10,12);
var r2=resultadoSuma(12,22);
var r3=resultadoSuma(12,223);



function resultadoSuma(valor1,valor2){
	var suma=valor1+valor2;
	return suma;
}
function sumarNumeros(valor1,valor2){
	var suma=valor1+valor2;
	imprimir(suma);	
}

function imprimir(valor1)
{
	console.log(valor1);
}

function limpiar(){
	//limpiara los input text luego gestionara el formualrio
	return 0;
}




/*Necesitamos crear
una funcion que devuelve el nombre del mes
y el nombre del día actual*/

var mesesEs=["Enero",
			"Febrero",
			"Marzo",
			"Abril",
			"Mayo",
			"Junio",
			"Julio",
			"Agosto",
			"Septiembre",
			"Octubre",
			"Noviembre",
			"Diciembre"]


var mesesEn=["January ",
			"February ",
			"Marzo",
			"Abril",
			"Mayo",
			"Junio",
			"Julio",
			"Agosto",
			"Septiembre",
			"Octubre",
			"Noviembre",
			"Diciembre"]


var fecha_actual=new Date();
var idioma=prompt("selecciona el idioma entre 1(español) y 2(ingles)")

nombreMes(fecha_actual.getMonth(),idioma);
/*
idioma=1=español
idioma=2=ingles
*/
function nombreMes(indice,idioma){
		var nombre;
		
		if(idioma==1){
			nombre=mesesEs[indice];
		}
		else if(idioma==2){
			nombre=mesesEn[indice];
		}
		else{
			nombre="ingresa una opcion valida";
		}


		console.log(nombre);
	
}