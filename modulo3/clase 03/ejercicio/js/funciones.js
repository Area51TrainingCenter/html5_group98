console.log("funcionando Jquery");
function cargarTodos(){
var cantidad=personasRegistradas.length;
		
			for(var i=0;i<cantidad;i++){
			
					$("#lista-contactos").append(`<div class="item-lista `+personasRegistradas[i].tipo+`">
											  	<img src="user.png">
											  	<h2>`+personasRegistradas[i].nombres+` `+personasRegistradas[i].apellidos +`</h2>
											  	<span>`+personasRegistradas[i].tipo+`</span>
											  	<div>
												  	<a href="`+personasRegistradas[i].facebook+`" target="_blank">Facebook</a>
												  	<a href="`+personasRegistradas[i].twiiter+`"  target="_blank" >twiiter</a>
											  	</div>
											  </div>`)
				

			}

}
function cargarFiltro(filtro){
	
		var cantidad=personasRegistradas.length;
		
			for(var i=0;i<cantidad;i++){
				console.log(i);
				if(personasRegistradas[i].tipo==filtro){
					$("#lista-contactos").append(`<div class="item-lista `+personasRegistradas[i].tipo+`">
											  	<img src="user.png">
											  	<h2>`+personasRegistradas[i].nombres+` `+personasRegistradas[i].apellidos +`</h2>
											  	<span>`+personasRegistradas[i].tipo+`</span>
											  	<div>
												  	<a href="`+personasRegistradas[i].facebook+`" target="_blank">Facebook</a>
												  	<a href="`+personasRegistradas[i].twiiter+`"  target="_blank" >twiiter</a>
											  	</div>
											  </div>`)
				}

			}

	

}
$(".filtros li").click(function(){
	$("#lista-contactos").html("");
	var opcion=$(this).attr("data-filtro");


	switch(opcion){
		case "escuela":
			
			cargarFiltro("escuela");

			//$(".item-lista").hide();
			
			//$(".escuela").show();
			// ejecuta codigo
			break;

		case "universidad":
		cargarFiltro("universidad");
			// ejecuta codigo
			//$(".item-lista").hide();
			
			//$(".universidad").show();
			
			break;

		case "trabajo":
			// ejecuta codigo
			cargarFiltro("trabajo");
			//$(".item-lista").hide();
			
			//$(".trabajo").show();
			break;

		default:
			cargarTodos();
			// ejecuta codigo
			break;
	}


})

var personasRegistradas=[];

$("#btngrabar").click(function(){
	event.preventDefault();
	var persona={
		email:"",
		nombres:"",
		apellidos:"",
		facebook:"",
		tipo:"",
		twitter:""
	}

	persona.email=$("#inpEmail").val();
	persona.nombres=$("#inpNombre").val();
	persona.apellidos=$("#inpApellidos").val();
	persona.facebook=$("#inpFacebook").val();
	persona.tipo=$("#inpTipo").val();
	persona.twitter=$("#inpTwitter").val();
	//persona.email=="" ? activarError("inpEmail") : activarCheck("inpEmail"); 
	var estadoCorreo=validarEmail(persona.email); // true/false
	
	estadoCorreo ?activarCheck("inpEmail"):activarError("inpEmail");
 	
 	//var estadoNombre=validarVC(persona.nombres);
 	
 	validarVC(persona.nombres) ? activarCheck("inpNombre"):activarError("inpNombre");
 	validarVC(persona.apellidos) ? activarCheck("inpApellidos"):activarError("inpApellidos");

 	//$("#lista-contactos").append("<h2>"+persona.nombres+"</h2>");
	
	/*$("#lista-contactos").append('<div class="col-sm-6 col-md-6 agenda '+tipo + '">'
				+'<div class="thumbnail">'
				+'<img src="user.png" alt="...">'
				+'<div class="caption">'
				+' <h3>'+nombre+" "+appelido+"("+tipo+")"+'</h3>'
				+'<p>'+correo+'</p>'
				+'<p><a target="_blank" href="'+facebook+'" class="btn btn-primary" role="button">Facebook</a> <a href="'+twitter+'" target="_blank" class="btn btn-default" role="button">Twitter</a></p>'
				+'</div></div></div>')
				*/
				/*$("#lista-contactos").append('<div class="item-lista">'
			  	+'<img src="user.png">'
			  	+'<h2>Nombre</h2>'
			  	+'<span>Tipo de Amigo</span>'
			  	+'<div>'
				  	+'<a href="">Facebook</a>'
				  	+'<a href="">twiiter</a>'
			  	+'</div></div>')*/

			  	$("#lista-contactos").append(`<div class="item-lista `+persona.tipo+`">
											  	<img src="user.png">
											  	<h2>`+persona.nombres+` `+persona.apellidos +`</h2>
											  	<span>`+persona.tipo+`</span>
											  	<div>
												  	<a href="`+persona.facebook+`" target="_blank">Facebook</a>
												  	<a href="`+persona.twiiter+`"  target="_blank" >twiiter</a>
											  	</div>
											  </div>`)
			  	personasRegistradas.push(persona)
			  	console.log(personasRegistradas);
})



function activarError(elemento){
		$("#"+elemento).parent().find(".error-msg").show();
		$("#"+elemento).parent().find(".check-msg").hide();
		
}

function activarCheck(elemento){
		$("#"+elemento).parent().find(".check-msg").show();
		$("#"+elemento).parent().find(".error-msg").hide();
}
function validarVC(texto){
	var respuesta;
	var temp=$.trim(texto);
	var condicion1;
	condicion1= temp==""?false:true;
	var condicion2;
	condicion2= temp.lenght>=3?true:false;

	if(condicion1==true && condicion2==true){
		respuesta=true;
	}
	else{
		respuesta=false;
	}

	return respuesta;
	

}
function validarEmail(valor){
	var respuesta;
/** validar que no este vacio**/
	//$.trim()
	var temp=$.trim(valor)

	//var estado1= (temp==""? 0 : 1);
	var estado1= temp==""?0:1;
	// estado1=0 -> vacio
	// estado1=1 -> con datos
	
	//var letras=temp.split("-");

	var existe=temp.indexOf("@"); 
	// existe=-1 -> no existe arroba
	// existe= N -> si existe el arroba
	var punto=temp.indexOf(".")
	// punto=-1 -> no existe el punto
	// punto= N -> si existe el punto

	/*if(estado1==0 || existe==-1 || punto==-1){
		respuesta=false;
	}
	else{
		respuesta=true;
	}*/
	if(estado1==1 && existe>=0 && punto>=0){
		respuesta=true;
	}
	else{
		respuesta=false;
	}



	return respuesta;

}

