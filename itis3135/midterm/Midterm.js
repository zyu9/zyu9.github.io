var days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];
var calories = [3000,2500,1500,4000,2200,1200,4400];

var $ = function(id) { return document.getElementById(id); };

function updateCalorie(){
    var day = $('day').value; 
    var calory = $('input_calorie').value; 
    alert(day + calory);
}

function showAverageCalories(){

}

function  showMax(){

}

window.onload = function() {
    //event handlers
    $('update').onclick = updateCalorie; 
};
