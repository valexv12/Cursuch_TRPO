function check(){
var email=document.getElementById("inputEmail").value;
var pas=document.getElementById("InputPassword").value;
var pas2=document.getElementById("InputPassword2").value;
	if(email!="" && pas!="" && pas2!=""){
if (pas.length<8 || pas.length>20)
 {
 	document.getElementById('al').style.display = 'block';
 	return false;

}
else{
	document.getElementById('al').style.display = 'none';
}
if(pas!=pas2){
	document.getElementById('pas').style.display = 'block';
	return false;
}
else{
	document.getElementById('pas').style.display = 'none';
}
}}