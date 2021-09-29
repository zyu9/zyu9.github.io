//Show mascot
var shapeSides = prompt("Please enter a variable for Zealous Yoranian: ");
while(isNaN(shapeSides) || shapeSides > 10){
    shapeSides = prompt("Please enter a valid number: "); 
}

if(shapeSides%1 === 0){
    //The entry is integer
    var intEntry = parseInt(shapeSides); 

    //If negative, use absolute value
    if(intEntry < 0){
        intEntry = Math.abs(intEntry); 
    }
    alert("intEntry" + intEntry); 
}else{
    //The entry is decimal
    var decEntry = parseFloat(shapeSides); 

    //If negative, use absolute value
    if(shapeSides < 0){
        decEntry = Math.abs(decEntry); 
    }
    
    //Round decimal entry to nearest integer
    decEntry = Math.round(decEntry); 
    alert("decEntry" + decEntry); 
}

//alert("Shapessides: " + shapeSides); 


//var result = validEntry(shapeSides); 
//var valid = result.valid, s = result.s;

//while(valid === false){
//    shapeSides = prompt("Please enter a valid number: "); 
//}
//alert("Shape" + shape);
//var shape = getShape(shapeSides); 
//alert("Your shape is: " + shape + " with " + s + " number of sides");

/**
//function getShape(sides){
    var shapeName = ""; 
    switch (sides){
        case 0: shapeName = "No shape"; break; 
        case 1: shapeName = "Monogon"; break; 
        case 2: shapeName = "Bigon"; break; 
        case 3: shapeName = "Trigon"; break; 
        case 4: shapeName = "Tetragon"; break; 
        case 5: shapeName = "Pentagon"; break; 
        case 6: shapeName = "Hexagon"; break; 
        case 7: shapeName = "Septagon"; break; 
        case 8: shapeName = "Octagon"; break; 
        case 9: shapeName = "Nonagon"; break; 
        case 10: shapeName = "Decagon"; break; 
    }
    alert("shapeName in get shape" + shapeName); 
    return shapeName; 
//}

//function validEntry(entry){
    var valid = true; 
    //Get absolute value for the entry number
    var s = Math.abs(entry); 

    if(entry > 10 || isNaN(entry)){
        valid = false; 
        alert("Too large!"); 
    } else if(entry%1 != 0){
        //Get the nearest number for decimals
        var number = parseFloat(entry); 
        s = Math.round(number); 
    }
    alert("s in valid entry" + s); 
    return {valid, s}; 
//}
**/
