
$(".menu-home li").click(function(){
	// evito el funcionamiento para este caso el
	// compartamiento de la etiqueta a
	event.preventDefault();

	$(".menu-home li").removeClass("acitve-menu");
	$(this).addClass("acitve-menu");

})
// devuelve el valor
//var ruta=$("img").attr("src");

// actualiza el valor de el atributo
//$("img").attr("src","nuevaruta.jpg");


$(".tab li").click(function(){
	$(".item-producto").hide();
	var opc=$(this).attr("data-opc")

	if(opc=="1"){
		$(".best-seller").show();
	}
	else if(opc=="2"){
		$(".new-arrival").show();
	}
	//$(".best-seller").show();
})