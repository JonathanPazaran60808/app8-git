// JavaScript Document

 $(document).ready(function (e){
	 document.addEventListener ("deviceready",function(){
		 $('#disp table td').eq(3).text(device.model);
		 $('#disp table td').eq(5).text(device.cordova);
		 $('#disp table td').eq(7).text(device.platform);
		 $('#disp table td').eq(9).text(device.version);
		 $('#disp table td').eq(11).text(device.uuid);
	  document.addEventListener("pause",function(){	
	    escribehistoria ('la app se pauso');
	  },false);//pause
	  document.addEventListener("resume",function(){	
	    escribehistoria ('la app se reinicio');
	  },false);//resume
	  document.addEventListener("online",function(){
		   escribehistoria ('la app se conecto de la red');
	  },false);//se conecto
	   document.addEventListener("offline",function(){
		   escribehistoria ('la app se desconecto de la red');
	  },false);//se desconecto
	  
	  
	 },false);//ready device
	 
	 
 });//document
 
 function escribehistoria(accion){
	 $('#eHistoria').append('<li>'+accion+'</li>');
 }
	
// JavaScript Document
$(document).ready(function(e) {
    document.addEventListener("deviceready", function(){
		$('#sonar').tap(function(){
			navigator.notification.beep(2);
});//cierre del beep
$('#vibrar').tap(function(){
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
