var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
var calories = [3000,2500,1500,4000,2200,1200,4400];

var $ = function(id) { return document.getElementById(id); };

function updateCalorie(){
    var day = $('day').value; 
    alert(day);
    var calory = $('input_calorie').value; 
    var n; 

    if(day === null || calory === null){
        alert("Enter a valid number!");
    }else{
        for(var i = 0; i < days.length; i++){
            if(day === days[i]){
                n = i; 
            }
        }
        calories[n] = calory; 
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
    alert(average); 
    $("average_consumed_calorie").value = average; 
}

function  showMax(){

}

window.onload = function() {
    //event handlers
    $('update').onclick = updateCalorie; 
    $('average').onclick = showAverageCalories; 
};
