This is one line comment


        console.log("Statement 1");

        console.log("Statement 2");

       console.log( document.getElementById("blue_box").innerHTML);

       document.getElementById("blue_box").innerHTML = "<h1>Testing</h1>"


       console.log( document.getElementById("blue_box").innerHTML);

var x ="prajjwal";
        console.log(x);
        document.getElementById("user_greeting_message").innerHTML="Hello " +x +"!!!!";

var orderValue = 2800;

if( orderValue >= 1000 ) {
    console.log("You are eligible to finance your order.");
} else {
    console.log("Finance options are not available for orders below US$1000");
}

function sum(){
        var num1=-27;
        var num2=55;
        return num2+num1;
}
document.getElementById("sum_result").innerHTML=sum();

var student={

        'firstName':'Prajjwal',
        'lastName':'kumar',
        'fullName': function(){
                return this.firstName  +this.lastName; 
        }

};


document.getElementById("click-me").onclick=function(){
        alert("You fucking clicked me!!!");
}
// document.getElementById("hover-me").onmouseover=function(){
//         alert("You fucking visited me!!!");
// }
function hover(){
        alert("aleart by html tag");
}

document.getElementById("leave-me").onmouseout=function(){
        alert("You fucking left me!!!");
}

document.onkeydown=function(event){
//console.log(event.key);
if(event.key=="a"){
        alert("A presss kia n abhi");

}
}


var elements = document.getElementsByClassName("example");
for(var a =0;a<elements.length;a++){
        elements[a].style.color="green";
        elements[a].style.fontWeight ="bold";

}


var employees = [
        
        {
            'name': 'Charles Silva',
            'age': 45,
            'children': ['Andrew Silva', 'Maria Silva']
            
        },

        {
            'name': 'Elizabeth Green',
            'age': 32,
            'children': ['Peter Green']
            
        },

        {
            'name': 'George Banks',
            'age': 39,
            'children': ['Philipp Banks', 'Rose Banks', 'Tara Banks']
            
        }
    
    ]; 

    document.getElementById("children").innerHTML =""
    for(var a =0;a<employees.length;a++){
        var childList=employees[a].children;

        for(var b=0;b<childList.length;b++){
            var child=childList[b];
            document.getElementById("children").innerHTML += "<li>" + child + "</li>";
        }
    }




document.getElementById("show-loader").onclick=function(){

        document.getElementById("spinner-loader").style.display="block";

        window.setTimeout(function(){document.getElementById("spinner-loader")
        .style.display="none"},2000);
};




document.getElementById("show-loader").onclick = function () {

        document.getElementById("spinner-loader").style.display = "block";
        window.setTimeout(function(){
            document.getElementById("spinner-loader").style.display = "none";
        }, 5000);

    };

function formatTime(number){
if(number<10){
        return "0" + number.toString();
} else{
        return number.toString();
}

}

var date=new Date();
var secCount=formatTime( date.getSeconds());
var minCount= formatTime( date.getMinutes());
var hrCount=formatTime( date.getHours());
document.getElementById("seconds").innerHTML=secCount;
document.getElementById("minutes").innerHTML=minCount;
document.getElementById("hours").innerHTML=hrCount;
window.setInterval(function(){
        document.getElementById("seconds").innerHTML=formatTime( secCount);
        if(secCount<60){
        secCount++;
}else{
                document.getElementById("minutes").innerHTML=formatTime(minCount);
                if(minCount<60){
                        minCount++;
                }else{
                        document.getElementById("hours").innerHTML=formatTime(hrCount);

                        if(hrCount<24){
                                hrCount++;

                        }else{
                                hrCount=01;hrCount++;

                        }
                        minCount=0;minCount++;
                }
        secCount=0;secCount++;}
},1000);



document.getElementById("show_option").onclick = function () {
var selectFIeld=document.getElementById("options");
var selectedOption= selectFIeld.options.selectedIndex;
var selectedValue=selectFIeld.options[selectedOption];
console.log(selectedValue.innerHTML);
     document.getElementById("selected_option").innerHTML=selectedValue.innerHTML;
    };



document.getElementById("show_radio")
.onclick = function () {

        var radio = document.getElementsByName("gender");
var radioSelected;
for(var a=0;a<radio.length;a++){
        if(radio[a].checked){
                radioSelected=radio[a];
                console.log(radioSelected.value);
                document.getElementById("selected_radio")
                .innerHTML=radioSelected.value;
        }

}

}

document.getElementById("show_check")
 .onclick = function () {
        document.getElementById("selected_check")
        .innerHTML=""
         var check=document.getElementsByName("interest");
         for(var a =0;a,check.length;a++){
if(check[a].checked){
                document.getElementById("selected_check")
                 .innerHTML+="<li>"+check[a].value +"</li>"
             }    }




 }


document.getElementById("education_level").onchange= function () {

        var select=document.getElementById("education_level");
        var selectedOption1=select.options.selectedIndex;
        var final=select.options[selectedOption1];

        document.getElementById("selected_level").innerHTML=final.innerHTML;
};

var check=document.getElementsByName("meal");
document.getElementById("selected_check")
                        .innerHTML="";
for(var a=0;a<check.length;a++){
check[a].onchange=function(){
        //  if(check[a].checked){
                        document.getElementById("selected_check")
                        .innerHTML+="<li>"+check[a].value+"</li>";
                // }
        }

}



























 