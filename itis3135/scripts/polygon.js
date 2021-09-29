//Show mascot
var shapeSides = prompt("Please enter a variable for Zealous Yoranian: ");
while(validEntry(shapeSides)){
    shapeSides = prompt("Please enter a valid number: "); 
}

var nameOfShape = ""; 
var numberOfSides = 0; 

if(shapeSides%1 === 0){
    //The entry is integer
    numberOfSides = parseInt(shapeSides); 

    //If negative, use absolute value
    if(numberOfSides < 0){
        numberOfSides = Math.abs(numberOfSides); 
    }
    //alert("intEntry" + intEntry); 
}else{
    //The entry is decimal
    numberOfSides = parseFloat(shapeSides); 

    //If negative, use absolute value
    if(numberOfSides < 0){
        numberOfSides = Math.abs(numberOfSides); 
    }
    
    //Round decimal entry to nearest integer
    numberOfSides = Math.round(numberOfSides); 
    //alert("decEntry" + decEntry); 
}

//Get results
nameOfShape = getShape(numberOfSides); 
alert("Your shape's number of sides:   " + numberOfSides + "  Shapes:  " + nameOfShape); 

function validEntry(entry){
    var valid = false; 
    if(isNaN(entry) || entry > 10){
        valid = true; 
    }
    return valid; 
}

function getShape(sides){
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

    return shapeName; 
}

/**
if(intEntry == 0 || decEntry == 0){
    shapeName = "No shape";
}else if(intEntry == 1 || decEntry == 1){
    shapeName = "Monogon";
}else if(intEntry == 2 || decEntry == 2){
    shapeName = "Bigon";
}else if(intEntry == 3 || decEntry == 3){
    shapeName = "Trigon";
}else if(intEntry == 4 || decEntry == 4){
    shapeName = "Tetragon";
}else if(intEntry == 5 || decEntry == 5){
    shapeName = "Pentagon";
}else if(intEntry == 6 || decEntry == 6){
    shapeName = "Hexagon";
}else if(intEntry == 7 || decEntry == 7){
    shapeName = "Septagon";
}else if(intEntry == 8 || decEntry == 8){
    shapeName = "Octagon";
}else if(intEntry == 9 || decEntry == 9){
    shapeName = "Nonagon"; 
}else if(intEntry == 10 || decEntry == 10){
    shapeName = "Decagon";
}

//var result = validEntry(shapeSides); 
//var valid = result.valid, s = result.s;

//while(valid === false){
//    shapeSides = prompt("Please enter a valid number: "); 
//}
//alert("Shape" + shape);
//var shape = getShape(shapeSides); 
//alert("Your shape is: " + shape + " with " + s + " number of sides");


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

function validEntry(entry){
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
