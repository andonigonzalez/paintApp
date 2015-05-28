document.addEventListener("deviceready", init, false);

function init(){

	/*VARIABLES*/
	var canvas = document.getElementById("canvas");
	var ctx = canvas.getContext("2d");
	var drawing = false;
	var color  = $("#color").val();
	var ancho = 3;
	
	/*TAMAÑO CANVAS*/
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight - 50;
	
	/*FONDO BLANCO DEL CANVAS*/
	var canvasW = canvas.width;
	var canvasH = canvas.height;
	ctx.fillStyle = "#fff";
	ctx.fillRect (0, 0, canvasW, canvasH);
	
	/*DIBUJAR*/
	canvas.addEventListener("touchstart", inicio, false);
	canvas.addEventListener("touchmove", movimiento, false);
	canvas.addEventListener("touchend", fin, false);
	function inicio(e){
		e.preventDefault();
		ctx.beginPath();
		ctx.strokeStyle = color;
		ctx.lineWidth = ancho;
		ctx.moveTo(e.touches[0].pageX, e.touches[0].pageY);
		ctx.arc(e.touches[0].pageX, e.touches[0].pageY, .3, 0, 2*Math.PI, false);
		ctx.fillStyle = color;
		ctx.fill();
	}
	function movimiento(e){
		ctx.lineTo(e.touches[0].pageX, e.touches[0].pageY);
		ctx.stroke();
	}
	function fin(){
		ctx.closePath();
	}
	
	/*BOTONES*/
	$("#limpiar").click(function(){
		ctx.fillStyle = "#fff";
		ctx.fillRect (0, 0, canvasW, canvasH);
		color = $("#color").val();
		ancho = 3;
	});
	$("#borrar").click(function(){
		color = "#fff";
		ancho = 24;
	});
	$("#dibujar").click(function(){
		color = $("#color").val();
		ancho = 3;
	});
	$("#color").change(function(){
		color = $("#color").val();
		ancho = 3;
	});
	$("#guardar").click(function(){
		window.canvas2ImagePlugin.saveImageDataToLibrary(
			function(msg){
				alert("Guardado correctamente");
			},
			function(err){
				alert(err);
			},
			canvas
		);
	});

}