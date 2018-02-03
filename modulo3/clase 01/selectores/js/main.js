var elemento1;
elemento1=document.getElementById('title-site');
//elemento1.innerHTML="<strong>Hola</strong><br>desdeJS";
elemento1.innerText="hola";
elemento1.classList.add("title");

var btnazul=document.getElementById("azul");
var btnrojo=document.getElementById("rojo");

btnazul.addEventListener("click",tituloAzul);
var body=document.getElementById("body-site");
function tituloAzul(){
	elemento1.classList.remove("red");
	elemento1.classList.add("blue");
	body.classList.add("modal-activo")
}

btnrojo.addEventListener("click",tituloRojo);
function tituloRojo(){
	elemento1.classList.add("red");
	elemento1.classList.remove("blue");	

}

var btnazul=document.getElementById("azul");
btnrojo.addEventListener("click",tituloRojo);
function tituloRojo(){
	elemento1.classList.add("red");
	elemento1.classList.remove("blue");	

}



