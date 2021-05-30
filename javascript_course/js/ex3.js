
function tempConvert(celcius){
    var F = (9 * celcius / 5) + 32;
    return F;
}

var Button =document.getElementById("convert");
Button.onclick=function(){
    Button.style.backgroundColor="yellow";
    Button.style.transform = "translateX(100px)";
    document.getElementById("temp_fahr").innerHTML=tempConvert(document.getElementById("temp_celsius").value);
}

document.getElementById("anos_copa").innerHTML="";
for(var a=2022;a<=2050;a+=4){
    document.getElementById("anos_copa").innerHTML += a + " , " ;
}


function avgMarks(num1,num2){
    var avg1 =(num1)/100;
    var avg2=(num2)/100;
    return avg1+avg2;
}




document.getElementById("result").innerHTML="";
document.getElementById("calculate").onclick= function(){
var absenct=(20-document.getElementById("absences").value);
var totAvgMarks=avgMarks(document.getElementById("grade1").value,document
.getElementById("grade2").value);
if(absenct < 14){
document.getElementById("result")
.innerHTML+="The student failed as his attendance was "+absenct +" which is less than 70%";
}
else if(totAvgMarks<6.5){
document.getElementById("result")
.innerHTML+="The student failed as his avg amrks was "+totAvgMarks +"which is less than 6.5";
}else{
document.getElementById("result").innerHTML +="The avg marks obtained is "+totAvgMarks;
}
console.log(absenct);
console.log(totAvgMarks);
}



var sales = [
    {'student': 'Jason Gomes',
        'date': '10/06/2018',
        'amount': 34.99,
        'refundRequested': null},
    {'student': 'Carlos Blue',
        'date': '10/06/2018',
        'amount': 29.99,
        'refundRequested': null},
    {'student': 'Martin Heyes',
        'date': '11/06/2018',
        'amount': 39.99,
        'refundRequested': '13/06/2018'},
    {'student': 'Isabella Hopkins',
        'date': '11/06/2018',
        'amount': 29.99,
        'refundRequested': null},
    {'student': 'Andrew Walt',
        'date': '12/06/2018',
        'amount': 34.99,
        'refundRequested': null}];

        document.getElementById("course_sales").innerHTML="";
        var totalsales=0;
        for(var a=0;a<sales.length;a++){
            var sale=sales[a];
            if(! sale.refundRequested){
            var line="<tr>";
            line += "<td>"+sale.student+"</td>";
            line += "<td>"+sale.date+"</td>";
            line += "<td>"+sale.amount.toString()+"</td>";
            line += "</tr>";
            document.getElementById("course_sales").innerHTML+=line;
             totalsales+=sale.amount;
        }}
        document.getElementById("total_sold").innerHTML="";
        document.getElementById("total_sold").innerHTML+=totalsales



    





























