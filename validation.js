var form=document.getElementById("frm");

form.onsubmit =function validation(){

var frsname=document.getElementById("firstname");

var iocn=document.getElementById("ficon");

var frmsg=document.getElementById("frmsg");
var sec=document.getElementById("second");
var seicon=document.getElementById("seicon");

var mobile=document.getElementById("phone");


var mobicon=document.getElementById("numbericon");

var gmail=document.getElementById("email");
var gmailicon=document.getElementById("emailicon");

var password=document.getElementById("pass");

var passicon=document.getElementById("passicon");







if (frsname.value == "" || sec.value=="" || mobile.value=="" || gmail.value=="" ||  password.value==""  ) {

frsname.style.border="1px solid red";
frmsg.innerHTML="plz filled this box";
iocn.style.display="block";

sec.style.border="1px solid red";

seicon.style.display="block";

mobile.style.border="1px solid red";

mobicon.style.display="block";

gmail.style.border="1px solid red";

gmailicon.style.display="block";

password.style.border="1px solid red";

passicon.style.display="block";



return false;


}




}
