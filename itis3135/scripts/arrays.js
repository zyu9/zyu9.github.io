var persons = []; 
var salaries = []; 

function addSalary(){
    var person = $("employees").value;
    persons.push(person); 

    var salary = prompt("Please enter salary for " + person);
    while(validEntry(salary)){
        salary = prompt("Please enter a valid number: "); 
    }
    salaries.push(salary); 
}

function displayResults(){
    //add h2 title for average salary
    var title1 = document.createElement("h2"); 
    title1.textContent = "The average salary is: ";
    var results = $("results"); 
    results.insertBefore(title1, $("average")); 

    //find the average salary & display to <p>
    var sum = 0; 
    for(var i = 0; i < salaries.length; i++){
        sum += parseInt(salaries[i]); 
    }
    var average = sum/salaries.length; 

    alert("displayResults: sum " + sum);
    $("average").innerHTML = average; 

    //add h2 title for highest salary
    var title2 = document.createElement('h2'); 
    title2.textContent = "The hightest salary is: ";
    results.insertBefore(title2, $("highest")); 

    //find the highest salary & display to <p>
    salaries.sort(function(a,b){return a - b}); 
    var highest = salaries[salaries.length-1];
    $("highest").innerHTML = highest; 
    alert("displayResults: highest " + highest);
}

function displaySalary(){
    var table = $('results_table');
    //get the names and values from the arrays and display them as rows
    for(var i = 0; i < persons.length; i++){
        for(var j = 0; j < salaries.length; j++){ 
        var row = table.insertRow(0);
        var cellName = row.insertCell(0);
        cellName.innerHTML = persons[i];
        var cellSalary = row.insertCell(1);
        cellSalary.innerHTML = salaries[j];
        }
    }
}

function validEntry(entry){
    //data validation for add function
    var valid = false; 
    if(isNaN(entry) || entry == null){
        valid = true; 
    }
    return valid; 
}

//Make application move the cursor to the name field 
//when the application starts and after a name and salary have been added, 
//or when the the user clicks the add button.

var $ = function (id) {
    return document.getElementById(id);
};

window.onload = function(){
    $('addSalary').onclick = addSalary; 
    $('displayResults').onclick = displayResults; 
    $('displaySalary').onclick = displaySalary; 
}

