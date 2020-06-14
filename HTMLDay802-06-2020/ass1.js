function check()
{
     var val1=document.getElementById("txtusername").value;   
     var val2=document.getElementById("txtemail").value;
     var val3=document.getElementById("txtrollno").value;
     var val4=document.getElementById("txtmobile").value;
     var n=/[a-zA-Z0-9]/
     var e=/^[a-zA-Z0-9.-_]{6,20}[@][a-z]{3,15}[.][a-z]{2,6}$/
     var r=/^[2][2][1][7][1][0][4][0-9]{2}[0-9]{3}$/
     var m=/^[6-9][0-9]{9}$/
     if(n.test(val1) && e.test(val2) && r.test(val3) && m.test(val4)){
         window.alert("valid");
     }
     else{
         window.alert("invalid");
     }
}