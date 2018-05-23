// JavaScript Document
$(document).ready(function(e) {
    document.addEventListener("deviceready", function(){
		$('#sonar').tap(function(){
			navigator.notification.beep(2);
});//cierre del beep
$('vibrar').tap(function(){
	navigator.notification.vibrate(2000);
});//cierre de vibrar
	},false);//cierre del deviceready
});//cierre ready
	
// JavaScript Document
$(document).ready(function(e) {
    document.addEventListener("deviceready", function(){
		$('#tocar').tap(function(){
			navigator.notification.beep(2);
});//cierre del beep
$('Beep').tap(function(){
	navigator.notification.vibrate(2000);
});//cierre de vibrar
	},false);//cierre del deviceready
});//cierre ready
	

$(document).ready(function(e){
	document.addEventListener("deviceready",function(){
		$('#izquierda').on("swipeleft",function(){
			navigator.notification.alert("Deslizo hacia la izquierda",function(){"aplicacion 7","ok"});
		});
		$('#derecha').on("swiperight",function(){
			navigator.notification.confirm("¿Que quieres hacer?",function(op){
				switch(op)
				{
					case 1:
					navigator.notification.beep(1);
					break;
					
					case 2:
					navigator.notification.vibrate(3000);
					break;
				}
			},"aplicacion 7","Beepear,Vibrar,Cancelar");
	  });
	},false);
});
