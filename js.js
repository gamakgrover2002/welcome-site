function greet(){
    var first= document.getElementById('firstname').value;
    var last = document.getElementById('lastname').value;
   first = first.toUpperCase();
   last = last.toUpperCase();
   document.getElementById('fname').innerText = "WELCOME "+first;
   document.getElementById('lname').innerText = last;
 }
   