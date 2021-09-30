function buttonAddition(x, y){
    var result = x + y; 
    alert("The sum is: " + result); 
    //return result; 
}

function buttonSubtraction(x, y){
    var result = x - y; 
    alert("The result is: " + result); 
    //return result; 
}

function buttonMultiplication(x, y){
    var result = x * y; 
    alert("The result is: " + result); 
    //return result; 
}

function buttonDivision(x, y){
    var result = x / y; 
    alert("The result is: " + result); 
    //return result; 
}

function buttonModulus(x, y){
    var result = x % y; 
    alert("The result is: " + result); 
    //return result; 
}

function buttonPower(x, y){
    var result = Math.pow(x,y); 
    alert("The result is: " + result); 
    //return result; 
}

var number1 = prompt("Enter first number: "); 
var number2 = prompt("\nEnter second number: "); 

alert("number1"+ number1); 

document.getElementById("btnAdd").addEventListener("click", buttonAddition(number1, number2));
document.getElementById("btnSub").addEventListener("click", buttonSubtraction(number1, number2));
document.getElementById("btnMul").addEventListener("click", buttonMultiplication(number1, number2)); 
document.getElementById("btnDivid").addEventListener("click", buttonDivision(number1, number2)); 
document.getElementById("btnMod").addEventListener("click", buttonModulus(number1, number2));
document.getElementById("btnPow").addEventListener("click", buttonPower(number1, number2)); 
