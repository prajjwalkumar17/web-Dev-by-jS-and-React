// This is one line comment


        // console.log("Statement 1");

        // console.log("Statement 2");

//        console.log( document.getElementById("blue_box").innerHTML);

//        document.getElementById("blue_box").innerHTML = "<h1>Testing</h1>"


//        console.log( document.getElementById("blue_box").innerHTML);

// var x ="prajjwal";
//         console.log(x);
//         document.getElementById("user_greeting_message").innerHTML="Hello " +x +"!!!!";

// var orderValue = 2800;

// if( orderValue >= 1000 ) {
//     console.log("You are eligible to finance your order.");
// } else {
//     console.log("Finance options are not available for orders below US$1000");
// }

// function sum(){
//         var num1=-27;
//         var num2=55;
//         return num2+num1;
// }
// document.getElementById("sum_result").innerHTML=sum();

// var student={

//         'firstName':'Prajjwal',
//         'lastName':'kumar',
//         'fullName': function(){
//                 return this.firstName  +this.lastName; 
//         }

// };



// <button id="click-me">Click here</button>
//     <button id="hover-me">Move the cursor over here</button>
//     <button id="leave-me">Move the cursor out of here</button>

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










 