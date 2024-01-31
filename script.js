function matchPassword() {  
  var pw1 = document.getElementById("pw");  
  var pw2 = document.getElementById("cmpw");  
  if(pw1 != pw2)  
  {   
    alert("Passwords did not match");  
  } else {  
    alert("Password created successfully");  
  }  
}  