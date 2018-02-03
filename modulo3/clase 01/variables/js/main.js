var num1="12";
var num2="30";

var n1=parseInt(num1);
var n2=parseInt(num2);
var suma=n1+n2;

console.log(suma);

var nombre='Juan carlos dijo:"voy a dictar clases"; eso fue lo que dijo';
var direccion=`asdasdasd
asdadasdasd
asdasdasdasd
`;

//ingresa 3 numeros y van a realizar 
//las operaicones con eso 3 numeros
/*
var num1;
var num2;
var num3;
num1=prompt("ingresa n1"); // 10 = "10"
num2=prompt("ingresa n2");
num3=prompt("ingresa n3");
*/
/*
var n1=parseInt(prompt("ingresa n1"));
var n2=parseInt(prompt("ingresa n2"));
var n3=parseInt(prompt("ingresa n3"));

var suma=n1+n2+n3;
var resta=(n1-n2)-n3;
var mul=n1*n2*n3;
var div=(n1/n2)/n3;

console.log(suma);
console.log(resta);
console.log(mul);
console.log(div);

*/




// variables de tipo bool

var estado=true;
var estado2=false;

var estado3=1;
var estado4=0;


// variables tipo fecha:

var fecha="20/01/2018";

var nuevafecha =new Date();

console.log(nuevafecha);
console.log("año: "+nuevafecha.getFullYear());
console.log("mes: " + nuevafecha.getMonth());
console.log("día: " +nuevafecha.getDate());
console.log("día de la semana: " +nuevafecha.getDay());
console.log("Hora del día: " +nuevafecha.getHours());
console.log("minutos del día: " +nuevafecha.getMinutes());
console.log("segudos del día: " +nuevafecha.getSeconds());

// var arreglo

var notas=[10,11,05,09,10,11,05,09];
console.log(notas);


console.log(notas[8]);
 
 var dias=["dom","lun","mar","mier","juev","vie","sab"]
// dato = [codigo,nombre,estado,mes,curso,tel,activo];

var datos=[12,"juan",false,12,1,"999343343",true];
var datos2=["juan carlos","Ramos T","999444555",[12,20,12],true ]
console.log(datos[5]);
console.log(datos2[0])
console.log(datos2[3][0])
console.log(datos2[3][1])
console.log(datos2[3][2])

// var objeto
var alumno1={
	nombres:"juan carlos",
	apellidos:"ramosT",
	telefono:"999888999",
	correo:"jramos@gmail.com",
	estado:true,
	notas:[12,10,14]
}

console.log("datos de alumno 1");

console.log(alumno1);

console.log(alumno1.nombres);

console.log(alumno1.telefono);

console.log(alumno1.notas[0]);
console.log(alumno1.notas[1]);
console.log(alumno1.notas[2]);
