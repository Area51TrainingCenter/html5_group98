
var title=document.getElementById('title_site');

var cambiar=document.getElementById("cambiar");

cambiar.addEventListener("click",activarItem);


function cambiarTitulo(){
		let texto=title.innerHTML;
		if(texto=="titulo1"){
			title.innerHTML="titulo2";
		}
		else{
			title.innerHTML="titulo1";
		}
		//title.innerHTML="titulo2";

}
function activarItem(){
//title.classList.add("activa");
let clase=title.classList[0];
if(clase=="activa"){
title.classList.remove("activa");
}
else{
	title.classList.add("activa");
}
console.log(title.classList[0]);
//title.classList.remove("activa");
}


/*
var title=document.getElementsByTagName('h1')

title[0].actualizartexto


var title=document.getElementsByClassName("parrafos")
title[0].actualizartexto

var title=document.querySelector(".parrafo");

var title=document.querySelectorAll(".parrafo");
*/
