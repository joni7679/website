var a = document.getElementById("firstname");
a.onblur = function call(){
    
    var input =document.getElementById("firstname").value;
    
    var textbox = document.getElementById("firstname");
    
    var fsticon = document.getElementById("ficon");
    var box=document.getElementById("name");
    
    if (input =="") {
        
        
        textbox.style.border=" 1px solid red";
        fsticon.style.display="block";
    }
    
 textbox.onclick=function() {

textbox.style.border="1px solid gray";
fsticon.style.display="none";
box.style.display="block";


   }
   
   textbox.onblur=function() {
box.style.display="none";
call()


   }
   
   
   
    
}







var sec = document.getElementById("second");
sec.onblur=function secinput(){
       var input =document.getElementById("second").value;
    
     var textbox = document.getElementById("second");
     
       var fsticon = document.getElementById("seicon");
    
    if (input=="") {
    textbox.style.border=" 1px solid red";
        fsticon.style.display="block";
        
    }
    
    textbox.onclick =function(){
	textbox.style.border="1px solid gray";
fsticon.style.display="none";
	
	
	
	}
	
	
    
}




// show password code


var check=document.getElementById("check");
check.onclick =function  pass() {

    var pass=document.getElementById("pass");
var box=document.getElementById("cbox");

    if(check.checked){

pass.type = "text";

box.innerHTML="hide password";

    }

    else{

pass.type = "password";

box.innerHTML="show password";
    }
    // body...
}



// show password end








// phone number code 


var a = document.getElementById("phone");
a.onblur = function call(){
    
    var input =document.getElementById("phone").value;
    
    var textbox = document.getElementById("phone");
    
    var fsticon = document.getElementById("numbericon");
    var phone =document.getElementById("phonecall");
    
    if (input =="") {
        
        
        textbox.style.border=" 1px solid red";
        fsticon.style.display="block";
    }
    
   textbox.onclick=function(){

 textbox.style.border=" 1px solid gray";
        fsticon.style.display="none";
        phone.style.display="block";


   }

   textbox.onblur=function(){
   phone.style.display="none";
call()

   }
   
   
   
   
    
}


// phone number end

 




// emil code star

var email = document.getElementById("email");
email.onblur=function secinput(){
       var input =document.getElementById("email").value;
    
     var textbox = document.getElementById("email");
     
       var fsticon = document.getElementById("emailicon");
       var gmail=document.getElementById("gmail");
    
    if (input=="") {
    textbox.style.border=" 1px solid red";
        fsticon.style.display="block";
        
    }


    textbox.onclick=function(){
 textbox.style.border=" 1px solid gray";
        fsticon.style.display="none";
        gmail.style.display="block";
}
    
    textbox.onblur=function(){
 gmail.style.display="none";
secinput()

    }
    
    
}

//gmail code end



// password code star

var a = document.getElementById("pass");
a.onblur = function call(){
    
    var input =document.getElementById("pass").value;
    
    var textbox = document.getElementById("pass");
    
    var fsticon = document.getElementById("passicon");
    var password=document.getElementById("password");
    
    if (input =="") {
        
        
        textbox.style.border=" 1px solid red";
        fsticon.style.display="block";
    }
    

    textbox.onclick=function(){

textbox.style.border=" 1px solid gray";
        fsticon.style.display="none";
password.style.display="block"

    }

    textbox.onblur=function(){
password.style.display="none";
call();



    }    
}


// password code end





//validation code star 
