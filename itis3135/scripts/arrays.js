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
    var title1 = document.createElement("h2"); 
    title1.textContent = "The average salary is: ";
    var results = $("results"); 
    results.insertBefore(title1, $("average")); 

    var sum = 0; 
    for(var i = 0; i < salaries.length; i++){
        sum += parseInt(salaries[i]); 
    }
    var average = sum/salaries.length; 
    $("average").innerHTML = average; 

    var title2 = document.createElement('h2'); 
    title2.textContent = "The hightest salary is: ";
    results.insertBefore(title2, $("highest")); 

    salaries.sort(function(a,b){return a - b}); 
    var highest = salaries[salaries.length-1];
    $("highest").innerHTML = highest; 
}

function displaySalary(){
    var table = $('results_table');
    for(var i = 0; i < persons.length; i++){
        var row = table.insertRow(0);
        var cellName = row.insertCell(0);
        cellName.innerHTML = persons[i];
        for(var j = 0; j < salaries.length; j++){ 
            var cellSalary = row.insertCell(1);
            cellSalary.innerHTML = salaries[j];
        }
    }
}

function validEntry(entry){
    var valid = false; 
    if(isNaN(entry) || entry == null){
        valid = true; 
    }
    return valid; 
}

var $ = function (id) {
    return document.getElementById(id);
};

window.onload = function(){
    $('addSalary').onclick = addSalary; 
    $('displayResults').onclick = displayResults; 
    $('displaySalary').onclick = displaySalary; 
}

