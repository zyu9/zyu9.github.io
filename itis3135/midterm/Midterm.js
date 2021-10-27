var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
var calories = [3000,2500,1500,4000,2200,1200,4400];

var $ = function(id) { return document.getElementById(id); };

function updateCalorie(){
    var day = $('day').value; 
    alert(day);
    var calorie = $('input_calorie').value; 
    var n; 

    if(day === null || calorie === null){
        alert("Enter a valid number!");
    }else{
        for(var i = 0; i < days.length; i++){
            if(day === days[i]){
                n = i; 
            }
        }
        calories[n] = calorie; 
        alert("Your updated calories details are: " + calories);
    }
}

function showAverageCalories(){
    var sum = 0; 
    for(var i = 0; i < calories.length; i++)
    {
        sum += parseInt(calories[i]); 
    }
    var average = sum/calories.length; 
    $("average_consumed_calorie").value = average; 
}

function showMax(){
    var max = document.createElement("p"); 
    max.textContent = "Your maximum calorie is ";
    var show = $("showMax"); 
    show.appendChild(max); 
}

window.onload = function() {
    //event handlers
    $('update').onclick = updateCalorie; 
    $('average').onclick = showAverageCalories; 
    $('show_max').onmouseover = showMax; 
};
