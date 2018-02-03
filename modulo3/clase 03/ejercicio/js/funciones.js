console.log("funcionando Jquery");




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
	var estadoCorreo=validarEmail(persona.email);
	/*if(estadoCorreo){
		 activarCheck("inpEmail")
	}else{
		activarError("inpEmail")
	}*/
	estadoCorreo?activarCheck("inpEmail"):activarError("inpEmail");


	
})



function activarError(elemento){
		$("#"+elemento).parent().find(".error-msg").show();
		$("#"+elemento).parent().find(".check-msg").hide();
		
}

function activarCheck(elemento){
		$("#"+elemento).parent().find(".check-msg").show();
		$("#"+elemento).parent().find(".error-msg").hide();
}

function validarEmail(valor){
	var respuesta=false;
/** validar que no este vacio**/

	var temp=$.trim(valor) 
	
	var estado1= temp==""?0:1;
	// estado1=0 -> vacion
	// estado1=1 ->con datos
	
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

