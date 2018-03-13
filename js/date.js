

window.onload = function () {

    //получаем идентификатор элемента
    var a = document.getElementById('mydate');
    var b = document.getElementById('mydate2');
    
    //вешаем на него событие
    a.onclick = function() {
		var today = new Date();
		var dd = today.getDate();
		var mm = today.getMonth()+1; //January is 0!
		var yyyy = today.getFullYear();
		if(dd<10){
		        dd='0'+dd
		    } 
		    if(mm<10){
		        mm='0'+mm
		    } 

		to = yyyy+'-'+mm+'-'+dd;
		
		document.getElementById("mydate").setAttribute("min", to);
		
    }
    b.onclick = function(){
    	back = document.getElementById("mydate").value;
    	document.getElementById("mydate2").setAttribute("min", back);
    }
}