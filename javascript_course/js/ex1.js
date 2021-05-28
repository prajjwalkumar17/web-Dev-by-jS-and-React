var firstName ="Prajjwal";
var lastName ="kumar";
var birthYear=2000;
var cureentYear=2021;
var age=cureentYear-birthYear;
document.getElementById("student_message")
.innerHTML="Hi, my name is "+firstName +" "+lastName +" I'm " 
+age +" years old and I'm learning Javascript.";


var result= document.getElementById("num_1").innerHTML / document.getElementById("num_2").innerHTML;

document.getElementById("result").innerHTML=result.toFixed(2);



    var phone1 = "988866552";
    var phone2 = "99087612366";
    var phone3 = 876543123;
    if(typeof(phone1)==Number && typeof(phone2)==Number && typeof(phone3)==Number){
        console.log("All nos are valid");
    } else {
        console.log("One or more of the following nos is invalid");
    }


console.log(Math.pow(32,6));

var url1=document.getElementById("url_1").innerHTML;
document.getElementById("url_2").innerHTML="https://"+url1;
var url2=document.getElementById("url_3").innerHTML;
document.getElementById("url_4").innerHTML=url2.replace("https://","");
















