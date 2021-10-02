var number1 = prompt("Enter first number: "); 
var number2 = prompt("\nEnter second number: "); 

document.getElementById("btnAdd").addEventListener("click", function(number1, number2){
    var result = parseFloat(number1) + parseFloat(number2); 
    alert("The sum is: " + result); 
});

document.getElementById("btnSub").addEventListener("click", function(number1, number2){
    var result = parseFloat(number1) - parseFloat(number2); 
    alert("The result is: " + result); 
});

document.getElementById("btnMul").addEventListener("click", function(number1, number2){
    var result = parseFloat(number1) * parseFloat(number2); 
    alert("The result is: " + result); 
});
document.getElementById("btnDivid").addEventListener("click", function(number1, number2){
    var result = parseFloat(number1) / parseFloat(number2); 
    alert("The result is: " + result); 
});

document.getElementById("btnMod").addEventListener("click", function(number1, number2){
    var result = parseFloat(number1) % parseFloat(number2); 
    alert("The result is: " + result); 
});

document.getElementById("btnPow").addEventListener("click", function(number1, number2){
    var result = Math.pow(parseFloat(number1), parseFloat(number2)); 
    alert("The result is: " + result); 
});