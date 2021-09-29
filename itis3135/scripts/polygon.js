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
}else{
    //The entry is decimal
    numberOfSides = parseFloat(shapeSides); 

    //If negative, use absolute value
    if(numberOfSides < 0){
        numberOfSides = Math.abs(numberOfSides); 
    }
    
    //Round decimal entry to nearest integer
    numberOfSides = Math.round(numberOfSides); 
}

//Get results
nameOfShape = getShape(numberOfSides); 
alert("Your shape's number of sides:   " + numberOfSides + "  Shape:  " + nameOfShape); 

//Functioons
function validEntry(entry){
    var valid = false; 
    if(isNaN(entry) || entry > 10 || entry < -10){
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
