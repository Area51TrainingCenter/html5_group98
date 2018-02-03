$(".list-img li").click(function(){
	//var ruta=$(this).find("img").attr("src");
	var ruta=$(this).attr("data-img");
	$(".principal img").attr("src",ruta)

	//var rutaimg=$(this).find("img").attr("src")

	//$(".principal img").attr("src".rutaimg);
	/*if(op=="1"){
		$(".principal img").attr("src","img/images.jpg")
	}
	else if(op=="2"){
		$(".principal img").attr("src","img/images2.jpg")
	}
	else if(op=="3"){
		$(".principal img").attr("src","img/images3.jpg")
	}
	else if(op=="4"){
		$(".principal img").attr("src","img/images4.jpg")
	}*/

})