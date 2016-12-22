var y = 10; // altura inicial y0=10%, debe leerse al iniciar si queremos que tenga alturas diferentes dependiendo del dispositivo
var vel = 0;
var g = 1.622;
var a = g;
var dt = 0.016683;
var timer=null;
var timerFuel=null;
var combustible=100;
var dificultad;
var statusFuel = true;
var statusPause = false;


//al cargar por completo la página...
window.onload = function(){
	//definición de eventos
	//mostrar menú móvil

	document.getElementById("showm").onclick = function () {
		document.getElementsByClassName("opciones-juego")[0].style.display = "block";
		pausa();
	}
	//ocultar menú móvil
	document.getElementById("hidem").onclick = function () {
		document.getElementsByClassName("opciones-juego")[0].style.display = "none";
		reanudar();
	}
	//encender/apagar el motor al hacer click en la pantalla

	document.onclick = function () 
	{
 	  if (a==g && combustible > 0 && !statusPause)
 	  {
  		motorOn();
 	  } 
 	  else 
 	  {
  		motorOff();
 	  }
	}
	//encender/apagar al apretar/soltar una tecla
	document.onkeydown = motorOn;
	document.onkeyup = motorOff;
	
	// boton Pausa
	document.getElementById("Pausa").onclick = pausa;

	// boton Reanudar
	document.getElementById("Reanudar").onclick = reanudar;

	// boton reset
	document.getElementById("resetGame").onclick = mensajeInicio;
	
	//Empezar a mover nave
	mensajeInicio();
}

function mensajeInicio()
{
	
	var mensaje = "Elige dificultad: F para facil, D para dificil. Para salir, pulsa S.";
	var empezar = prompt(mensaje);
	// pasar a mayusculas
	empezar = empezar.toUpperCase();
	while(empezar != "F" && empezar != "D" && empezar != "S")
	{
		empezar = prompt(mensaje);
	}

	switch(empezar)
	{
		case "F":
			dificultad = 5;
			break;
		case "D":
			dificultad = 1;
			break;
		case "S":
			window.location.href = "index.html";
	}
	
	document.getElementById("combustible").innerHTML=combustible;
	
	start();
}

function pausa()
{
	statusPause = true;
	stop();
}

function reanudar()
{
	statusPause = false;
	start();
}

//Definición de funciones
function start()
{
	timer=setInterval(function(){ moverNave(); }, dt*1000);
}

function stop(){
	clearInterval(timer);
}

function moverNave(){
	vel +=a*dt;
	document.getElementById("velocidad").innerHTML=vel;
	y +=vel*dt;
	document.getElementById("altura").innerHTML=y;
	
	//mover hasta que top sea un 85% de la pantalla
	if (y<85){ 
		document.getElementById("nave").style.top = y+"%"; 
	} 
	else 
	{ 
		stop();
		finalizar();
	}
}
function motorOn()
{	if (timerFuel==null && combustible > 0)
{
	a=-g;
	timerFuel=setInterval(function(){ actualizarFuel(); }, 100);
	document.getElementById("imgnave").src="img/nave2.png";
}
}
function motorOff()
{
	a=g;
	clearInterval(timerFuel);
	timerFuel=null;
	document.getElementById("imgnave").src="img/nave.png";
}

function actualizarFuel(){
	//Aquí hay que cambiar el valor del marcador de Fuel...
	if(combustible > 0)
	{
		combustible -= 1;
		document.getElementById("combustible").innerHTML=combustible;

	}
}

function finalizar()
{
	var mensaje = "";
	if(vel <= dificultad)
	{
		mensaje = "Felicidades, has ganado.";
		window.location.href = "index.html";
	}
	else
	{
		mensaje = "Te la has pegado.";
		document.getElementById("imgnave").src="img/ex.jpg";	
		combustible=0;
		
	}


	alert(mensaje);
	
}
