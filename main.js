let ax = document.getElementById("myInput1");
let bx = document.getElementById("myInput2");
let cx = document.getElementById("myInput3");
let demo=document.querySelector('.demo');
let num1=ax.value;
let num2=bx.value;
let operator=cx.value;

let result;
function getValue(){

if(operator="+"){
    result=num1+num2
}else if(operator="-"){
    result=num1-num2
}else if(operator="/"){
    result=num1/num2
}else if(operator="*"){
    result=num1*num2
}else{
    result="yuq"
}

      console.log("salom");
      console.log(operator);
      console.log(ax.value);
      console.log(num2);
     
   
      demo.innerHTML=result   
      console.log("Natija: " + result);
    }
 


