function verif() {
var form = document.adminForm;
var bg_color="#FF937F";
var mailexp = /^[a-zA-Z0-9\-_]+[a-zA-Z0-9\.\-_]*@[a-zA-Z0-9\-_]+\.[a-zA-Z\.\-_]{1,}[a-zA-Z\-_]+$/;
form.email.style.backgroundColor = "";
form.nom.style.backgroundColor = "";
form.tel.style.backgroundColor = "";
var error = 0;


var valeur = document.adminForm.email.value;
if ( form.email.value == '' || !mailexp.test(form.email.value) )
{
form.email.style.backgroundColor = bg_color;
error++;
}

if ( form.nom.value == ''  ) 
{
form.nom.style.backgroundColor = bg_color;
error++;
}

if ( form.tel.value == ''  ) 
{
form.tel.style.backgroundColor = bg_color;
error++;
}



if ( error == 0 ) {
document.getElementById('estclique').value='yes'
form.submit(); 
} 

else {	
alert("Merci de vérifier tous les champs obligatoires !");				
}
}

function envoyer(){
document.adminForm.submit();
}