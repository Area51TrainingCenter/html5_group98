$(".menu-site li").click(function(){
	$(".menu-site li").removeClass("activado");
	$(this).addClass("activado");
})


$("#dog1").click(function(){
	$(".md").fadeIn(500);
})
$(".close-modal").click(function(){
	$(".md").fadeOut(500);
})

/*

$("#menu-home").click(function(){
	limpiarbackground();
	$("#menu-home").addClass("activado");
})
$("#menu-about").click(function(){
	limpiarbackground();
	$("#menu-about").addClass("activado");
})
$("#menu-adopt").click(function(){
	limpiarbackground();
	$("#menu-adopt").addClass("activado");
})
$("#menu-contact").click(function(){
	limpiarbackground();
	$("#menu-contact").addClass("activado");
})
*

/
/*var op1=document.getElementById('menu-home');
op1.addEventListener("click",cambiarfondo1)
function cambiarfondo1(){
	limpiarbackground();
	op1.classList.add("activado");
	
}

var op2=document.getElementById('menu-about');
op2.addEventListener("click",cambiarfondo2)

function cambiarfondo2(){
	
	limpiarbackground();

	op2.classList.add("activado");
}

var op3=document.getElementById('menu-adopt');
op3.addEventListener("click",cambiarfondo3)

function cambiarfondo3(){
	
	limpiarbackground();

	op3.classList.add("activado");
}

var op4=document.getElementById('menu-contact');
op4.addEventListener("click",cambiarfondo4)

function cambiarfondo4(){
	limpiarbackground();
	op4.classList.add("activado");
}
function limpiarbackground(){
	op1.classList.remove("activado");
	op2.classList.remove("activado");
	op3.classList.remove("activado");
	op4.classList.remove("activado");
}

var dog1=document.getElementById('dog1');
dog1.addEventListener("click",showmodal)
var body=document.getElementsByTagName('body')
function showmodal(){
body[0].classList.add("modalshow");
}

var close=document.getElementsByClassName("close-modal");
close[0].addEventListener("click",cerrar)
function cerrar(){
	body[0].classList.remove("modalshow");
}*/


