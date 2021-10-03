

function buttonTest(){
    alert("Hey my script is running");
}

function buttonSum(){
    var enter; 
    var total=0; 
    enter = prompt("Enter the number of dogs you have: ");
    enter = parseInt(enter); 
    var number1 = enter; 
    total = total + number1; 

    enter = prompt("Enter the number of cats you have: ");
    enter = parseInt(enter); 
    var number2 = enter; 
    total = total + number2; 

    enter = prompt("Enter the number of birds you have: ");
    enter = parseInt(enter); 
    var number3 = enter; 
    total = total + number3; 
    
    alert(userName + " have " + number1 + " dog(s), " + number2 + " cat(s), " 
        + number3 + " bird(s) " + total + " pet(s)"); 
}

function buttonTime(){
    var utcDate = today.getUTCDate(); 
    alert("Today's UTC Date is: " + utcDate); 

    var utcDay = today.getUTCDay(); 
    alert("Today's UTC Day is: " + utcDay); 

    var year = today.getFullYear(); 
    var timeFormed = year.parseInt - 2020; 
    alert("Today's Full Year is: " + year); 
    alert("We, " + companyName + ", formed: " + timeFormed + " years!");
}

function buttonUrl(){
    alert(window.location); 
}

function buttonItems(){
    var quantity;
    var dogFood = 15; 
    var catFood = 15; 
    var birdFood = 12; 

    quantity = prompt("How many dog food do you want? "); 
    quantity = parseInt(quantity);
    var quantity1 = quantity; 
    subTotal = subTotal + quantity1 * dogFood;
    
    quantity = prompt("How many cat food do you want? "); 
    quantity = parseInt(quantity);
    var quantity2 = quantity; 
    subTotal = subTotal + quantity2 * catFood;
    
    quantity = prompt("How many bird food do you want? "); 
    quantity = parseInt(quantity);
    var quantity3 = quantity; 
    subTotal = subTotal + quantity3 * birdFood;

    alert(userName + " want " + quantity1 + " dog food, " + quantity2 + " cat food, "
        + quantity3 + " bird food = " +  "$  "+ subTotal);  
}

function buttonTaxAndTotal(){
    var taxPercent = 0.1; 
    var taxAmount = subTotal * taxPercent; 
    var total = subTotal + taxAmount; 
    alert(userName + " total is: $ " + total); 
}
